/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import './searchStyle.css';
import { RouteComponentProps, withRouter } from 'react-router'; 
import { updateFund } from "../redux-data/actions";
import { connect } from "react-redux";
import { AppState, Fund } from "../redux-data/types";

interface props extends RouteComponentProps<any> {
  /* other props for ChildComponent */
  updateFund: (fund: Fund) => void;
}

// states that belong to SearchHome
interface state {
  fundingOpps: any[],
  
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
      let displayContent = this.state.fundingOpps.map((d, i) => {
        return(
          <div key = {d.id}>
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
      let d = this.state.fundingOpps[num];
      let shortenDescription = d.description.split(' ').slice(0,25).join(' ')
      let shortenWebsite = d.url.split('/')[2];
      return(
        <div className="fundBox" onClick={() => this.handleClick(d)}>
         <h1>{d.name}</h1>
         <div className="inline">
          <h3>Due:</h3><p>{d.endDate}</p> 
         </div>
        
         <h3>Type: {d.type}</h3>
         <h3 className="fundingFont">{shortenDescription}</h3>
         <div className="moreDetailsBox">
         <a href={d.url} rel="noreferrer" target="_blank">Visit {shortenWebsite}</a>
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
      let funding = require('../testData/testFunding.json');
      this.setState({
        fundingOpps: funding
      })
    }
}

function mapStateToProps(state: AppState) {
  return { }
}

function mapDispatchToProps(dispatch: any)  {
  return {
    updateFund: ( fund: Fund ) => dispatch(updateFund(fund))
  }    
}
    
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FundingRect));

