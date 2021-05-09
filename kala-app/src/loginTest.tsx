import { connect } from 'react-redux';
import React from 'react';
import AppState from './reduxData/types';
import { Link, Redirect } from "react-router-dom";
import './userAuthentication.css';

const emailRegex = "/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";

interface props {
    isLogin: boolean
}

interface state {
    isLogin: boolean
}

class LoginTest extends React.Component<props, state> {

    constructor(props:any) {
        super(props);

        this.state = {
            isLogin: this.props.isLogin
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
        this.fetchTokenFromAPI("https://ckbyvv1y8e.execute-api.us-west-2.amazonaws.com/rsb/login", email, password)
            .then((data) => {
                if (data.error != null) { // error occured
                    document.getElementById("loginErrMsg")?.classList.remove("hidden");
                    console.log(data);
                } else {
                    document.getElementById("loginErrMsg")?.classList.add("hidden"); 
                    console.log(data);
                    // add this to state here
                    // login was successful so redirect elsewhere
                    sessionStorage.setItem('fundingToken', data.token);
                    console.log(sessionStorage.getItem('fundingToken'));
                    this.setState({"isLogin": true} as any); // need to hook up to actual state
                }
            });
    }

    render() {
        
        const isLogin = this.state.isLogin; // get redux state here
        const loggedIn = (sessionStorage.getItem('fundingToken') !== null)
        
        console.log("has just logged in " + isLogin + " | already logged in " + loggedIn)
        const loginPage = 
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
                        
                        <hr/>
                    </div>
                    <Link to="/signup"><button type="button" id="signupBtn">Sign Up</button></Link>
                </form>
            </div>
        </div>

        if (isLogin || loggedIn) {
            return <Redirect to="/profile" />;
        }
        return loginPage;
    }

}

function mapStateToProps(state: AppState) {
    return { 
        // isLogin: state.isLogin
    }
}

function mapDispatchToProps(dispatch: any)  {
    return {
        // updateFilters: (  newFilters: Filters ) => dispatch(updateFilters(newFilters))
    }    
} 

export default connect(mapStateToProps, mapDispatchToProps)(LoginTest);