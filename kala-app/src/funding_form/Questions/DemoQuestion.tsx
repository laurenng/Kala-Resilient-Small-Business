import React from 'react';
import { connect } from 'react-redux';
import { updateFilters } from '../../redux-data/actions';
import AppState, {Filters} from '../../redux-data/types';
import './../fundingForm.css';
import kala from './../kala_orange_solid 3.svg';

interface state {
    native: boolean,
    women: boolean,
    men: boolean,
    hispanic: boolean,
    asian: boolean,
    black: boolean,
    islander: boolean,
    mixed: boolean,
    mideast: boolean,
    veteran: boolean,
    lgbtq: boolean,
    white: boolean
    tribalAff: string
}

interface props {
    currentFilter: Filters,
    updateFilters: (newFilters: Filters) => void,
}

class DemoQuestion extends React.Component<props, state> {
    constructor(props:any) {
        super(props);
        let allProps = this.props.currentFilter.demographic.value;
        allProps["tribalAff"] = this.props.currentFilter.tribalAff.value;
        // setting state to what is dictated in redux (aka storing prev values here)
        this.state =  allProps;
    } 

    // add states to redux here when component is removed from screen
    // aka when user is done inputing 
    componentWillUnmount() {
        let changes = this.props.currentFilter;
        let reasonSet = {
            women: this.state.women,
            men: this.state.men,
            native: this.state.native,
            hispanic: this.state.hispanic,
            asian: this.state.asian,
            black: this.state.black,
            islander: this.state.islander,
            mixed: this.state.mixed,
            mideast: this.state.mideast,
            veteran: this.state.veteran,
            lgbtq: this.state.lgbtq,
            white: this.state.white
        }
        changes.demographic.value = reasonSet;
        changes.tribalAff.value = this.state.tribalAff;
        updateFilters(changes);
    }

    private tribalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            tribalAff: event.target.value
        })
    }

    // adding redux here to change filters properties 
    private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let changingLabel = event.target.value;
        // typescript sucks and doesn't let me do the line below without the ts-ignore.... 
        // @ts-ignore
        let pastValue = this.state[changingLabel]
        // let phrase = 
        // updating state to toggle boolean value 
        this.setState({
            [changingLabel]: !pastValue
        } as any);
    }
    
    render() {
        return(
            <div className="formQuestion" id="question1">
                  <div className="questionBubble">
                    <h4 className="question" >Tell me more about yourself.</h4>
                  </div>
                  <div className="sideByside">
                  <img src={kala} alt="Kala the squid"/>
                  <div>
                    <h5 className="questionInstructions">Select that apply to you.</h5>
                    {this.demoOptions.map(answer => {
                        // @ts-ignore 
                        let booleanChecked = this.state[answer.label];
                        return(
                            <div key={answer.label}>
                                {/* @ts-ignore */}
                                <input className="answer" type="checkbox" checked={booleanChecked}
                                id={answer.label} value={answer.label} onChange={this.handleChange}></input>
                                <label htmlFor={answer.value}>{answer.value}</label>
                            </div>
                        )
                    })}
                    <br></br>
                    <h5 className="questionInstructions">Tribal affilation (if applicable)</h5>
                    <input type="text" value={this.state.tribalAff} onChange={this.tribalChange}></input>
                  </div>
                  </div>
                </div>
        )
    }

    private demoOptions = [
        {
            label: "women", 
            value: "Woman"
        },
        {
            label: "men", 
            value: "Man"
        },
        {
            label: "native", 
            value: "Native American or Alaskan Native"
        },
        {
            label: "hispanic", 
            value: "Latinx or Hispanic"
        },
        {
            label: "asian", 
            value: "Asian"
        },
        {
            label: "black", 
            value: "Black or African American"
        },
        {
            label: "islander", 
            value: "Pacific Islander"
        },
        
        {
            label: "mideast", 
            value: "Middle Eastern or North African"
        },
        {
            label: "mixed", 
            value: "Mixed Race"
        },
        {
            label: "white", 
            value: "White"
        },
        {
            label: "veteran", 
            value: "Veteran"
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

export default connect(mapStateToProps, mapDispatchToProps)(DemoQuestion);