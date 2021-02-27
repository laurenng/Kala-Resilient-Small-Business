/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import './searchStyle.css';
import { RouteComponentProps, withRouter } from 'react-router'; 
import { updateFund } from "../redux-data/actions";
import { connect } from "react-redux";
import { AppState, Fund, Filters} from "../redux-data/types";
import fetchFromAPI from "../redux-data/fetchFromAPI";

interface props extends RouteComponentProps<any> {
  /* other props for ChildComponent */
  currentFilter: Filters,
  currentFund: Fund,
  updateFund: (fund: Fund) => void;
}

// states that belong to SearchHome
interface state {
  fundingOpps: any,
  
}

class FundingRect extends React.Component<props, state> {
    constructor(props: props, state: state){
      super(props);
      this.state = {
        fundingOpps: []
      };
    }

    render() {
      // map through every technical assistance to display all
      
      let displayContent = this.state.fundingOpps.map((d: any, i: number) => {
        return(
          <div key = {i}>
            {this.individualRect(i)}
          </div>
        )
      }) 
      // if no funding avaliable, this is message we will have in place 
      if (this.state.fundingOpps.length === 0) {
        displayContent = <h3>Please change your filters we don't have options for you</h3>
      } 
      console.log(this.state.fundingOpps)
      
      return (
          <div>
            {displayContent}
          </div>
      );
    }

    private individualRect = (num: number) => {
      
      // getting the object specific at the index represented at num
      let d = this.state.fundingOpps[num];
      // limits length of description being shown. Current limit is at 25 words
      let shortenDescription = d.description.split(' ').slice(0,25).join(' ')
      // getting a shorten version of the link that only keeps part before 
      // all the mumble jumble 
      let shortenWebsite = d.website.split('/')[2];
      return(
        <div className="fundBox" onClick={() => this.handleClick(d)}>
         <h1>{d.fundingName}</h1>
         <div className="inline">
          <h3><strong>Due: </strong></h3> {d.endDate === null ? "No End Date" : d.endDate}
         </div>
         <h3><strong>Type: </strong> {d.fundingType}</h3>
         <p className="fundingFont">{shortenDescription}</p>
         <div className="moreDetailsBox learnMore">
          <p>Learn More</p>
         </div>
         <div className="moreDetailsBox url">
          <a href={d.website} rel="noreferrer" target="_blank">Visit {shortenWebsite}</a>
         </div>
     </div>

      )
    }

    handleClick (d: Fund) {
      console.log(d);
      this.props.history.push('/expandFunds');
      this.props.updateFund(d);
    }

    async componentDidMount() {
      let url ="http://kala.eba-ygpy7sha.us-west-2.elasticbeanstalk.com/funding";
      await fetchFromAPI(url).then(data => {
        let selectedData = this.filterData(data);
        console.log(selectedData);
        this.setState({
          fundingOpps: selectedData
        })
      });
    }

    private filterData(data: Fund[]) {
      // selected languages user selected in onboarding form
      let useFilters = this.props.currentFilter.reason.value;
      let demoFilters = this.props.currentFilter.demographic.value;

      // creating set of selected uses
      let selectedReasons: string[] = [];
      Object.keys(useFilters).map((d: string) => {
        if (useFilters[d]) {
          selectedReasons.push(d);
        }
        return d;
      })

      let selectedDemographics: string[] = [];
      Object.keys(demoFilters).map((d: string) => {
        if (demoFilters[d]) {
          selectedDemographics.push(d);
        }
        return d;
      })

      // values the user selected to be considered
      let reasonSet = new Set(selectedReasons);
      let demoSet = new Set(selectedDemographics);

      // if (reasonSet.size === 0) {
      //   return data;
      // }
      
      let selectedData = new Set();
      data.map((d: Fund) => {
        let uses = d.qualifications.useCases; 
        let demographic = d.qualifications.demographics; 

        let useBoolean = this.booleanCheck(reasonSet, uses); 
        let demoBoolean = this.booleanCheck(demoSet, demographic); 
        
        if (useBoolean || demoBoolean) {
          selectedData.add(d);
        }
        return null;
      })
      // change set into array 
      console.log(selectedData);
      return Array.from(selectedData);
    }

    private booleanCheck(dSet: any, filter: any) {
      for (let i=0; i< filter.length; i++) {
        if (dSet.has(filter[i])) {
          return true;
        }
      }
      return false;
    } 
  }

  

function mapStateToProps(state: AppState) {
  return { 
    currentFilter: state.currentFilter,
    currentFund: state.currentFund
  }
}

function mapDispatchToProps(dispatch: any)  {
  return {
    updateFund: ( fund: Fund ) => dispatch(updateFund(fund))
  }    
}
    
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FundingRect));

