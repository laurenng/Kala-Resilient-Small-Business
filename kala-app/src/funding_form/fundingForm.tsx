import { Divider } from '@material-ui/core';
import React from 'react';
import './fundingForm.css';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import WelcomeQuestion from './WelcomeQuestion';

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
    }

    // Work in progress - Fence post issue with questionNumber & currState
    selectQuestion = (num: number) => {
      let question;
      switch (num) {
        case 1:
          question = <Question1/>
          break;
        case 2:
          question  = <Question2 />
          break;
        case 3:
          question  = <Question3 />
          break;
        default: // last case! 
          question = <p>You've completed all our questions!</p>;
      }
      // displaying the question with additional buttons (skip, back, next buttons)
      return (
        <div>
          {question}
          <br></br>
          <div className="controls">
            <button className="skipBtn" onClick={this.handleSkip} type="button">Skip</button>
            <button className="backBtn" onClick={this.handleBackBtn} type="button">Back</button>
            <button className="nextBtn" onClick={this.handleNext} type="button">Next</button>
          </div>
        </div>
      )
    }

    // dot sequence CSS styling 
    fillProgress = () => {
      const progressDots = document.querySelectorAll(".dot") as NodeListOf<HTMLInputElement>;
      const currQuestion = this.state.questionIndex;
      if (currQuestion < 4) { // temp if statement
        progressDots[currQuestion - 1].classList.add("currDot");
      }
    }

    // handling the submit 
    handleSubmit = () => {
      console.log(this.state);
    }

    render() {
      let displayScreen;
      if (this.state.questionIndex === 0) { // if begining the form
        displayScreen = 
          <div>
            <p id="welcomeMsg">Welcome</p>
            <WelcomeQuestion /> 
            <button onClick={this.beginForm} type="button" id="beginForm">Begin Form</button>
          </div>
      } else if (this.state.questionIndex <= 3) { // going through each question (number in if statement = number of questions)
        displayScreen = 
          <div id="fundingForm">    
            {this.selectQuestion(this.state.questionIndex)}
          </div>
      } else { // end screen after questions are done 
        displayScreen = 
          <div>
            <h1>this is last screeen</h1>
            <input type="submit" value="Submit" className="hidden" id="submitBtn" onClick={e => {e.preventDefault(); this.handleSubmit()}}></input>
          </div>
      }

      return (
        <main>
            <div id="progressBar">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>

            {/* What is being displayed is dictated above in the conditional rendering sequence */}
            {displayScreen}

        </main>
      );
    }
}

export default FundingForm;
    