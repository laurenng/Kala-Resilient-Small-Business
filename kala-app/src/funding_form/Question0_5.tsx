import React from 'react';
import { connect } from 'react-redux';
import { updateFilters } from '../redux-data/actions';
import AppState, {Filters} from '../redux-data/types';
import './fundingForm.css';
import kala from './kala_orange_solid 3.svg';

interface state {
    Spanish: boolean,
    Mandarin: boolean,
    Vietnamese: boolean,
    Russian: boolean,
    Swahili: boolean,
    French: boolean,
    ASL: boolean,
    Laotian: boolean,
    Thai: boolean,
    English: boolean
}

interface props {
    currentFilter: Filters,
    updateFilters: (newFilters: Filters) => void,
}

class Question0 extends React.Component<props, state> {
    constructor(props:any) {
        super(props);
        // setting state to what is dictated in redux (aka storing prev values here)
        this.state = this.props.currentFilter.language.value;
    } 

    // add states to redux here when component is removed from screen
    // aka when user is done inputing 
    componentWillUnmount() {
        let changes = this.props.currentFilter;
        changes.language.value = this.state;
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
                  <h1 className="question" >What language(s) would you prefer to use when speaking to assistance?</h1>
                  <img src={kala} alt="Kala the squid"/>
                  <h2>Select all options that apply to you.</h2>
                  {this.q1Options.map(answer => {
                      // @ts-ignore 
                      let booleanChecked = this.state[answer.label];
                      return(
                        <div key={answer.value} onChange={this.handleChange}>
                            {/* @ts-ignore */}
                            <input className="answer" type="checkbox" onChange={this.handleChange} checked={booleanChecked}
                            id={answer.value} value={answer.value}></input>
                            <label htmlFor={answer.value}>{answer.value}</label>
                        </div>
                      )
                      
                  })}
                </div>
        )
    }

    private q1Options = [
        { 
            value: "Spanish"
        },
        { 
            value: "Mandarin"
        },
        { 
            value: "Vietnamese"
        },
        { 
            value: "Russian"
        },
        { 
            value: "Swahili"
        },
        { 
            value: "French"
        },
        { 
            value: "ASL"
        },
        { 
            value: "Laotian"
        },
        { 
            value: "Thai"
        },
        { 
            value: "English"
        }
    ];
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

export default connect(mapStateToProps, mapDispatchToProps)(Question0);