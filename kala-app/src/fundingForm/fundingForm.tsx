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
import DemoQuestion from './Questions/DemoQuestion';
import WelcomeQuestion from './WelcomeQuestion';
import { Link } from "react-router-dom";

// popup
import ConfirmPopup from './confirmationPopup';

const NUM_QUESTIONS = 4; 
class FundingForm extends React.Component<any, any> {
    constructor(props: any) {
      super(props)
      this.state = {
        questionIndex: 0
      };
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
      let nextBtn; // dependent on whether there are more questions or form should be submitted
      switch (num) {
        case 1:
          question = <LanguageQ/>
          nextBtn = <button className="nextBtn" onClick={this.handleNext} type="button">Next</button>
          break;
        case 2:
          question  = <ReasonQ />
          nextBtn = <button className="nextBtn" onClick={this.handleNext} type="button">Next</button>
          break;
        case 3:
          question  = <BizQ />
          nextBtn = <button className="nextBtn" onClick={this.handleNext} type="button">Next</button>
          break;
        default: // last question - form submission case
          question  = <DemoQuestion />
          nextBtn = <ConfirmPopup></ConfirmPopup>
      }
      // displaying the question with additional buttons (skip, back, next buttons)
      return (
        <div>
          {question}
          <br></br>
          <div className="controls">
            <button className="skipBtn" onClick={this.handleSkip} type="button">Skip</button>
            <div className="inline">
              <button className="backBtn" onClick={this.handleBackBtn} type="button">Back</button>
              {nextBtn}
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
        displayScreen = 
          <div>
            <p>You've completed all our questions! Are you sure you want to submit your answers?</p>
            <Link to="/search">
                  <div className="moreDetailsBox url centeredForm">
                      <h1>Go to Search Home</h1>
                  </div>
              </Link>
          </div>
      }

      let dots = [...Array(NUM_QUESTIONS)].map((e, i) => <span key={i} className="dot"></span>)
      this.fillProgress();
      return (
        <main>
            <br></br>
            <div id="progressBar">
              {dots}
            </div>

            {/* What is being displayed is dictated above in the conditional rendering sequence */}
            {displayScreen}

        </main>
      );
    }
}

export default FundingForm;
    