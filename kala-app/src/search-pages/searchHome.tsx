import React from 'react';
import './searchStyle.css';
import { FundingRect } from './FundingRect';

// properties that belong to SearchHome
interface searchProps {
  
}

// states that belong to SearchHome
interface searchState {
  fundingOpps: any[]
}

class SearchHome extends React.Component<searchProps, searchState> {
    constructor(props: searchProps, state: searchState){
      super(props);
      this.state = {
        fundingOpps: []
      };
    }

    render() {
      const fundingList = this.state.fundingOpps.map((d) => {
        console.log(d);
        return(
          <div key = {d.id} className="fundBox">
             <h1>{d.name}</h1>
             <h3 className="fundingFont">{d.description}</h3>
             <div className="moreDetailsBox">
              <a href={d.url} rel="noreferrer" target="_blank">Funding Details</a>
             </div>
          </div>
          // <FundingRect funding={d} />
        )
      })
      return (
          <div id="searchMain">
            <h1>Search home page </h1>
            <p>This is where users can find all the funding they need :) </p>
            <p> PRINT OUT THE DATAS HEREEEEE </p>
            {fundingList}
          </div>
      );
    }

    async componentDidMount() {
      let admins = require('../testData/testFunding.json');
      console.log(admins);
      this.setState({
        fundingOpps: admins
      })
    }
}
    
export default SearchHome; 