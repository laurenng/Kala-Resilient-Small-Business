import { connect } from 'react-redux';
import React from 'react';
import { updateFilters } from '../../reduxData/actions';
import AppState, { Filters } from '../../reduxData/types';
import '../fundingForm.css';
import kala from '../../assets/kala_orange_solid 3.svg';

interface props {
    currentFilter: Filters,
    updateFilters: (newFilters: Filters) => void,
}

interface state {
    choice: string
}

class WhenQ extends React.Component<props, state> {
    constructor(props:any) {
        super(props);
        // setting state to what is dictated in redux (aka storing prev values here)
        this.state = this.props.currentFilter.when.value;
    } 

    componentWillUnmount() {
        let changes = this.props.currentFilter;
        changes.when.value = this.state;
        updateFilters(changes);
    }

    // adding redux here to change filters properties 
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            choice: event.target.value
        })
    }

    render() {
        console.log(this.state)
        return(
            <div className="formQuestion" id="question2">
                <h1 className="question" >Now, let's talk about money.</h1>
                <img src={kala} alt="Kala the squid"/>
                <h2>When do you need this funding by?</h2>
                {this.q2Options.map(answer => {
                      let selectedValue = (answer.label === this.state.choice) ? true : false;
                      // @ts-ignore 
                      return(
                        <div key={answer.label} onChange={this.handleChange}>
                            {/* @ts-ignore */}
                            <input type="radio" name="q2" value={answer.label} 
                            onChange={this.handleChange} checked={selectedValue}></input>
                            <label htmlFor={answer.label}>{answer.value}</label>
                        </div>
                      )
                })}
            </div>
        )
    }
        
    q2Options = [
        {
            label: "now",
            value: "Immediately"
        },
        {
            label: "month",
            value: "Within 1-2 months"
        },
        {
            label: "year",
            value: "Within the next year"
        },
        {
            label: "any",
            value: "Anytime"
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

export default connect(mapStateToProps, mapDispatchToProps)(WhenQ);