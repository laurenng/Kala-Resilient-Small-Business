/*
This creates the technical assistance provider list. Each 
technical assistant provider includes the name, link to additional
information, and url. This class also utilizes filtering criterias 
from the search form to narrow the list of displayed TA providers.
*/

import React from 'react';
import './searchStyle.css';
import { RouteComponentProps, withRouter } from 'react-router'; 
import { updateTA } from "../reduxData/actions";
import { connect } from "react-redux";
import { AppState, Filters, TA} from '../reduxData/types';
import fetchFromAPI from '../reduxData/fetchFromAPI';
import booleanCheck from './filterCheck';

interface props extends RouteComponentProps<any> {
  /* other props for ChildComponent */
  currentFilter: Filters,
  updateTA: (TA: TA) => void
}

// states that belong to SearchHome
interface state {
  technicalAssistance: any[],
  technicalAssistance2: any[]
}

class TaRect extends React.Component<props, state> {
    constructor(props: props, state: state){
      super(props);
      this.state = {
        technicalAssistance: [],
        technicalAssistance2: []
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

      let displayContent2 = this.state.technicalAssistance2.map((d: any, i: number) => {
        return(
          <div key = {i}>
            {this.individualRect(d)}
          </div>
        )
      }) 
      
      return (
        <div>
        {this.state.technicalAssistance2.length > 0 ? 
          <div><h3> Your matches</h3><p>{this.state.technicalAssistance.length} matches</p></div> : <h3></h3>
        }
        <div id="fundGroup">
          {displayContent}
        </div>
    
        {this.state.technicalAssistance2.length > 0 ? <h3>Other</h3> : <h3></h3>}
        <div id="fundGroup">
          {displayContent2}
        </div>
      </div>

      );
    }

    private individualRect = (num: number) => {
      let d = this.state.technicalAssistance[num];
      // getting a shorten version of the link that only keeps part before 
      // all the mumble jumble 
      let shortenWebsite = d.website.split('/')[2];
      return(
        <div className="fundBox" onClick={() => this.handleClick(d)}>
            <div className="fundBoxTop">
              <h1>{d.orgName}</h1>
              <div className="turquoise-box">
                <a href={d.website} rel="noreferrer" target="_blank">Visit {shortenWebsite}</a>
              </div>
              <br></br>
            </div>
            <div className="learnMoreBox">
              <h1>Learn More</h1>
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
      let url ="https://ckbyvv1y8e.execute-api.us-west-2.amazonaws.com/rsb/assistance";
      await fetchFromAPI(url).then(data => {
        let selectedData = this.compareLanguages(data);
        // console.log(selectedData);
        this.setState({
          technicalAssistance: selectedData
        })
      });
    }

    private compareLanguages(data: TA[]) {
      // selected languages user selected in onboarding form
      let languageFilter = this.props.currentFilter.language.value;
      // object of selected demographics the user selected in onboarding form
      let demoFilters = this.props.currentFilter.demographic.value;
      // this could be more efficient with hashset + O(1) lookup...
      // currently we are at O(n)

      // creating set of selected languages
      let selectedLanguages: string[] = [];
      Object.keys(languageFilter).map((d: string) => {
        if (languageFilter[d]) {
          selectedLanguages.push(d.toLowerCase());
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
      // console.log(selectedLanguages);
      let languageSet = new Set(selectedLanguages);
      let demoSet = new Set(selectedDemographics);
      // console.log(languageSet);
      // console.log(demoSet);

      if (languageSet.size === 0 && demoSet.size === 0) {
        return data;
      }

      let selectedData = new Set();
      let secondaryData = new Set();

      data.map((d: TA) => {
        // String[] of API data of TAs
        let languages = d.languages;
        let demographics = d.demographics; 

        let langBoolean = booleanCheck(languageSet, languages); 
        let demoBoolean = booleanCheck(demoSet, demographics); 
        if (langBoolean || demoBoolean) {
          selectedData.add(d);
        } else {
          secondaryData.add(d);
        }
        return null;
      })

      this.setState({
        technicalAssistance2: Array.from(secondaryData)
        
      })
      
      // change set into array 
      // console.log(selectedData);
      return Array.from(selectedData);
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