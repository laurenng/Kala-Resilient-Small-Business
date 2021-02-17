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
      console.log(this.props.fund);
      let post = this.props.fund;
      let shortenWebsite = post.url.split('/')[2];
      return (
        <div className="main">
          <h1>{post.name}</h1>
          <div className ="moreDetailsBox">
            <a href={post.url} rel="noreferrer" target="_blank">Visit {shortenWebsite}</a>
          </div>
          <p><strong>Description: </strong> {post.description}</p>
          <p><strong>Application Due Date: </strong> {post.endDate}</p>
          <p><strong>Source:</strong> {post.provider}</p>
          <p><strong>Funding Type:</strong> {post.description}</p>
          <p><strong>Terms:</strong> {post.terms}</p>
          <p><strong>Uses: </strong> {post.uses}</p>
        </div>
            
      );
    }

    async componentDidMount() {
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