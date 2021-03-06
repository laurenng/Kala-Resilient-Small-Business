/*
This is the main Funding and Assistance component. It renders the header 
with introduction and funding/assistnace buttons and calls to render the 
selected data list. 
*/
import React from 'react';
import './searchStyle.css';
import FundingRect  from './FundingRect';
import TaRect  from './taRect';
import { RouteComponentProps, withRouter } from 'react-router'; 
import { Link } from "react-router-dom";
// font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

// properties that belong to SearchHome
interface searchProp extends RouteComponentProps<any> {
  /* other props for ChildComponent */
}

// states that belong to SearchHome
interface searchState {
  tab: string
}

// const SCROLLTARGET = 100; 

class SearchHome extends React.Component<searchProp, searchState> {
    constructor(props: searchProp, state: searchState){
      super(props);
      this.state = {
        tab: "funding"
      };
    }

    render() {
      let displayContent; 
      if(this.state.tab === "funding") {
        displayContent = <FundingRect ></FundingRect>
      } else { // if tab is on Technical assistance
        displayContent = <TaRect/>
      }

      return (
          <div id="searchMain">
            <div id="page-introduction">
            <br></br>
              <h1>Funding &amp; Assistance</h1>
              <Link to="/form" style={{ textDecoration: 'none' }}>
                  <div className="blue-box inline">
                    <FontAwesomeIcon icon={faClipboardList} size="1x" color="white" />
                    <h2>Matching Form</h2>
                  </div>
              </Link>
              <br></br>

              <p>Find technical assistance (e.g. legal and financial experts) and
                 funding (loans and grants) here. Answer these questions to narrow 
                 your results.</p>

              <Link to="/ta">
                  <h3 id="extra-help-text">Don't know where to start or needs some extra help?</h3>
              </Link>
            </div>

            <div className= "inline either">
              <div className = {this.state.tab === "provider" ? "selected" : ""} onClick={this.providerClick}>
                <h1>Assistance</h1>
              </div>
              <div className = {this.state.tab === "funding" ? "selected" : ""} onClick={this.fundingClick}>
                <h1>Funding</h1>
              </div>
            </div>

            <div className="content">
              {displayContent}
            </div>
            
          </div>
      );
    }
    private fundingClick = () => {
      this.setState({
        tab: "funding"
      })
    }

    private providerClick = () => {
      this.setState({
        tab: "provider"
      })
    }

    async componentDidMount() {
    }
}
    
export default withRouter(SearchHome); 