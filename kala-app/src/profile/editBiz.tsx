import { connect } from 'react-redux';
import React from 'react';
import './profile.css';
import kala from '../assets/kala_orange_solid 3.svg';

import { updateFilters, updateUser } from '../reduxData/actions';
import AppState, { Filters, UserInfo } from '../reduxData/types';
import fetchFromAPI from '../reduxData/fetchFromAPI';
import fundingCard from '../searchPages/components/fundingCard';
import { RouteComponentProps } from 'react-router-dom';


interface props extends RouteComponentProps<any>{
    currentPOC: UserInfo,
    updateUser: (newUser: UserInfo) => void,
    currentFilter: Filters,
    updateFilters: (newFilters: Filters) => void,
}

interface state {
    user: string,
    password: string,

}

class EditBiz extends React.Component<props, state> {

    constructor(props:any) {
        super(props);
        let name = this.props.currentPOC.user.value;
        let number = this.props.currentPOC.password.value;
        // setting state to what is dictated in redux (aka storing prev values here)
        this.state = {
            user: name,
            password: number,
        };
    } 
    
    async componentDidMount() {
      }

    private handleClick (d: string) {
        console.log(d);
        this.props.history.push('/editBiz');
      }

    render() {
        return(
            <div id="editBiz">
                <br></br>
                <h1> Business Header</h1>
                <p> Edit details about your business here </p>

                <div>
                    <div>
                        <h5>Name</h5>
                        <input type="text" value={"hello"} ></input>
                    </div>

                    <div>
                        <h5>Name</h5>
                        <input type="text" value={"hello"} ></input>
                    </div>

                    <div>
                        <h5>Description</h5>
                        <textarea id="w3review" name="w3review" rows={3} cols={50} defaultValue="This is where a brief description of your business goes">
                        </textarea>
                    </div>

                    <div>
                        <h5>Funding Uses (Select all that apply)</h5>
                        {this.q1Options.map(answer => {
                            // @ts-ignore 
                            let booleanChecked = this.state[answer.label];
                            return(
                                <div key={answer.label}>
                                    {/* @ts-ignore */}
                                    <input className="answer" type="checkbox" onChange={this.handleChange} checked={booleanChecked}
                                    id={answer.label} value={answer.label}></input>
                                    <label htmlFor={answer.value}>{answer.value}</label>
                                </div>
                            )
                        })}
                    </div>
                    

                </div>

                <br></br>
                <div className="side-by-side">
                    <button id="saveChanges">Save Changes</button>
                    <button id="deleteButton">Delete</button>
                </div>

                <br></br>
                
            </div>
        );
    }

    private q1Options = [
        {
            label: "property", 
            value: "Buy a building/property"
        },
        {
            label: "improveBuild", 
            value: "Make building improvements"
        },
        {
            label: "covid", 
            value: "Pandemic-related expenses"
        },
        {
            label: "employees", 
            value: "Pay employees"
        },
        
        {
            label: "insurance", 
            value: "Insurance"
        },
        {
            label: "inventory", 
            value: "Purchase inventory"
        },
        
        
        {
            label: "marketing", 
            value: "Marketing"
        },
        {
            label: "refinance", 
            value: "Refinance"
        },
        {
            label: "rent", 
            value: "Rent/Utility Bills"
        }, 
        {
            label: "equipment", 
            value: "Purchase machinery or equipment"
        }];
}

function mapStateToProps(state: AppState) {
    return { 
        currentPOC: state.currentPOC,
        currentFilter: state.currentFilter
    }
}

function mapDispatchToProps(dispatch: any)  {
    return {
        updateFilters: (  newFilters: Filters ) => dispatch(updateFilters(newFilters))
    }    
} 

export default connect(mapStateToProps, mapDispatchToProps)(EditBiz);