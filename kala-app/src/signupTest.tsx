import { connect } from 'react-redux';
import React from 'react';
import { Link } from "react-router-dom";
import './userAuthentication.css';
import kala from './assets/kala_orange_solid 3.svg';
import PrivacyPolicyPopup from './privacyPopup';


import { updateUser } from './reduxData/actions';
import AppState, { UserInfo } from './reduxData/types';

interface props {
    currentUser: UserInfo,
    updateUser: (newUser: UserInfo) => void,
}

interface state {
    user: string,
    password: string
}

class SignupTest extends React.Component<props, state> {

    constructor(props:any) {
        super(props);
        let name = this.props.currentUser.user.value;
        let number = this.props.currentUser.password.value;
        // setting state to what is dictated in redux (aka storing prev values here)
        this.state = {
            user: name,
            password: number
        };
    } 

    componentWillUnmount() {
        let changes = this.props.currentUser;
        changes.user.value = this.state.user;
        changes.password.value = this.state.password;
        updateUser(changes);
    }

    handleSignup = (event: any) => {
        event.preventDefault();
        // Send Fetch Request to API to see if email isn't taken??
        // or should I go to next page
        // unsure of the flow/behavior from a code perspective
    }

    private userChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            user: event.target.value
        })
    }

    private passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return(
            <div id="signupBody">
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
                        <button id="signupBtn">Sign Up</button> {/* dont actually submit - go to user onboarding*/}
                    </form>

                    </div>
                </div>
        );
    }
}

function mapStateToProps(state: AppState) {
    return { 
        currentUser: state.currentUser
    }
}

function mapDispatchToProps(dispatch: any)  {
    return {
        updateUser: (  newUser: UserInfo ) => dispatch(updateUser(newUser))
    }    
} 

export default connect(mapStateToProps, mapDispatchToProps)(SignupTest);