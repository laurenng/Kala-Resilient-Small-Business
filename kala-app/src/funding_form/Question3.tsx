import { connect } from 'react-redux';
import React from 'react';
import { updateFilters } from '../redux-data/actions';
import AppState, { Filters } from '../redux-data/types';
import './fundingForm.css';
import kala from './kala_orange_solid 3.svg';

interface props {
    currentFilter: Filters,
    updateFilters: (newFilters: Filters) => void,
}

interface state {
    choice: string
}

class Question3 extends React.Component<props, state> {
    constructor(props:any) {
        super(props);
        // setting state to what is dictated in redux (aka storing prev values here)
        this.state = this.props.currentFilter.bizType.value;
    } 

    componentWillUnmount() {
        let changes = this.props.currentFilter;
        changes.bizType.value = this.state;
        updateFilters(changes);
    }

    // adding redux here to change filters properties 
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            choice: event.target.value
        })
    }

    render() {
        return(
            <div className="formQuestion" id="question3">
                <h1 className="question" >What is your business type?</h1>
                <img src={kala} alt="Kala the squid"/>
                <h2>Gimme answer</h2>
                <div onChange={this.handleChange}>
                    <select id="bizType" name="bizType" defaultValue={this.state.choice}>
                        {this.q3Options.map(answer => (
                            <option value={answer}> {answer}</option>
                        ))}
                    </select>
                </div>
            </div>
        )
    }

    q3Options = ["Sole proprietorship", "LLC", "Corporation", "Nonprofit", "Other"];
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

export default connect(mapStateToProps, mapDispatchToProps)(Question3);