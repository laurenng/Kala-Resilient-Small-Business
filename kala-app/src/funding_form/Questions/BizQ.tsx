import { connect } from 'react-redux';
import React from 'react';
import { updateFilters } from '../../redux-data/actions';
import AppState, { Filters } from '../../redux-data/types';
import './../fundingForm.css';
import kala from './../kala_orange_solid 3.svg';

// material ui form styling
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import LocalizaitonProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';

interface props {
    currentFilter: Filters,
    updateFilters: (newFilters: Filters) => void,
}

interface state {
    bizType: string,
    established: Date | null,
    industry: string
}

class BizQ extends React.Component<props, state> {
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
    handleChangeType = (event:  React.ChangeEvent<{ name?: string; value: unknown }>) =>{
        let type_name = String(event.target.value);
        this.setState({
            bizType: type_name
        })
    }

    // adding redux here to change filters properties 
    handleChangeIndustry = (event: React.ChangeEvent<{ name?: string; value: unknown }>) =>{
        let type_industry = String(event.target.value);
        this.setState({
            industry: type_industry
        })
    }

    // adding redux here to change filters properties 
    handleChangeDate = (date: Date | null) =>{
        if (date !== null) {
            console.log(date);
            // console.log(date?.getMonth() + 1)
            // console.log(date?.getFullYear())
            this.setState({
                established: date
            })
        }
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
                        <FormControl className="dropdown-form">
                            <h3>Business Industry</h3>
                            {/* <InputLabel id="demo-simple-select-label">Business Industry</InputLabel> */}
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.industry}
                            className="dropdown-form"
                            onChange={this.handleChangeIndustry}
                            >
                                {this.q3IndustryOptions.map(answer => (
                                    <MenuItem value={answer} key={answer}>{answer}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <br></br>
                        <FormControl className="dropdown-form">
                            <h3>Business Type</h3>
                            {/* <InputLabel id="demo-simple-select-label">Business Type</InputLabel> */}
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.bizType}
                            className="dropdown-form"
                            onChange={this.handleChangeType}
                            >
                                {this.q3Options.map(answer => (
                                    <MenuItem value={answer} key={answer}>{answer}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        
                        <h3>Business Start Date</h3>
                        <LocalizaitonProvider dateAdapter={AdapterDateFns}>
                            <div className="modal">
                            <DatePicker 
                                views={['year', 'month']}
                                label="Year and Month"
                                minDate={new Date('1950-01-01')}
                                maxDate={new Date()}
                                value={this.state.established}
                                onChange={this.handleChangeDate}
                                renderInput={(params) => (
                                    <TextField
                                    {...params}
                                    className="modal"
                                    margin="normal"
                                    variant="standard"
                                    helperText={null}
                                    />
                                )}
                            />
                            </div>
                        </LocalizaitonProvider>
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

export default connect(mapStateToProps, mapDispatchToProps)(BizQ);