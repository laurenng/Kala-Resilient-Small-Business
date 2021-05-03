/**
The landing page offers a brief overview of everything the application 
has to offer. 
*/

import React from 'react';
import './styles/landing.css';
import image from './../assets/landingPage/landing-pg.jpg';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch , faBook , faMoneyBillWave, faUser, faQuestion, faComments} from '@fortawesome/free-solid-svg-icons';

class Landing extends React.Component<any> {
  render() {
    return (
      <div id="landingPage">
        <div className="centered_text"><h1>Washington state small businesses, start your funding search here.</h1></div>
        <div className="text-image-container">
          <img id="banner" src={image} alt="Snow" />
          <div className ="blackLayer"></div>
          
        </div>

        <div className="centered_text"><h2>Where will <em>you</em> start?</h2></div>

        <div className="center-div">
          <div className="page-options" id="grid">
          <Link to="/ta" style={{ textDecoration: 'none', color: 'white' }}>
            <div className="two-column">
                <div className="icon_styling">
                  <FontAwesomeIcon icon={faComments} size="2x" color="white" />
                </div>
              
                <div className="right-column">
                  <h3>Talk to Assistance</h3>
                  <p>Assistance organizations are free. You might be a <b>first time
                    funding applicant</b> who’d prefer to <b>learn from a real person or
                      someone who needs help</b> acquiring a loan or grant.</p>
                </div>
              </div>
            </Link>

            <Link to="/library" style={{ textDecoration: 'none', color: 'white' }}>
            <div className="two-column">
              <div className="icon_styling">
                <FontAwesomeIcon icon={faBook} size="2x" color="white" />
              </div>
            
              <i className="fas fa-book"></i>
              <div className="right-column">
                <h3>Financial Literacy Library</h3>
                <p>This is for <b>businesses currently applying to funding</b> who need some financial knowledge resources.</p>
              </div>
            </div>
            </Link>

            <Link to="/search" style={{ textDecoration: 'none', color: 'white' }}>
              <div className="two-column">
              <div className="icon_styling">
                  <FontAwesomeIcon icon={faSearch} size="2x" color="white" />
                </div>
                <div className="right-column">
                  <h3>Loans and Grants List</h3>
                  <p>Browse what funding options are available.</p>
                </div>
              </div>
            </Link>


            <Link to="/form" style={{ textDecoration: 'none', color: 'white' }}>
              <div className="two-column">
                <div className="icon_styling">
                  <FontAwesomeIcon icon={faQuestion} size="2x" color="white" />
                </div>
                <div className="right-column">
                  <h3>Fill out our form</h3>
                  <p>We can match you to what funding/assistance best fits your business.</p>
                </div>
              </div>
            </Link> 
          </div> 
        </div>
      </div>
    );
  }
}


export default Landing;