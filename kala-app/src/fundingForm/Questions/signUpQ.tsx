/* Refer to signUpTest, it is the same exact thing but more styled and stuff
*/
import { connect } from 'react-redux';
import React from 'react';
import { Link } from "react-router-dom";
import '../../userAuthentication.css';
import kala from '../../assets/kala_orange_solid 3.svg';
import PrivacyPolicyPopup from '../../privacyPopup';


import { updateUser } from '../../reduxData/actions';
import AppState, { UserInfo } from '../../reduxData/types';

interface props {
    currentUser: UserInfo,
    updateUser: (newUser: UserInfo) => void,
}

interface state {
    user: string,
    password: string,
    fname: string,
    lname: string
}

class SignupQ extends React.Component<props, state> {

    constructor(props:any) {
        super(props);
        let username = this.props.currentUser.email.value;
        let password = this.props.currentUser.password.value;
        let fname = this.props.currentUser.firstName.value;
        let lname = this.props.currentUser.lastName.value;
        // setting state to what is dictated in redux (aka storing prev values here)
        this.state = {
            user: username,
            password: password,
            fname: fname,
            lname: lname
        };
    } 
/*
    saveState() {
        console.log("saving state");
        let changes = this.props.currentUser;
        changes.email.value = this.state.user;
        changes.password.value = this.state.password;
        changes.firstName.value = this.state.fname;
        changes.lastName.value = this.state.lname;
        updateUser(changes);

        console.log(changes)
    } */

    private userChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            user: event.target.value
        }, () => {
            let changes = this.props.currentUser;
            changes.email.value = this.state.user;
            // console.log(changes);
            updateUser(changes);
        });
        
    }

    private passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            password: event.target.value
        }, () => {
            let changes = this.props.currentUser;
            changes.password.value = this.state.password;
            // console.log(changes);
            updateUser(changes);
        });
        
    }

    private firstChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            fname: event.target.value
        }, () => {
            let changes = this.props.currentUser;
            changes.firstName.value = this.state.fname;
            // console.log(changes);
            updateUser(changes);
        });
        
    }

    private lastChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            lname: event.target.value
        }, () => {
            let changes = this.props.currentUser;
            changes.lastName.value = this.state.lname;
            console.log(changes);
            updateUser(changes);
        });
        
    }

    render() {
        return(
            <div id="signupBody">
                <div id="signupPage">
                    <div className="sideByside">
                        {/* <img src={kala} alt="Kala the squid"/> */}
                        <div className="questionBubble">
                            <h4 className="question">Let's create an account.</h4>
                            <h5 className="questionInstructions">This account will allow you to view saved searches
                                                                for any of the businesses you own.</h5>
                        </div>
                    </div>
                   
                    <div id="signupForm">
                        <h2>Email</h2>
                        <input type="email" 
                               onChange={this.userChange} 
                               value={this.state.user}
                               title="Please enter a valid email address. e.g. johnsmith@example.com" required></input>
                        <h2>Password</h2>
                        <input type="password" value={this.state.password} onChange={this.passwordChange} required></input>
                        <h2>First Name</h2>
                        <input type="text" value={this.state.fname} onChange={this.firstChange} title="Please enter your first name" required></input>
                        <h2>Last Name</h2>
                        <input type="text" value={this.state.lname} onChange={this.lastChange} title="Please enter your last name" required></input>
                        
                        <br></br>
                        <div className="sideByside">
                            <input className="checkBox" type="checkbox" value="test1" required />
                            <div>
                                <p>I agree to Funding Finder's </p> 
                                <PrivacyPolicyPopup></PrivacyPolicyPopup>
                            </div>
                        </div>

                        <div className="sideByside">
                            <input className="checkBox" type="checkbox" value="test2" required />
                            <p>I am aware that the Washington State Department of Commerce
                                will be able to view the information that I provide on this site</p>
                        </div>
                    </div>
                    {/* <button id="signupBtn" onClick={() => this.saveState()}>Sign Up</button>  */}
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupQ);