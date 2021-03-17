import React from 'react';
import { connect } from 'react-redux';
import { updateFilters } from '../../reduxData/actions';
import AppState, {Filters} from '../../reduxData/types';
import '../fundingForm.css';
import kala from '../../assets/kala_orange_solid 3.svg';

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

class LanguageQ extends React.Component<props, state> {
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
                <div className="questionBubble">
                  <h4 className="question">For technical assistance, what language(s) would you prefer to use?</h4>
                  <h5 className="questionInstructions">Select all options that apply to you.</h5>
                </div>
                <div className="sideByside">
                  <img src={kala} alt="Kala the squid"/>
                  <div>
                  {this.q1Options.map(answer => {
                      // @ts-ignore 
                      let booleanChecked = this.state[answer.value];
                      return(
                        <div key={answer.value} onChange={this.handleChange}>
                            {/* @ts-ignore */}
                            <input className="answer" type="checkbox" onChange={this.handleChange} checked={booleanChecked}
                            id={answer.value} value={answer.value}></input>
                            <label htmlFor={answer.value}>{answer.label}</label>
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
            label: "English",
            value: "English"
        },
        { 
            label: "Español (Spanish)",
            value: "Spanish"
        },
        { 
            label: "官話 (Mandarin)",
            value: "Mandarin"
        },
        { 
            label: "Tiếng Việt (Vietnamese)",
            value: "Vietnamese"
        },
        { 
            label: "Русский язык (Russian)",
            value: "Russian"
        },
        {
            label: "한글 (Korean)",
            value: "Korean"
        },
        { 
            label: "Kiswahili (Swahili)",
            value: "Swahili"
        },
        { 
            label: "français (French)",
            value: "French"
        },
        { 
            label: "ภาษาล้านนา (Thai)",
            value: "Thai"
        },
        { 
            label: "ພາສາລາວ (Laotian)",
            value: "Laotian"
        },
        { 
            label: "American Sign Language (ASL)",
            value: "ASL"
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

export default connect(mapStateToProps, mapDispatchToProps)(LanguageQ);