import { connect } from 'react-redux';
import React from 'react';
import './profile.css';
import kala from '../assets/kala_orange_solid 3.svg';

import { updateFilters, updateUser } from '../reduxData/actions';
import AppState, { Filters, UserInfo } from '../reduxData/types';
import fetchFromAPI from '../reduxData/fetchFromAPI';
import fundingCard from '../searchPages/components/fundingCard';
import { RouteComponentProps } from 'react-router-dom';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

interface props extends RouteComponentProps<any>{
    updateUser: (newUser: UserInfo) => void,
    currentUser: UserInfo,
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
        let name = this.props.currentUser.email.value;
        let number = this.props.currentUser.password.value;
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

                    <FormControl className="dropdown-form">
                                <h3>Amount of funding needed</h3>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={this.state.fundingAmount}
                                className="dropdown-form"
                                // onChange={this.handleChangeFunding}
                                >
                                    {this.moneyQAmountOptions.map(answer => (
                                        <MenuItem value={answer} key={answer}>{answer}</MenuItem>
                                    ))}
                                </Select>
                    </FormControl>
                    <br></br>
                    <FormControl component="fieldset">
                    <h3>When do you need it</h3>
                    {/* value={this.state.needBy} onChange={this.handleChangeNeedBy} */}
                    <RadioGroup aria-label="needBy" name="needBy" >
                        <FormControlLabel value="asap" control={<Radio />} label="Immediately" />
                        <FormControlLabel value="fewMonths" control={<Radio />} label="1-2 months" />
                        <FormControlLabel value="anytime" control={<Radio />} label="Anytime" />
                    </RadioGroup>
                    </FormControl>
                    <br></br>
                    <FormControl className="dropdown-form">
                                <h3>Approximate gross revenue</h3>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={this.state.grossRev}
                                className="dropdown-form"
                                // onChange={}
                                >
                                    {this.moneyQRevenueOptions.map(answer => (
                                        <MenuItem value={answer} key={answer}>{answer}</MenuItem>
                                    ))}
                                </Select>
                    </FormControl>
                    
                    {this.languageOptions.map(answer => {
                        // @ts-ignore 
                        let booleanChecked = this.state[answer.value];
                        return(
                            // onChange={this.handleChange}
                            <div key={answer.value} > 
                                {/* @ts-ignore */}
                                <input className="answer" type="checkbox" onChange={this.handleChange} checked={booleanChecked}
                                id={answer.value} value={answer.value}></input>
                                <label htmlFor={answer.value}>{answer.label}</label>
                            </div>
                        )
                    })}

                    {this.whenArray.map(answer => {
                    //   let selectedValue = (answer.label === this.state.choice) ? true : false;
                      // @ts-ignore 
                      return(
                          // onChange={this.handleChange} onChange={this.handleChange} checked={selectedValue}
                        <div key={answer.label} >
                            {/* @ts-ignore */}
                            <input type="radio" name="q2" value={answer.label} 
                             ></input>
                            <label htmlFor={answer.label}>{answer.value}</label>
                        </div>
                      )
                    })}


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
    moneyQAmountOptions = ["Less than $10,000", "$50,000 - $100,000", "$100,000 - $250,000", "$250,001 or more"];
    moneyQRevenueOptions = ["Less than $10,000", "$50,000 - $100,000", "$100,000 - $250,000", "$250,001 or more", "Don't know"];
    whenArray = [
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
    q1Options = [
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
        private languageOptions = [
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
        currentUser: state.currentUser,
        currentFilter: state.currentFilter
    }
}

function mapDispatchToProps(dispatch: any)  {
    return {
        updateFilters: (  newFilters: Filters ) => dispatch(updateFilters(newFilters)),
        updateUser: (newUser: UserInfo ) => dispatch(updateUser(newUser))
    }    
} 

export default connect(mapStateToProps, mapDispatchToProps)(EditBiz);