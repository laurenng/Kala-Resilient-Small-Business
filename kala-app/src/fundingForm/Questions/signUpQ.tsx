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
    password: string
}

class SignupQ extends React.Component<props, state> {

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
                   
                    <div id="signupForm">
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
                            <p>I am aware that the Washington State Department of Commerce
                                will be able to view the information that I provide on this site</p>
                        </div>
                    </div>

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