import React from 'react';
import './searchStyle.css';
import { RouteComponentProps, withRouter } from 'react-router'; 
import { updateTA } from "../redux-data/actions";
import { connect } from "react-redux";
import { AppState, TA } from "../redux-data/types";

interface props extends RouteComponentProps<any> {
  /* other props for ChildComponent */
  updateTA: (TA: TA) => void;
}

// states that belong to SearchHome
interface state {
  technicalAssistance: any[],
}

class TaRect extends React.Component<props, state> {
    constructor(props: props, state: state){
      super(props);
      this.state = {
        technicalAssistance: []
      };
    }

    render() {
      // map through every technical assistance to display all
      let displayContent = this.state.technicalAssistance.map((d, i) => {
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
      let d = this.state.technicalAssistance[num];
      // limits length of description being shown. Current limit is at 25 words
      let shortenDescription = d.description.split(' ').slice(0,25).join(' ')
      // getting a shorten version of the link that only keeps part before 
      // all the mumble jumble 
      // let shortenWebsite = d.website.split('/')[2];
      return(
        <div className="fundBox" onClick={() => this.handleClick(d)}>
            <h1>{d.name}</h1>
            <p className="fundingFont">{shortenDescription}</p>
            <div className="moreDetailsBox learnMore" onClick={() => this.handleClick(d)}>
              <p>Learn More</p>
            </div>
            <div className="moreDetailsBox url">
              <a href={d.url} rel="noreferrer" target="_blank">Visit {d.website}</a>
            </div>
        </div>
      )
    }

    // fix routing issue here! 
    handleClick (d: TA) {
      console.log(d);
      this.props.history.push('/expandTA');
      this.props.updateTA(d);
    }

    async componentDidMount() {
      let ta = require('../testData/testTA.json');
      this.setState({
        technicalAssistance: ta
      })
    }
}

function mapStateToProps(state: AppState) {
  return { }
}

function mapDispatchToProps(dispatch: any)  {
  return {
    updateTA: ( TA: TA ) => dispatch(updateTA(TA))
  }    
}
    
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TaRect));