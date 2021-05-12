/*
This is a detailed view of the selected funding opportuntity. Here, we provide funding type,
provider, details, terms, uses, and a brief description. If the user is interested, we also 
provide a link to the application. 
*/

import React from 'react';
import './searchStyle.css';
import { connect } from "react-redux";
import { AppState, Fund } from "../reduxData/types";
import { ArrowBackIos } from '@material-ui/icons';

// properties that belong to SearchHome
interface fundProps {
  fund: Fund,
  history: any
}

// states that belong to SearchHome
interface fundState {
}

class FundingExpand extends React.Component<fundProps, fundState> {
    constructor(props: fundProps, state: fundState){
      super(props);
      this.goBack = this.goBack.bind(this);
      this.state = {
      };
    }

    goBack(){
      this.props.history.goBack();
      this.props.history.push('/search');
    }
    
    render() {
      console.log(this.props.fund);
      let post = this.props.fund;
      let shortenWebsite = post.website.split('/')[2];
      let postList = this.listed(post.terms);
      let useList = this.listed(post.uses);
      return (
        <div className="main expanded">
          <br></br>
          <ArrowBackIos className="backNavArrow" onClick={() => this.goBack()}></ArrowBackIos>
          {/* Assuming that each funding opportunity will have as a bare minimum a Name, Website, & Description */}
          {/* All else are optional and render conditionally */}
          <h1 className="title">{post.fundingName}</h1>
          <div className ="moreDetailsBox url">
            <a href={post.website} rel="noreferrer" target="_blank">Apply Here</a>
          </div>
          <p><strong>Description: </strong> {post.description}</p>
          {post.endDate !== null ? (<p><strong>Application Due Date: </strong> {post.endDate}</p>) : (null)}
          {post.provider !== null ? (<p><strong>Source:</strong> {post.provider}</p>) : (null)}
          {post.fundingType !== null ? (<p><strong>Funding Type:</strong> {post.fundingType}</p>) : (null)}
          
          {post.terms.length > 0 ? (<p><strong>Terms:</strong>{postList}</p>) : (null)}
          {post.uses.length > 0 ? (<p><strong>Uses: </strong>{useList}</p>) : (null)}
        </div>
      );
    }

    private listed = (list: string[]) => {
      let childList = list.map((d,i) => {
        return(
          <li key={i}><span>{d}</span></li>
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