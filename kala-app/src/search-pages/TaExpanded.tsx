import React from 'react';
import './searchStyle.css';
import { connect } from "react-redux";
import { AppState, TA } from "../redux-data/types";

// properties that belong to SearchHome
interface fundProps {
  TA: TA
}

// states that belong to SearchHome
interface fundState {
}

class TaExpand extends React.Component<fundProps, fundState> {
    constructor(props: fundProps, state: fundState){
      super(props);
      this.state = {
      };
    }

    render() {
      console.log(this.props.TA);
      let post = this.props.TA;
      let shortenWebsite = post.website.split('/')[2];
      // turning string arrays into bulleted lists
      let languageList = this.listed(post.languages);
      let locationList = this.listed(post.locations);
      let demoList = this.listed(post.demographics);
      return (
        <div className="main expanded">
          <br></br>
          <h1>{post.orgName}</h1>
          <div className ="moreDetailsBox url">
            <a href={post.website} rel="noreferrer" target="_blank">Visit {shortenWebsite}</a>
          </div>
          <p><strong>Description: </strong> {post.description}</p>
          <p><strong>Phone: </strong> {post.phone}</p>
          <p><strong>Email: </strong> {post.email}</p>
          <p><strong>Point Of Contact: </strong> {post.pocName}</p>
          <p><strong>Languages: </strong> </p>{languageList}
          <p><strong>Locations: </strong></p> {locationList}
          {post.demographics.length > 0 ? (
            <p><strong>Demographics: </strong>{demoList}</p>
          ) : (null) }
        </div>
      );
    }

    private listed = (list: string[]) => {
      let childList = list.map((d) => {
        return(
          <li key={d}>{d}</li>
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
    TA: state.currentTA
  }
}
// is it still connecteds
function mapDispatchToProps(dispatch: any)  {
  return {
  }    
}

export default connect(mapStateToProps, mapDispatchToProps)(TaExpand);