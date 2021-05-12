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
    createAccount: string,
}

class CreateAccountQ extends React.Component<props, state> {

    constructor(props:any) {
        super(props);
        let createAccount = this.props.currentFilter.createAccount.value
        // setting state to what is dictated in redux (aka storing prev values here)
        this.state = {
            createAccount: createAccount
        };
    } 

    componentWillUnmount() {
        console.log(this.props.currentFilter)
        let changes = this.props.currentFilter;
        changes.createAccount.value = this.state.createAccount;
        updateFilters(changes);
    }


    handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        let createAccount = ((event.target as HTMLInputElement).value);
        this.setState({
            createAccount: createAccount
        })
    }

  render() {
    return(
        <div className="formQuestion" id="question3">
            <div className="questionBubble">
                <h4 className="question">Do you want to Create an Account?</h4>
                <h5 className="questionInstructions">Creating an account will allow you to save your matches.</h5>
            </div>
            
                <div className="sideByside">
                {/* <img src={kala} alt="Kala the squid"/> */}
                <FormControl component="fieldset">
                <RadioGroup aria-label="create" name="create" value={this.state.createAccount} onChange={this.handleChange}>
                    <FormControlLabel value="true" control={<Radio />} label="Yes" />
                    <FormControlLabel value="false" control={<Radio />} label="No" />
                </RadioGroup>
                </FormControl>
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



export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountQ);