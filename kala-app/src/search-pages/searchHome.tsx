import React from 'react';
import './searchStyle.css';
import FundingRect  from './FundingRect';
import TaRect  from './taRect';
import { RouteComponentProps, withRouter } from 'react-router'; 
import { Link } from "react-router-dom";


// properties that belong to SearchHome
interface searchProp extends RouteComponentProps<any> {
  /* other props for ChildComponent */
}

// states that belong to SearchHome
interface searchState {
  tab: string
}

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
            <br></br>
            <div className= "inline centered">
              <div className = {this.state.tab === "funding" ? "selected button" : "button"} onClick={this.fundingClick}>
                <h1>Funding</h1>
              </div>
              <div className = {this.state.tab === "provider" ? "selected button" : "button"} onClick={this.providerClick}>
                <h1>TA Providers</h1>
              </div>
            </div>

              <Link to="/form">
                  <div className="moreDetailsBox url centeredForm">
                      <h1>Go to form here</h1>
                  </div>
              </Link>

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