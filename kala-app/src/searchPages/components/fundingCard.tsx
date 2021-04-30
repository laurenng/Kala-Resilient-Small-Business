import React from 'react';
 // font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd, faHandshake } from '@fortawesome/free-solid-svg-icons';
import './card.css';

import { RouteComponentProps, withRouter } from 'react-router'; 
import { updateFund } from "../../reduxData/actions";
import { connect } from "react-redux";
import { AppState, Fund} from "../../reduxData/types";
import { NavLink } from 'react-router-dom';

// interface props extends RouteComponentProps<any> {
//     /* other props for ChildComponent */
//     funding: any,
//     currentFund: Fund,
//     updateFund: (fund: Fund) => void;
// }

function fundingCard(props: {funding: any} ) {
    let d = props.funding
    console.log(d)
    console.log(d.fundingName)
    // getting a shorten version of the link that only keeps part before 
    // all the mumble jumble 
    let funding = null

    
      
    if (d.fundingType === "Loan") {
        funding = <FontAwesomeIcon icon={faHandshake} size="1x" color="#EA5F14" />
    } else { // grants 
        funding = <FontAwesomeIcon icon={faHandHoldingUsd} size="1x" color="#EA5F14" />
    }
      // getting a shorten version of the link that only keeps part before 
      // all the mumble jumble 
    let shortenWebsite = d.website.split('/')[2];
    if (shortenWebsite.length > 12) {
        shortenWebsite = shortenWebsite.substring(0,9) + "..."
    }
    
    return(
        <NavLink to="/expandFund">Contact
            <div key={d.fundingName} className="fundBox" >
                <div className="fundBoxTop">
                <h1>{d.fundingName}</h1>
                <div className="inline">
                    <div className="turquoise-box">
                        <a href={d.website} rel="noreferrer" target="_blank">Apply Here</a>
                    </div>
                    <h3>{funding} {d.fundingType} </h3>
                </div>
                <br></br>
                </div>
                <div className="learnMoreBox">
                <h1>Learn More</h1>
                </div>
            </div>
        </NavLink>
    )
  // fix routing issue here! 
}

function mapStateToProps(state: AppState) {
    return { 
      currentFilter: state.currentFilter,
      currentFund: state.currentFund
    }
  }
  
function mapDispatchToProps(dispatch: any)  {
    return {
        updateFund: ( fund: Fund ) => dispatch(updateFund(fund))
    }    
}
    
export default fundingCard // connect(mapStateToProps, mapDispatchToProps)(withRouter(fundingCard));


