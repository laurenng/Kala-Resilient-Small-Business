import React from 'react';
import './searchStyle.css';
import { FundingRect } from './FundingRect';
import {TaRect} from './taRect';

// properties that belong to SearchHome
interface searchProps {
  
}

// states that belong to SearchHome
interface searchState {
  fundingOpps: any[],
  technicalAssistance: any[],
  tab: string
}

class SearchHome extends React.Component<searchProps, searchState> {
    constructor(props: searchProps, state: searchState){
      super(props);
      this.state = {
        fundingOpps: [],
        technicalAssistance: [],
        tab: "funding"
      };
    }

    render() {
      let displayContent; 
      if(this.state.tab === "funding") {
        displayContent = this.state.fundingOpps.map((d) => {
          return(
            <FundingRect fundingObj={d} key={d.id}></FundingRect>
          )
        })
      } else { // if tab is on Technical assistance
        console.log(" in ta assistance tab")
        displayContent = this.state.technicalAssistance.map((d) => {
          console.log(d);
          return(
            <TaRect technicalObj={d} key={d.id}></TaRect>
          )
        })
      }

      return (
          <div id="searchMain">
            <h1>Fill out this form to filter results</h1>
            <div className="inline">
              <div className = "button" onClick={this.fundingClick}>
                <h1>Funding</h1>
              </div>
              <div className = "button" onClick={this.providerClick}>
                <h1>TA Providers</h1>
              </div>
            </div>
            <div className="content">
              {displayContent}
            </div>
            
          </div>
      );
    }

    private fundingClick = () => {
      console.log("changing state to funding")
      this.setState({
        tab: "funding"
      })
    }

    private providerClick = () => {
      this.setState({
        tab: "provider"
      })
    }

    async componentDidMount() {
      let admins = require('../testData/testFunding.json');
      let ta = require('../testData/testTA.json');
      console.log(admins);
      this.setState({
        fundingOpps: admins,
        technicalAssistance: ta
      })
    }
}
    
export default SearchHome; 