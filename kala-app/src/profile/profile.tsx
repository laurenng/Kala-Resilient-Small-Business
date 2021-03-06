import { connect } from 'react-redux';
import React from 'react';
import './profile.css';
import kala from '../assets/kala_orange_solid 3.svg';
import { RouteComponentProps } from 'react-router'; 
import AppState, { UserInfo } from '../reduxData/types';
import { Redirect } from 'react-router-dom';

interface props extends RouteComponentProps<any>{
    currentUser: UserInfo,
    updateUser: (newUser: UserInfo) => void,
}

interface state {
    user: string,
    password: string
}

class Profile extends React.Component<props, state> {

    constructor(props:any) {
        super(props);
        let name = this.props.currentUser.email.value;
        let number = this.props.currentUser.password.value;
        // setting state to what is dictated in redux (aka storing prev values here)
        this.state = {
            user: name,
            password: number
        };
    } 
    
    private handleClick (d: string) {
        this.props.history.push('/editBiz');
    }

    private logout() {
        sessionStorage.removeItem("fundingToken");
    }
    render() {
        const isLogin = false // this.state.isLogin; // get redux state here
        console.log("work??? islogin")
        const loggedInVar = (sessionStorage.getItem('fundingToken') !== null)
        // check if the token is valid 
        
        console.log(loggedInVar)

        let shopList = this.shops.map((shop) => {
            return(
                <div key={shop} className="businessRect" onClick={() => this.handleClick(shop)}>
                    <h2>{shop}</h2>
                </div>
            )
        })

        let userFirst = this.props.currentUser.firstName.value
        let page = 
            <div id="loggedIn">
                <br></br>
                <div id="welcomeHeader">
                    <h4>Welcome, {userFirst}</h4>
                </div>
                
                <div className="content">
                    
                    <h2>Your Businesses</h2>
                    <p>Click on a business to view its funding and assistance matches or add a new business’ matches.</p>
                </div>

                <div className="businessGroups">
                    {shopList}
                    <div className="addBiz">
                        <p>Add a business</p>
                    </div>
                    <br></br>
                    <button className="addBiz" onClick={() => {
                                                            this.props.history.push('/login');
                                                            this.logout();
                                                        }}>Log-out</button>
                </div>

                <br></br>
                
            </div>

        if (loggedInVar) {
            return page;
        }
        return <Redirect to="/login" />;
    }

    shops = ["Levi's Tea Shop", "Kalamari Stixs", "Turkey Legs Inc."];
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);