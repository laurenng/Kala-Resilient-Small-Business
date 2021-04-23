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

    async fetchTokenFromAPI(url: string, email: string, password: string): Promise<any> {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json() as Promise<{ data: string[] }>
        })
        .then(data => {
            // console.log(data)
            return data
        })
    }

    handleLogin = (event: any) => {
        event.preventDefault();
        // Send Fetch Request to API
        // If Request is Good, add cookie or session thing to state or browser storage
        // Else - show error message
        
        var email = (document.getElementById("userEmail") as HTMLInputElement).value;
        var password = (document.getElementById("userPassword") as HTMLInputElement).value;
        // if (email != null && password != null) {
        this.fetchTokenFromAPI("https://8tb0tsfjg2.execute-api.us-west-2.amazonaws.com/rsb/login", email, password)
            .then((data) => {
                if (data.error != null) { // error occured
                    document.getElementById("loginErrMsg")?.classList.remove("hidden");
                    console.log(data);
                } else {
                    document.getElementById("loginErrMsg")?.classList.add("hidden"); 
                    console.log(data);
                    // add this to state here
                    // login was successful so redirect elsewhere
                }
            });

    }

    render() {
        return(
            <div id="loginBody">
                <div id="loginPage">
                    <h1>Log in</h1>
                    <h3><a>If you are from Commerce, log in or sign up here</a></h3> {/* add href to commerece later */}
                    <h3 id="loginErrMsg" className="hidden">There was a problem trying to login, please check your email or password and try again.</h3>
                    <form id="loginForm" onSubmit={this.handleLogin}>
                        <label>Email</label>
                        <input id="userEmail" type="email" title="Please enter a valid email address. e.g. johnsmith@example.com" required></input>
                        <label>Password</label>
                        <input id="userPassword" type="password" required></input>
                        <br></br>
                        <button type="submit" id="loginBtn">Log In</button>
                        <div id="lineBreak">
                            <hr/>
                            <p>OR</p>
                            <hr/>
                        </div>
                        <button type="button" id="signupBtn"><Link to="/signup">Sign Up</Link></button>
                    </form>
                </div>
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