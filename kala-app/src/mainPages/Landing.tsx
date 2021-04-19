/**
The landing page offers a brief overview of everything the application 
has to offer. 
*/

import React from 'react';
import './styles/landing.css';
import image from './../assets/landingPage/landing-pg.jpg';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch , faBook , faMoneyBillWave, faUser} from '@fortawesome/free-solid-svg-icons';

class Landing extends React.Component<any> {
  render() {
    return (
      <div id="landingPage">
        <div className="centered_text"><h1>Washington state small businesses, start your funding search here.</h1></div>
        <div className="text-image-container">
          <img id="banner" src={image} alt="Snow" />
          <div className ="blackLayer"></div>
          
        </div>
        <div className="page-options">

        <div className="two-column">
            <div className="icon_styling">
              <FontAwesomeIcon icon={faUser} size="2x" color="white" />
            </div>
          
            <div className="right-column">
              <h3>Create an account</h3>
              <p>Save the funding and assistance that best matches with your business(es).</p>
              {/* <Link to="/" style={{ textDecoration: 'none' }}> */}
                    <div className="redirect_button">
                        <h1 className="button_text">Sign up or Log in</h1>
                    </div>
                {/* </Link> */}
            </div>
          </div>

          <div className="two-column">
            <div className="icon_styling">
              <FontAwesomeIcon icon={faBook} size="2x" color="white" />
            </div>
          
            <i className="fas fa-book"></i>
            <div className="right-column">
              <h3>Financial Literacy Library</h3>
              <p>This library contains resources you can use to familiarize yourself with terminology while applying for funding.</p>
              <Link to="/library" style={{ textDecoration: 'none' }}>
                    <div className="redirect_button">
                        <h1 className="button_text">Go to library</h1>
                    </div>
                </Link>
            </div>
          </div>

          <div className="two-column">
          <div className="icon_styling">
              <FontAwesomeIcon icon={faSearch} size="2x" color="white" />
            </div>
            <div className="right-column">
              <h3>Search Tool</h3>
              <p>Here you can find what funding and assistance best match your business.</p>
                <Link to="/form" style={{ textDecoration: 'none' }}>
                    <div className="redirect_button">
                        <h1 className="button_text">Go to the search tool</h1>
                    </div>
                </Link>
            </div>
          </div>

          <div className="two-column">
            <div className="icon_styling">
              <FontAwesomeIcon icon={faMoneyBillWave} size="2x" color="white" />
            </div>
            <div className="right-column">
              <h3>Get Funding</h3>
              <p>Start applying on your own or reach out to an assistance to guide you thorugh applying. </p>
            </div>
          </div> 
        </div> 
      </div>
    );
  }
}


export default Landing;