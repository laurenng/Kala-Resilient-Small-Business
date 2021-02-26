import React from 'react';
import './searchStyle.css';
import { connect } from "react-redux";
import { AppState, Fund } from "../redux-data/types";

// properties that belong to SearchHome
interface fundProps {
  fund: Fund
}

// states that belong to SearchHome
interface fundState {
}

class FundingExpand extends React.Component<fundProps, fundState> {
    constructor(props: fundProps, state: fundState){
      super(props);
      this.state = {
      };
    }
    
    render() {
      let post = this.props.fund;
      let shortenWebsite = post.website.split('/')[2];
      let postList = this.listed(post.terms);
      let useList = this.listed(post.uses);
      return (
        <div className="main">
          <h1 className="title">{post.fundingName}</h1>
          <div className ="moreDetailsBox url">
            <a href={post.website} rel="noreferrer" target="_blank">Visit {shortenWebsite}</a>
          </div>
          <p><strong>Description: </strong> {post.description}</p>
          <p><strong>Application Due Date: </strong> {post.endDate}</p>
          <p><strong>Source:</strong> {post.provider}</p>
          <p><strong>Funding Type:</strong></p>
          {post.description}
          <p><strong>Terms:</strong></p>
          {postList}
          <p><strong>Uses: </strong></p>
          {useList}
        </div>
      );
    }

    private listed = (list: string[]) => {
      let childList = list.map((d,i) => {
        return(
          <li key={i}>{d}</li>
        )
      })
      return (
        <ul>
          {childList}
        </ul>
      )
    }

}
    
function mapStateToProps(state: AppState) {
  return { 
    fund: state.currentFund
  }
}
// is it still connecteds
function mapDispatchToProps(dispatch: any)  {
  return {
  }    
}

export default connect(mapStateToProps, mapDispatchToProps)(FundingExpand);