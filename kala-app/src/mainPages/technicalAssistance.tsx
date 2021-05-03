import React from 'react';
import './styles/ta.css';
import { Link } from "react-router-dom";
import { faQuestion, faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
Creates the Grants page of the library with pertinent resources
*/
class TAPage extends React.Component<any> {
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("Mount");
  };

    render() {
      return (
        <main id="ta-main">

            

            <div id="ta-banner">
                <h1>What is Assistance?</h1>
                <p>These are organizations you can reach out to for <b>free</b> and they can assist with:</p>
                <ul>
                    <li>Finding and applying for resources, whether you are open for business or not</li>
                    <li>Accessing translation and language assistance</li>
                    <li>Navigating local, state and federal resources</li>
                    <li>Planning for recovery and safe re-opening</li>
                </ul>
            </div>

            <div className="biz-quote">
                <blockquote cite="https://wsbdc.org/sbdc-advising-helps-drive-growth-for-mobile-truck-repair/">
                    “We got really good help, (The SBDC) is not going to give you money,
                     but they are going to give you advice. Advising is one of the main things we need as a 
                     business owner.”
                </blockquote>
                <figcaption>David Ruelas - Mobile Truck Repair Business Owner</figcaption>
            </div>

            <div id="ta-options">
            <Link to="/form" style={{ textDecoration: 'none', color: 'white' }}>
              <div className="two-column">
              <div className="icon_styling">
                  <FontAwesomeIcon icon={faQuestion} size="2x" color="white" />
                </div>
                <div className="right-column">
                  <p>Answer a few questions and we’ll see what assistance best matches your business.</p>
                </div>
              </div>
            </Link>


            <Link to="/search" style={{ textDecoration: 'none', color: 'white' }}>
              <div className="two-column">
                <div className="icon_styling">
                  <FontAwesomeIcon icon={faSearch} size="2x" color="white" />
                </div>
                <div className="right-column">
                  <p>Browse our full list of assistance organizations. These include those above and more. </p>
                </div>
              </div>
            </Link> 
          </div> 
        </main>
      );
        
    }
}

export default TAPage;