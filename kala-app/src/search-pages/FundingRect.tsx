/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import './searchStyle.css';
import { RouteComponentProps, withRouter } from 'react-router'; 
import { updateFund } from "../redux-data/actions";
import { connect } from "react-redux";
import { AppState, Fund } from "../redux-data/types";
import fetchFromAPI from "../redux-data/fetchFromAPI";

interface props extends RouteComponentProps<any> {
  /* other props for ChildComponent */
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
          <div key = {d.id}>
            {this.individualRect(i)}
          </div>
        )
      }) 
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
         <h3><strong>Type: </strong> {d.type}</h3>
         <p className="fundingFont">{shortenDescription}</p>
         <div className="moreDetailsBox learnMore" onClick={() => this.handleClick(d)}>
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
      let url ="https://cors-anywhere.herokuapp.com/http://54.214.55.177:8080/funding";
      let funding = await fetchFromAPI(url).then(data => {
        console.log(data)
        this.setState({
          fundingOpps: data
        })
      });
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

