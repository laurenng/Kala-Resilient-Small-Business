/**
The funding questionaire homepage where users are taken through the 
entire process. From the introduction to submission. 
*/

// import { Divider } from '@material-ui/core';
import React from 'react';
import './fundingForm.css';
import LanguageQ from './Questions/LanguageQ';
import ReasonQ from './Questions/ReasonQ';
// import WhenQ from './Questions/WhenQ';
import BizQ from './Questions/BizQ';
import DemoQ from './Questions/DemoQ';
import CreateAccountQ from './Questions/CreateAccountQ';
import MoneyQ from './Questions/MoneyQ';
import PointOfContactQ from './Questions/PointOfContactQ';
import SignupQ from './Questions/signUpQ';
import WelcomeQuestion from './WelcomeQuestion';
import { Link } from "react-router-dom";
import { Prompt } from 'react-router';

// popup
import ConfirmPopup from './confirmationPopup';

// redux
import { clearData, updateFilters, updateUser } from '../reduxData/actions';
import AppState, { UserInfo, Filters, filters } from '../reduxData/types';
import { connect } from 'react-redux';

interface props {
    currentUser: UserInfo,
    currentPOC: UserInfo,
    updateUser: (newUser: UserInfo) => void,
    updateFilters: (newFilters: Filters) => void,
    clearData: () => void,
    currentFilter: Filters
}

const NUM_QUESTIONS = 7; 
class SignUpForm extends React.Component<props, any> {
    constructor(props: any) {
      super(props)
      this.state = {
        questionIndex: 0
      };

      window.addEventListener('beforeunload', this.warningPopup); // gives user warning when trying to refresh page/form
    }

    shouldBlockNavigation = true

    warningPopup (e: any) {
      // Cancel the event
      e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
      // Chrome requires returnValue to be set
      e.returnValue = '';
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.warningPopup); // removes navigate away blocker when they leave form page
        console.log("get rid of the data u unmounted")
        
        // let changes = this.props.currentPOC;

        // changes.contactMethod.value = undefined;
        // changes.contactFirstName.value = undefined;
        // changes.contactMethod.value = undefined;
        // changes.contactLastName.value = undefined;
        // changes.contactPhone.value = undefined;
        // changes.contactEmail.value = undefined;

        // updatePOC(changes);
        
        let filterChanges = this.props.currentFilter; 
        // TODO:: LAUREN!!!!
        // filterChanges.language.value = undefined;
        // filterChanges.reason.value = undefined;
        // filterChanges.when.value = undefined;
        // filterChanges.bizType.value = undefined;
        // filterChanges.established.value = undefined;
        // filterChanges.industryType.value = undefined;
        // filterChanges.demographic.value = undefined;
        // filterChanges.tribalAff.value = undefined;
        // filterChanges.bizName.value = undefined;
        // filterChanges.employeeNum.value = undefined;
        // filterChanges.createAccount.value = undefined;
        // filterChanges.fundingAmount.value = undefined;
        // filterChanges.needBy.value = undefined;
        // filterChanges.grossRev.value = undefined;

        // updateFilters(filterChanges)
    }

    // next button functionality 
    handleNext = (event: { target: any; }) => {
      this.setState({
        questionIndex: this.state.questionIndex + 1
      });
    }

    // back button functionality 
    handleBackBtn = (event: { target: any; }) => {
      this.setState({questionIndex: this.state.questionIndex - 1})
    }

    // skip button functionality 
    handleSkip = (event: { target: any; }) => {
      this.setState({questionIndex: this.state.questionIndex + 1})
    }

    async fetchPostNewUser(url: string, email: string, password: string, firstName: string, lastName: string): Promise<any> {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
            })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json() as Promise<{ data: string[] }>
        })
        .then(data => {
            // console.log(data)
            return data
        })
    }

    handleUserSubmit = (event: { target: any; }) => {
      console.log("submit");
      console.log(this.props);
      let email = this.props.currentUser.email.value;
      let password = this.props.currentUser.password.value;
      let firstName = this.props.currentUser.firstName.value;
      let lastName = this.props.currentUser.lastName.value;
      console.log("Email: " + email + " Pass: " + password + " FN: " + firstName + " LN: " + lastName);

      this.fetchPostNewUser("https://ckbyvv1y8e.execute-api.us-west-2.amazonaws.com/rsb/users", email, password, firstName, lastName)
        .then((data) => {
          // ASK KELSON :)
          console.log(data)
            if (data.error != null) { // error occured, need better error handling
                document.getElementById("signUpErrMsg")?.classList.remove("hidden");
                console.log(data);
            } else {
                document.getElementById("signUpErrMsg")?.classList.add("hidden"); 
                console.log(data);
                // add this to state here
                // sign up was successful so redirect elsewhere
                sessionStorage.setItem('fundingToken', data.token); // login token
                // save user id to state or smth
                console.log(sessionStorage.getItem('fundingToken'));

                let changes = this.props.currentUser
                changes.userID.value = data.id
                this.setState({questionIndex: this.state.questionIndex + 1})
                // this.setState({"isLogin": true} as any); // need to hook up to actual state
            }
        });
      // inside the API if it passes
      
    }

    // start of the form 
    beginForm = () => {
      this.setState({questionIndex: 1});
      this.selectQuestion(1);
      document.getElementById("welcomeMsg")?.classList.add("hidden");
      document.getElementById("beginForm")?.classList.add("hidden");
      document.getElementById("progressBar")?.classList.add("active");
    }

    // Work in progress - Fence post issue with questionNumber & currState
    selectQuestion = (num: number) => {
      let question;
      let skipBtn = <button className="skipBtn" onClick={this.handleSkip} type="button">Skip</button>
      let nextBtn; // dependent on whether there are more questions or form should be submitted
      let submitUser;
      switch (num) {
        case 1:
          question = <SignupQ />
          nextBtn = <div></div>
          submitUser = <button className="nextBtn" onClick={this.handleUserSubmit} type="button">Submit</button> //<div></div>
          skipBtn = <div></div>
          break;
        case 2:
          question  = <PointOfContactQ />
          nextBtn = <button className="nextBtn" onClick={this.handleNext} type="button">Next</button>
          skipBtn = <div></div>
          break;
        case 3:
          question  = <BizQ />
          nextBtn = <button className="nextBtn" onClick={this.handleNext} type="button">Next</button>
          break;
        case 4:
          question  = <MoneyQ />
          nextBtn = <button className="nextBtn" onClick={this.handleNext} type="button">Next</button>
          break;
        case 5:
          question  = <DemoQ />
          nextBtn = <button className="nextBtn" onClick={this.handleNext} type="button">Next</button>
          break;
        case 6:
          question  = <ReasonQ />
          nextBtn = <button className="nextBtn" onClick={this.handleNext} type="button">Next</button>
          break;
        default: // last question - form submission case
          question  = <LanguageQ />
          this.shouldBlockNavigation = false
          nextBtn = <ConfirmPopup></ConfirmPopup>
      }
      // displaying the question with additional buttons (skip, back, next buttons)
      return (
        <div>
          {/* Navigate away from page warning */}
          <Prompt
            when={this.shouldBlockNavigation}
            message='You have unsaved changes, are you sure you want to leave?'
          />
          <h3 id="signUpErrMsg" className="hidden">There was a problem trying to sign up, please check your information and try again.</h3>
          {question}
          <br></br>
          <div className="controls">
            {skipBtn}
            <div className="inline">
              <button className="backBtn" onClick={this.handleBackBtn} type="button">Back</button>
              {nextBtn}
              {submitUser}
            </div>
          </div>
        </div>
      )
    }

    // dot sequence CSS styling 
    fillProgress = () => {
      const progressDots = document.querySelectorAll(".dot") as NodeListOf<HTMLSpanElement>;
      // console.log(progressDots);
      const currQuestion = this.state.questionIndex;

      for (let i = 0; i < progressDots.length; i++) {
        progressDots[i].classList.remove("currDot");
        if (currQuestion > 0 && currQuestion <= NUM_QUESTIONS) { 
          progressDots[currQuestion - 1].classList.add("currDot");
        }
      }
    }

    // handling the submit 
    handleSubmit = () => {
      console.log("submitting");
      console.log(this.state);
    }

    render() {
      let displayScreen;
      if (this.state.questionIndex === 0) { // if begining the form
        displayScreen = 
          <div>
            {/* <p id="welcomeMsg">Welcome</p> */}
            <WelcomeQuestion /> 
            <button onClick={this.beginForm} type="button" id="beginForm">Begin</button>
          </div>
      } else if (this.state.questionIndex <= NUM_QUESTIONS) { // going through each question (number in if statement = number of questions)
        displayScreen = 
          <div id="fundingForm">    
            {this.selectQuestion(this.state.questionIndex)}
          </div>
      } else { // end screen after questions are done 
        // displayScreen = 
          // <ConfirmPopup></ConfirmPopup>
          // <div>
          //   <p>You've completed all our questions! Are you sure you want to submit your answers?</p>
          //   <Link to="/search">
          //         <div className="moreDetailsBox url centeredForm">
          //             <h1>Go to Search Home</h1>
          //         </div>
          //     </Link>
          // </div>
      }

      let dots = [...Array(NUM_QUESTIONS)].map((e, i) => <span key={i} className="dot"></span>)
      this.fillProgress();
      return (
        <main id="fundingPage">
            <br></br>
            <div id="progressBar">
              {dots}
            </div>
            <p id="signUpErrMsg" className="hidden">Something went wrong, please try again</p>

            {/* What is being displayed is dictated above in the conditional rendering sequence */}
            {displayScreen}

        </main>
      );
    }
}

function mapStateToProps(state: AppState) {
    return { 
        currentUser: state.currentUser,
    }
}

function mapDispatchToProps(dispatch: any)  {
    return {
        updateUser: (  newUser: UserInfo ) => dispatch(updateUser(newUser)),
        updateFilters: (  newFilters: Filters ) => dispatch(updateFilters(newFilters)),
        clearData: () => dispatch(clearData()),
    }    
} 

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
    