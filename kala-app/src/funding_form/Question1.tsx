import React from 'react';
import { connect } from 'react-redux';
import { updateFilters } from '../redux-data/actions';
import AppState, {Filters} from '../redux-data/types';
import './fundingForm.css';
import kala from './kala_orange_solid 3.svg';

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

class Question1 extends React.Component<props, state> {
    constructor(props:any) {
        super(props);
        this.state = {
            covid: false,
            employees: false,
            equipment: false,
            improveBuild: false,
            insurance: false,
            inventory: false,
            marketing: false,
            property: false,
            refinance: false,
            rent: false
        }
    } 
    
    // later, add reach to redux to get user's previous data 
    componentDidMount() {
        // props has the values needed to be added to current page (ie: if it's toggled on already)
        console.log(this.props.currentFilter);
        console.log("question unooo")
    }

    // add states to redux here when component is disappearing. 
    componentWillUnmount() {
        let changes = this.props.currentFilter;
        changes.reason.value = this.state;
        console.log(changes);
        updateFilters(changes);

    }

    // adding redux here to change filters properties 
    private handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        let changingLabel = event.target.value;
        
        // typescript sucks and doesn't let me do the line below without the ts-ignore.... 
        // @ts-ignore
        let pastValue = this.state[changingLabel]

        this.setState({
            [changingLabel]: !pastValue
        } as any);
    }
    
    render() {
        return(
            <div className="formQuestion" id="question1">
                  <h1 className="question" >Why do you want this funding?</h1>
                  <img src={kala} alt="Kala the squid"/>
                  <h2>Select all options that apply to you.</h2>
                  {this.q1Options.map(answer => (
                      <div key={answer.label} onChange={this.handleChange}>
                          <input className="answer" type="checkbox" id={answer.label} value={answer.label} key={answer.label}></input>
                          <label htmlFor={answer.value}>{answer.value}</label>
                      </div>
                  ))}
                </div>
        )
    }

    private q1Options = [
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
            label: "improveBuild", 
            value: "Make building improvements"
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
            label: "property", 
            value: "Buy a building/property"
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

export default connect(mapStateToProps, mapDispatchToProps)(Question1);