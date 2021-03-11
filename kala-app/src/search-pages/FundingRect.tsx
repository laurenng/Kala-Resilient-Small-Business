/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import './searchStyle.css';
import { RouteComponentProps, withRouter } from 'react-router'; 
import { updateFund } from "../redux-data/actions";
import { connect } from "react-redux";
import { AppState, Fund, Filters} from "../redux-data/types";
import fetchFromAPI from "../redux-data/fetchFromAPI";
import booleanCheck from './filterCheck';

// font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd, faHandshake } from '@fortawesome/free-solid-svg-icons';

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

      let funding = null;

      if (d.fundingType === "Loan") {
        funding = <FontAwesomeIcon icon={faHandshake} size="1x" color="#EA5F14" />
      } else { // grants 
        funding = <FontAwesomeIcon icon={faHandHoldingUsd} size="1x" color="#EA5F14" />
      }
      // getting a shorten version of the link that only keeps part before 
      // all the mumble jumble 
      let shortenWebsite = d.website.split('/')[2];
      if (shortenWebsite.length > 15) {
        shortenWebsite = shortenWebsite.substring(0,15)
      }
      return(
        <div className="fundBox" onClick={() => this.handleClick(d)}>
         <h1>{d.fundingName}</h1>
         <div className="inline">
            
            <div className="turquoise-box">
              <a href={d.website} rel="noreferrer" target="_blank">{shortenWebsite}</a>
            </div>
            <h3>{funding} {d.fundingType} </h3>
         </div>
         
         <br></br>
         <br></br>
         <div className="learnMoreBox">
           <h1>Learn More</h1>
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
          selectedReasons.push(d.toLowerCase());
        }
        return d;
      })

      // creating set of selected business demographics
      let selectedDemographics: string[] = [];
      Object.keys(demoFilters).map((d: string) => {
        if (demoFilters[d]) {
          selectedDemographics.push(d.toLowerCase());
        }
        return d;
      })

      // values the user selected to be considered
      let reasonSet = new Set(selectedReasons);
      let demoSet = new Set(selectedDemographics);

      if (reasonSet.size === 0 && demoSet.size === 0) {
        return data;
      }
      
      let selectedData = new Set();
      data.map((d: Fund) => {
        let uses = d.qualifications.useCases; 
        let demographic = d.qualifications.demographics; 

        let useBoolean = booleanCheck(reasonSet, uses); 
        let demoBoolean = booleanCheck(demoSet, demographic); 
        
        if (useBoolean || demoBoolean) {
          selectedData.add(d);
        }
        return null;
      })
      // change set into array 
      // console.log(selectedData);
      return Array.from(selectedData);
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

