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
      return (
        <div className="main">
          <h1>{post.name}</h1>
          <div className ="moreDetailsBox">
            <a href={post.website} rel="noreferrer" target="_blank">Visit {shortenWebsite}</a>
          </div>
          <p><strong>Description: </strong> {post.description}</p>
          <p><strong>Phone: </strong> {post.phone}</p>
          <p><strong>Email: </strong> {post.email}</p>
          <p><strong>Point Of Contact: </strong> {post.pocName}</p>
          <p><strong>Languages: </strong> {post.languages}</p>
          <p><strong>Locations: </strong> {post.locations}</p>
          <p><strong>Client Demographics: </strong> {post.demographics}</p>

        </div>
            
      );
    }

    async componentDidMount() {
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