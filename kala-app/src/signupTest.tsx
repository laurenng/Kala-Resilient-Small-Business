import { connect } from 'react-redux';
import React from 'react';
import AppState from './reduxData/types';
import { Link } from "react-router-dom";
import './userAuthentication.css';
import kala from './assets/kala_orange_solid 3.svg';
import PrivacyPolicyPopup from './privacyPopup';

interface props {

}

interface state {

}

class SignupTest extends React.Component<props, state> {
    constructor(props:any) {
        super(props);

        this.state = {

        };
    } 

    
    componentWillUnmount() {
    }

    handleSignup = (event: any) => {
        event.preventDefault();
        // Send Fetch Request to API to see if email isn't taken??
        // or should I go to next page
        // unsure of the flow/behavior from a code perspective
    }

    render() {
        return(
            <div id="signupPage">
                <div className="sideByside">
                <img src={kala} alt="Kala the squid"/>
                <div className="questionBubble">
                    <h4 className="question">Let's create an account.</h4>
                    <h5 className="questionInstructions">This account will allow you to view saved searches
                                                        for any of the businesses you own.</h5>
                </div>
                </div>
                

                <form onSubmit={this.handleSignup} id="signupForm">
                    <h2>Email</h2>
                    <input type="email" title="Please enter a valid email address. e.g. johnsmith@example.com" required></input>
                    <h2>Password</h2>
                    <input type="password" required></input>
                    <br></br>
                    <div className="sideByside">
                        <input className="checkBox" type="checkbox" value="test1" required />
                        <p>I agree to Funding Finder's <PrivacyPolicyPopup></PrivacyPolicyPopup></p> {/* add href later*/}
                        
                    </div>

                    <div className="sideByside">
                        <input className="checkBox" type="checkbox" value="test2" required />
                        <p>I agree to be contacted by the Washington State Deparement of Commerece about potential business opportunities</p>
                    </div>
                    <button id="signupBtn">Sign Up</button>
                </form>

                </div>

        );
    }

}

function mapStateToProps(state: AppState) {
    return { 
        
    }
}

function mapDispatchToProps(dispatch: any)  {
    return {
        
    }    
} 

export default connect(mapStateToProps, mapDispatchToProps)(SignupTest);