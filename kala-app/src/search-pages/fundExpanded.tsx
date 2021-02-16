import React from 'react';
import './searchStyle.css';
import { connect } from "react-redux";
import { AppState, Post } from "../redux-data/types";

// properties that belong to SearchHome
interface fundProps {
  post: Post
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
      console.log(this.props.post);
      let post = this.props.post;
      return (
        <div>
          <h1>{post.name}</h1>
          <a href={post.url} rel="noreferrer" target="_blank">Visit {post.url}</a>
          <p>Description: {post.description}</p>
          <p>Application Due Date: {post.endDate}</p>
          <p>Source: {post.provider}</p>
          <p>Funding Type: {post.description}</p>
          <p>Terms: {post.terms}</p>
          <p>Uses: {post.uses}</p>
        </div>
            
      );
    }

    async componentDidMount() {
    }
}
    
function mapStateToProps(state: AppState) {
  return { 
    post: state.currentPost
  }
}
// is it still connecteds
function mapDispatchToProps(dispatch: any)  {
  return {
  }    
}

export default connect(mapStateToProps, mapDispatchToProps)(FundingExpand);