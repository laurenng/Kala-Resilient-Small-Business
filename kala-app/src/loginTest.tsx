import { connect } from 'react-redux';
import React from 'react';
import AppState from './reduxData/types';
import { Link } from "react-router-dom";
import './userAuthentication.css';

const emailRegex = "/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";

interface props {

}

interface state {

}

class LoginTest extends React.Component<props, state> {

    constructor(props:any) {
        super(props);

        this.state = {

        };
    } 

    
    componentWillUnmount() {
    }

    handleLogin = (event: any) => {
        event.preventDefault();
        // Send Fetch Request to API
        // If Request is Good, add cookie or session thing to state or browser storage
        // Else - show error message
        var loginSuccess = true;
        if (loginSuccess) {
            document.getElementById("loginBtn")?.classList.add("hidden"); // temp behavior
        } else {
            document.getElementById("loginErrMsg")?.classList.remove("hidden");
        }
    }

    render() {
        return(
            <div id="loginPage">
                <h1>Log in</h1>
                <h3><a>If you are from Commerce, log in or sign up here</a></h3> {/* add href to commerece later */}
                <h3 id="loginErrMsg" className="hidden">There was a problem trying to login, please check your email or password and try again.</h3>
                <form id="loginForm" onSubmit={this.handleLogin}>
                    <h2>Email</h2>
                    <input type="email" title="Please enter a valid email address. e.g. johnsmith@example.com" required></input>
                    <h2>Password</h2>
                    <input type="password" required></input>
                    <br></br>
                    <button id="loginBtn">Log In</button>
                    <div id="lineBreak">
                        <hr/>
                        <p>OR</p>
                        <hr/>
                    </div>
                    <button id="signupBtn"><Link to="/signup">Sign Up</Link></button>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginTest);