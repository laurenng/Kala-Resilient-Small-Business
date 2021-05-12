import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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
    fundingAmount: String,
    needBy: String,
    grossRev: String
}

class MoneyQ extends React.Component<props, state> {

    constructor(props:any) {
        super(props);
        let needBy = this.props.currentFilter.needBy.value
        let fundingAmount = this.props.currentFilter.fundingAmount.value;
        let grossRev = this.props.currentFilter.grossRev.value;
        // setting state to what is dictated in redux (aka storing prev values here)
        this.state = {
            fundingAmount: fundingAmount,
            needBy: needBy,
            grossRev: grossRev
        };
    } 

    componentWillUnmount() {
        console.log(this.props.currentFilter)
        let changes = this.props.currentFilter;
        changes.fundingAmount.value = this.state.fundingAmount;
        changes.needBy.value = this.state.needBy;
        changes.grossRev.value = this.state.grossRev;
        updateFilters(changes);
    }


    handleChangeNeedBy = (event: React.ChangeEvent<HTMLInputElement>) =>{
        let needBy = ((event.target as HTMLInputElement).value);
        this.setState({
            needBy: needBy
        })
    }

    handleChangeFunding = (event: React.ChangeEvent<{ name?: string; value: unknown }>) =>{
        let fundingAmount = String(event.target.value);
        this.setState({
            fundingAmount: fundingAmount
        })
    }

    handleChangeRevenue = (event: React.ChangeEvent<{ name?: string; value: unknown }>) =>{
        let grossRev = String(event.target.value);
        this.setState({
            grossRev: grossRev
        })
    }

  render() {
    return(
        <div className="formQuestion" id="question3">
            <div className="questionBubble">
                <h4 className="question">Now, let's talk money.</h4>
            
            
                <div className="leftAlignDiv">
                {/* <img src={kala} alt="Kala the squid"/> */}

                <div id="moneyQuestions">
                    <FormControl className="dropdown-form">
                                <h3>Amount of funding needed</h3>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.fundingAmount}
                                className="dropdown-form"
                                onChange={this.handleChangeFunding}
                                >
                                    {this.moneyQAmountOptions.map(answer => (
                                        <MenuItem value={answer} key={answer}>{answer}</MenuItem>
                                    ))}
                                </Select>
                    </FormControl>

                    <FormControl component="fieldset">
                    <h3>When do you need it</h3>
                    <RadioGroup aria-label="needBy" name="needBy" value={this.state.needBy} onChange={this.handleChangeNeedBy}>
                        <FormControlLabel value="asap" control={<Radio />} label="Immediately" />
                        <FormControlLabel value="fewMonths" control={<Radio />} label="1-2 months" />
                        <FormControlLabel value="anytime" control={<Radio />} label="Anytime" />
                    </RadioGroup>
                    </FormControl>

                    <FormControl className="dropdown-form">
                                <h3>Approximate gross revenue</h3>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.grossRev}
                                className="dropdown-form"
                                onChange={this.handleChangeRevenue}
                                >
                                    {this.moneyQRevenueOptions.map(answer => (
                                        <MenuItem value={answer} key={answer}>{answer}</MenuItem>
                                    ))}
                                </Select>
                    </FormControl>
                </div>

             
                </div>
                </div>
        </div>
        );
    }
    moneyQAmountOptions = ["Less than $10,000", "$50,000 - $100,000", "$100,000 - $250,000", "$250,001 or more"];
    moneyQRevenueOptions = ["Less than $10,000", "$50,000 - $100,000", "$100,000 - $250,000", "$250,001 or more", "Don't know"];
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



export default connect(mapStateToProps, mapDispatchToProps)(MoneyQ);