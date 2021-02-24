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
    bizType: string,
    established: string,
    industry: string
}

class Question3 extends React.Component<props, state> {
    constructor(props:any) {
        super(props);
        let type = this.props.currentFilter.bizType.value;
        let established = this.props.currentFilter.established.value;
        let industryType = this.props.currentFilter.industryType.value;
        // setting state to what is dictated in redux (aka storing prev values here)
        this.state = {
            bizType: type,
            established: established,
            industry: industryType
        };
    } 

    componentWillUnmount() {
        console.log(this.props.currentFilter)
        let changes = this.props.currentFilter;
        changes.bizType.value = this.state.bizType;
        changes.established.value = this.state.established;
        changes.industryType.value = this.state.industry;
        updateFilters(changes);
    }

    // adding redux here to change filters properties 
    handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            bizType: event.target.value
        })
    }

    // adding redux here to change filters properties 
    handleChangeIndustry = (event: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            industry: event.target.value
        })
    }

    // adding redux here to change filters properties 
    handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            established: event.target.value
        })
    }

    render() {
        return(
            <div className="formQuestion" id="question3">
                <div className="questionBubble">
                    <h4 className="question">Tell me about your business.</h4>
                </div>
                
                    <div className="sideByside">
                    <img src={kala} alt="Kala the squid"/>
                    <div className="dropDownList">

                        <h3>Business industry</h3>
                        <div onChange={this.handleChangeIndustry}>
                            <select id="bizIndustry" name="bizIndustry" defaultValue={this.state.industry}>
                            {this.q3IndustryOptions.map(answer => (
                                <option value={answer} key={answer}>{answer}</option>
                            ))}
                            </select>
                        </div>

                        <h3 className="question" >business type</h3>
                        <div onChange={this.handleChangeType}>
                            <select id="bizType" name="bizType" defaultValue={this.state.bizType}>
                                {this.q3Options.map(answer => (
                                    <option value={answer} key={answer}> {answer}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <h3>Business start date</h3>
                            <input type="month" id="bizDate" name="bizDate" defaultValue={this.state.established}
                            onChange={this.handleChangeDate}></input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    q3IndustryOptions = ["Select an option", "Agriculture", "Construction", "Creative", "Education", "Finance", "Food", "Health Services",
    "Information Technology", "Leisure & Hospitality", "Manufacturing", "Professional & Business Services",
    "Real Estate", "Retail", "Trade, Transportation, & Utilities", "Other"]

    q3Options = ["Select an option", "Sole proprietorship", "LLC", "Corporation", "Nonprofit", "Other"];
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