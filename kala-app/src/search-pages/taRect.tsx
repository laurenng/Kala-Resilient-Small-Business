import React from 'react';
import './searchStyle.css';
import { RouteComponentProps, withRouter } from 'react-router'; 
import { updateTA } from "../redux-data/actions";
import { connect } from "react-redux";
import { AppState, Filters, TA } from "../redux-data/types";
import fetchFromAPI from '../redux-data/fetchFromAPI';

interface props extends RouteComponentProps<any> {
  /* other props for ChildComponent */
  currentFilter: Filters,
  updateTA: (TA: TA) => void
}

// states that belong to SearchHome
interface state {
  technicalAssistance: any,
}

class TaRect extends React.Component<props, state> {
    constructor(props: props, state: state){
      super(props);
      this.state = {
        technicalAssistance: []
      };
    }

    render() {
      // map through every technical assistance to display all
      let displayContent = this.state.technicalAssistance.map((d: any, i: number) => {
        return(
          <div key = {i}>
            {this.individualRect(i)}
          </div>
        )
      })
      
      return (
          <div>
            {displayContent}
          </div>
      );
    }

    private individualRect = (num: number) => {
      let d = this.state.technicalAssistance[num];
      // limits length of description being shown. Current limit is at 25 words
      let shortenDescription = d.description.split(' ').slice(0,25).join(' ')
      // getting a shorten version of the link that only keeps part before 
      // all the mumble jumble 
      let shortenWebsite = d.website.split('/')[2];
      return(
        <div className="fundBox" onClick={() => this.handleClick(d)}>
            <h1>{d.orgName}</h1>
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

    // fix routing issue here! 
    handleClick (d: TA) {
      console.log(d);
      this.props.history.push('/expandTA');
      this.props.updateTA(d);
    }

    async componentDidMount() {
      
      let url ="http://kala.eba-ygpy7sha.us-west-2.elasticbeanstalk.com/assistance";
      await fetchFromAPI(url).then(data => {
        let selectedData = this.compareLanguages(data);
        console.log(selectedData);
        this.setState({
          technicalAssistance: selectedData
        })
      });
      
    }

    private compareLanguages(data: TA[]) {
      // selected languages user selected in onboarding form
      let languageFilter = this.props.currentFilter.language.value;

      // this could be more efficient with hashset + O(1) lookup...
      // currently we are at O(n)

      // creating set of selected languages
      let selectedLanguages: string[] = [];
      Object.keys(languageFilter).map((d: string) => {
        if (languageFilter[d]) {
          selectedLanguages.push(d);
        }
        return d;
      })
      let languageSet = new Set(selectedLanguages);

      if (languageSet.size === 0) {
        return data;
      }
      
      // iterating through the current TA dataset to find 
      // only the relevant TA providers that match their selected
      // languages

      // FIX THE MAPS THEY"RE UGLY
      let selectedData: any = [];
      data.map((d: TA) => {
        let languages = d.languages;
        for (let i=0; i< languages.length; i++) {
          if(languageSet.has(languages[i])) {
            selectedData.push(d);
            break;
          }
        }
        return null;
      })

      return selectedData;
    }
}

function mapStateToProps(state: AppState) {
  return { 
    currentFilter: state.currentFilter
  }
}

function mapDispatchToProps(dispatch: any)  {
  return {
    updateTA: ( TA: TA ) => dispatch(updateTA(TA))
  }    
}
    
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TaRect));