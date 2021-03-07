import React from 'react';
import './App.css';
import image from './assets/landing_page/landing-pg.jpg';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch , faBook , faMoneyBillWave} from '@fortawesome/free-solid-svg-icons';

class Landing extends React.Component<any> {
  render() {
    return (
      <div>
        <div className="text-image-container">
          <img src={image} alt="Snow" style={{width: '100%', height: '17em'}} />
          <div className ="blackLayer"></div>
          <div className="centered_text">Washington state small businesses, start your funding search here.</div>
        </div>

        <div className="two-column">
          <div className="icon_styling">
            <FontAwesomeIcon icon={faBook} size="2x" />
          </div>
        
          <i className="fas fa-book"></i>
          <div className="right-column">
            <h3>Financial Literacy Library</h3>
            <p>This library contains resources you can use to familiarize yourself with terminology while applying for funding.</p>
            <Link to="/library">
                  <div className="redirect_button">
                      <h1 className="button_text">Go To Library</h1>
                  </div>
              </Link>
          </div>
        </div>

        <div className="two-column">
        <div className="icon_styling">
            <FontAwesomeIcon icon={faSearch} size="2x" />
          </div>
          <div className="right-column">
            <h3>Search Tool</h3>
            <p>Here you can find what funding and assistance best match your business.</p>
            <Link to="/form">
                  <div className="redirect_button">
                      <h1 className="button_text">Go To the search tool</h1>
                  </div>
              </Link>
          </div>
        </div>

        <div className="two-column">
          <div className="icon_styling">
            <FontAwesomeIcon icon={faMoneyBillWave} size="2x" />
          </div>
          <div className="right-column">
            <h3>Get Funding</h3>
            <p>Start applying on your own or reach out to an assistance to guide you thorugh applying. </p>
          </div>
        </div>
      </div>  
    );
  }
}


export default Landing;