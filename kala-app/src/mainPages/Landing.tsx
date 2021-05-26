/**
The landing page offers a brief overview of everything the application 
has to offer. 
*/

import React from 'react';
import './styles/landing.css';
import header from './../assets/libraryBanners/tribal-owned-16-9.jpg';
import secondary from './../assets/landingPage/connect-biz.jpg';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch , faBook , faQuestion, faComments} from '@fortawesome/free-solid-svg-icons';

class Landing extends React.Component<any> {
  render() {
    return (
      <div id="landingPage">
          {/* Header Card view */}
          <div className="card landingDesktop">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={header} alt="small rustic town street with small business signs" />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <h1>Washington state small businesses, start your funding search here.</h1>
                <p>Getting money is complicated. We are here to make sure you get the 
                  money your business deserves. Fill out our matching form to see what 
                  assistance or funding best fits your business.</p>
                <button className="cardButton">Fill out the Matching Form</button>
                <br/>
              </div>
            </div>
          </div>

          {/* Connect Card view */}
          <div className="card landingDesktop">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={secondary} alt="small rustic town street with small business signs" />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <h1>Connect with a local small business expert.</h1>
                <p>At <strong>no-cost</strong>, technical assistance organizations can help you 
                  figure out what your business needs to stay resilient in a 
                  post-pandemic world. See what assistance best matches your
                   business with the form or learn more.</p>
                <button className="cardButton">Fill out the Matching Form</button>
                <button className="cardButton">Learn more about Technical Assistance</button>
                <br/>
              </div>
            </div>
          </div>

          <div id="roadmap">
            <h1>You can follow this roadmap.</h1>
            <p>We are simplifying how you find funding. Depending on your business’ experience 
              searching for funding, you further simplify this process and skip some steps.</p>
          </div>

          <br></br>

          <div id="roadmap-list">
            <div>
              <h2>1. Get Your Matches</h2>
              <p>Our <Link to="/form" style={{ textDecoration: 'underline' }}>streamlined matching form </Link>saves you time by showing you the best 
                funding and technical assistance for your business.</p>
            </div>

            <div>
              <h2>2. Browse Funding &amp; Assistance</h2>
              <p><Link to="/search" style={{ textDecoration: 'underline' }}>Look and learn more </Link>
              about the loans, grants, and technical assistance groups (no-cost small business experts). </p>
            </div>

            <div>
              <h2>3. Reach Out</h2>
              <p>Reach out to assistance.
                <Link to="/search" style={{ textDecoration: 'underline' }}>They will help you figure out what
               your business needs to stay resilient post-pandemic. </Link>
                That might be a new digital marketing campaign or improving your 
              funding applications.</p>
            </div>

            <div>
              <h2>4. Apply &amp; Use Our Library</h2>
              <p>While browsing funding, click “Apply Now” for the funding 
                you’d like to apply to. While filling out the application, 
                 <Link to="/library" style={{ textDecoration: 'underline' }}>utilize our library</Link> 
                to quickly find definitions other digital resources. </p>
            </div>
          </div>
          

        {/* <div className="center-div">
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
        </div> */}
      </div>
    );
  }
}


export default Landing;