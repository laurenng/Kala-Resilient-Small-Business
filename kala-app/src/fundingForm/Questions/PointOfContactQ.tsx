import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { connect } from 'react-redux';
import { updateFilters } from '../../reduxData/actions';
import AppState, { Filters } from '../../reduxData/types';
import '../fundingForm.css';
import kala from '../../assets/kala_orange_solid 3.svg';

interface props {
    currentFilter: Filters,
    updateFilters: (newFilters: Filters) => void,
}

interface state {
    contactMethod: string,
    contactFirstName: string,
    contactLastName: string,
    contactPhone: string,
    contactEmail: string
}

class PointOfContactQ extends React.Component<props, state> {

    constructor(props:any) {
        super(props);
        let contactMethod = this.props.currentFilter.contactMethod.value
        let contactFirstName = this.props.currentFilter.contactFirstName.value
        let contactLastName = this.props.currentFilter.contactLastName.value
        let contactPhone = this.props.currentFilter.contactPhone.value
        let contactEmail = this.props.currentFilter.contactEmail.value
        // setting state to what is dictated in redux (aka storing prev values here)
        this.state = {
            contactMethod: contactMethod,
            contactFirstName: contactFirstName,
            contactLastName: contactLastName,
            contactPhone: contactPhone,
            contactEmail: contactEmail
        };
    } 

    componentWillUnmount() {
        console.log(this.props.currentFilter)
        let changes = this.props.currentFilter;
        changes.contactMethod.value = this.state.contactMethod;
        changes.contactFirstName.value = this.state.contactFirstName;
        changes.contactLastName.value = this.state.contactLastName;
        changes.contactPhone.value = this.state.contactPhone;
        changes.contactEmail.value = this.state.contactEmail;
        updateFilters(changes);
    }


    handleChangeContact = (event: React.ChangeEvent<HTMLInputElement>) =>{
        let contactMethod = ((event.target as HTMLInputElement).value);
        this.setState({
            contactMethod: contactMethod
        })
    }

    private handleChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            contactFirstName: event.target.value
        })
    }

    private handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            contactLastName: event.target.value
        })
    }

    private handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            contactPhone: event.target.value
        })
    }

    private handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            contactEmail: event.target.value
        })
    }

  render() {
    return(
        <div className="formQuestion" id="question3">
            <div className="questionBubble">
                <h4 className="question">Who is this business' point of contact?</h4>
            </div>
            
                <div className="sideByside">
                <img src={kala} alt="Kala the squid"/>

                <div>
                    <h5 className="questionInstructions">First Name</h5>
                    <input type="text" value={this.state.contactFirstName} onChange={this.handleChangeFirstName}></input>
                </div>

                <div>
                    <h5 className="questionInstructions">Last Name</h5>
                    <input type="text" value={this.state.contactLastName} onChange={this.handleChangeLastName}></input>
                </div>


                <FormControl component="fieldset">
                <RadioGroup aria-label="contactMethod" name="contactMethod" value={this.state.contactMethod} onChange={this.handleChangeContact}>
                    <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                    <FormControlLabel value="email" control={<Radio />} label="Email" />
                </RadioGroup>
                </FormControl>

                <div>
                    <h5 className="questionInstructions">Phone Number</h5>
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" value={this.state.contactPhone} onChange={this.handleChangePhone}></input>
                </div>

                <div>
                    <h5 className="questionInstructions">Email Address</h5>
                    <input type="email" value={this.state.contactEmail} onChange={this.handleChangeEmail}></input>
                </div>

                </div>
        </div>
        );
    }
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



export default connect(mapStateToProps, mapDispatchToProps)(PointOfContactQ);