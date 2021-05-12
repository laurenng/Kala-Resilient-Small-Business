/**
TRASHSHEEDD GO TO SIGNUPTEST.TSX
same content, but signuptest is better 
*/
import { connect } from 'react-redux';
import React from 'react';
import { updateUser } from '../../reduxData/actions';
import AppState, { UserInfo } from '../../reduxData/types';
import '../fundingForm.css';
import kala from '../../assets/kala_orange_solid 3.svg';

interface props {
    currentUser: UserInfo,
    updateUser: (newUser: UserInfo) => void,
}

interface state {
    user: string,
    password: string
}

class UserQ extends React.Component<props, state> {
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
            <div className="formQuestion" id="question3">
                <div className="questionBubble">
                    <h4 className="question">Let's make an account</h4>
                </div>
                
                    <div className="sideByside">
                    {/* <img src={kala} alt="Kala the squid"/> */}
                    <div className="dropDownList">

                        <div>
                            <h5 className="questionInstructions">UserName</h5>
                            <input type="text" value={this.state.user} onChange={this.userChange}></input>
                        </div>
                        
                        <div>
                            <h5 className="questionInstructions">Password</h5>
                            <input type="text" value={this.state.password} onChange={this.passwordChange}></input>
                        </div>

                    </div>
                </div>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(UserQ);