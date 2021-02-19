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
      let shortenWebsite = post.website.split('/')[0];
      // turning string arrays into bulleted lists
      let languageList = this.listed(post.languages);
      let locationList = this.listed(post.locations);
      let demoList = this.listed(post.demographics);
      return (
        <div className="main">
          <h1>{post.name}</h1>
          <div className ="moreDetailsBox url">
            <a href={post.website} rel="noreferrer" target="_blank">Visit {shortenWebsite}</a>
          </div>
          <p><strong>Description: </strong> {post.description}</p>
          <p><strong>Phone: </strong> {post.phone}</p>
          <p><strong>Email: </strong> {post.email}</p>
          <p><strong>Point Of Contact: </strong> {post.pocName}</p>
          <p><strong>Languages: </strong> {languageList}</p>
          <p><strong>Locations: </strong> {locationList}</p>
          <p><strong>Client Demographics: </strong> {demoList}</p>

        </div>
            
      );
    }

    private listed = (list: string[]) => {
      let childList = list.map((d) => {
        return(
          <li>{d}</li>
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