import { connect } from 'react-redux';
import React from 'react';
import './profile.css';
import kala from '../assets/kala_orange_solid 3.svg';

import { updateUser } from '../reduxData/actions';
import AppState, { UserInfo } from '../reduxData/types';

interface props {
    currentUser: UserInfo,
    updateUser: (newUser: UserInfo) => void,
}

interface state {
    user: string,
    password: string
}

class loggedIn extends React.Component<props, state> {

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
    private handleClick (d: string) {
        console.log(d);
        // this.props.history.push('/expandFunds');
      }

    render() {
        let shopList = this.shops.map((shop) => {
            return(
                <div key={shop} className="businessRect" onClick={() => this.handleClick(shop)}>
                    <h2>{shop}</h2>
                </div>
            )
        })
        return(
            <div id="loggedIn">
                <div className="sideByside">
                    <div className="questionBubble">
                        <h4 className="question">Welcome</h4>
                        <h5>Click on a business to view its funding and assistance matches or add a new business’ matches.</h5>
                    </div>
                    <button id="logoutButton">Log-out</button>
                </div>
                <div className="kalaLogo">
                    <img src={kala} alt="Kala the squid"/>
                </div>
                
                <div className="content">
                    <h2>Your Businesses</h2>
                    <p>Click on a business to view its funding and assistance matches or add a new business’ matches.</p>
                </div>

                <div className="businessGroups">
                    {shopList}
                    <div id="addBiz">
                        <p id="addBizText">Add a business</p>
                    </div>
                </div>

                    
                </div>
        );
    }

    shops = ["Levi's Tea Shop", "Kalamari Stixs", "Turkey Legs Incorporated"];
}

function mapStateToProps(state: AppState) {
    return { 
        currentUser: state.currentUser
    }
}

function mapDispatchToProps(dispatch: any)  {
    return {
        
    }    
} 

export default connect(mapStateToProps, mapDispatchToProps)(loggedIn);