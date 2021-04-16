/**
Creates the funding reason question component with forms for users to select
the reason(s) they need funding. Data is temporarily saved to redux 
*/

import React from 'react';
import { connect } from 'react-redux';
import { updateFilters } from '../../reduxData/actions';
import AppState, {Filters} from '../../reduxData/types';
import '../fundingForm.css';
import kala from '../../assets/kala_orange_solid 3.svg';

interface state {
    property: boolean,
    insurance: boolean,
    improveBuild: boolean,
    marketing: boolean,
    covid: boolean,
    employees: boolean,
    equipment: boolean,
    inventory: boolean,
    refinance: boolean,
    rent: boolean
}

interface props {
    currentFilter: Filters,
    updateFilters: (newFilters: Filters) => void,
}

class ReasonQ extends React.Component<props, state> {
    constructor(props:any) {
        super(props);
        // setting state to what is dictated in redux (aka storing prev values here)
        this.state = this.props.currentFilter.reason.value;
    } 

    // add states to redux here when component is removed from screen
    // aka when user is done inputing 
    componentWillUnmount() {
        let changes = this.props.currentFilter;
        changes.reason.value = this.state;
        updateFilters(changes);
    }

    // adding redux here to change filters properties 
    private handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        let changingLabel = event.target.value;
        // typescript sucks and doesn't let me do the line below without the ts-ignore.... 
        // @ts-ignore
        let pastValue = this.state[changingLabel]

        // updating state to toggle boolean value 
        this.setState({
            [changingLabel]: !pastValue
        } as any);
    }
    
    render() {
        return(
            <div className="formQuestion" id="question1">
                  <div className="questionBubble">
                    <h4 className="question" >Why do you need funding?</h4>
                    <h5 className="questionInstructions">Select all options that apply to you.</h5>
                  </div>
                  <div className="sideByside">
                  <img src={kala} alt="Kala the squid"/>
                  <div id="optionList">
                  {this.q1Options.map(answer => {
                      // @ts-ignore 
                      let booleanChecked = this.state[answer.label];
                      return(
                        <div key={answer.label} onChange={this.handleChange}>
                            {/* @ts-ignore */}
                            <input className="answer" type="checkbox" onChange={this.handleChange} checked={booleanChecked}
                            id={answer.label} value={answer.label}></input>
                            <label htmlFor={answer.value}>{answer.value}</label>
                        </div>
                      )
                  })}
                  </div>
                  </div>
                </div>
        )
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
            label: "equipment", 
            value: "Purchase machinery or equipment"
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
        }];
}

function mapStateToProps(state: AppState) {
    return { 
        currentFilter: state.currentFilter
    }
}

function mapDispatchToProps(dispatch: any)  {
    return {
        updateFilters: (  newFilters: Filters ) => dispatch(updateFilters(newFilters))
    }    
} 

export default connect(mapStateToProps, mapDispatchToProps)(ReasonQ);