import {createDropDownQuestion, createMultiselectQuestion, createRadioQuestion} from './createQuestion';
import React from 'react';
import './fundingForm.css';
import kala from './kala_orange_solid 3.svg';

class FundingForm extends React.Component<any, any> {
    constructor(props: any) {
      super(props)
      this.state = {
        currQuestionNumber: 1,
        question1ans: [],
        question2ans: "",
        question3ans: ""
      };
      this.handleQ1 = this.handleQ1.bind(this);
      this.handleQ2 = this.handleQ2.bind(this);
      this.handleQ3 = this.handleQ3.bind(this);
      
    }

    // question is stored in state
    // questionNumber: {question: string, questionAnswer: string[]}
    // handlers should follow same format, just change checked with selected, etc.
    handleQ1 = (event: { target: any; }) => {
      const answerInputs = document.querySelectorAll(".answer") as NodeListOf<HTMLInputElement>;;
      // console.log(answerInputs);
      const answerSubmitted: string[] = [];
      answerInputs.forEach(answer => {
        if (answer.checked == true) {
          answerSubmitted.push(answer.value);
        }
      });
      // console.log(answerSubmitted);

      this.setState({currQuestionNumber: this.state.currQuestionNumber + 1});
      this.setState({question1ans: answerSubmitted});
      console.log(this.state);
      this.displayQuestion();

    }

    handleQ2 = (event: { target: any; }) => {
      const answerInputs = document.querySelectorAll(".answer") as NodeListOf<HTMLInputElement>;
      // console.log(answerInputs);
      const answerSubmitted: string[] = [];
      answerInputs.forEach(answer => {
        if (answer.checked == true) {
          answerSubmitted.push(answer.value);
        }
      });
      // console.log(answerSubmitted);
 
      this.setState({currQuestionNumber: this.state.currQuestionNumber + 1});
      this.setState({question2ans: answerSubmitted});
      console.log(this.state);
      this.displayQuestion();

    }

    handleQ3 = (event: { target: any; }) => {
      const answerSelected = document.getElementById("bizType") as HTMLSelectElement;
      // console.log(answerInputs);
      const answerSubmitted = answerSelected.value;
      // console.log(answerSubmitted);

      this.setState({currQuestionNumber: this.state.currQuestionNumber + 1});
      this.setState({question3ans: answerSubmitted});
      console.log(this.state);
      this.displayQuestion();
      document.getElementById("submitBtn")?.classList.remove("hidden");
    }

    q1Options = ["Buy a building/property", "Insurance", "Make building improvements", "Marketing", "Pandemic-related expenses",
  "Pay employees", "Purchase machinery or equipment", "Purchase inventory", "Refinance", "Rent/Utility Bills", "Don't know"];
    q2Options = ["Immediately", "Within 1-2 months", "Within the next year", "Anytime"];
    q3Options = ["Sole proprietorship", "LLC", "Corporation", "Nonprofit", "Other"];


    // Use this one for testing redux
    questionOne = <div className="formQuestion" id="question1">
                  <h1 className="question" >Why do you want this funding?</h1>
                  <img src={kala} alt="Kala the squid"/>
                  <h2>Select all options that apply to you.</h2>
                  {this.q1Options.map(answer => (
                      <div>
                          <input className="answer" type="checkbox" id={answer} value={answer} key={answer}></input>
                          <label htmlFor={answer}>{answer}</label>
                      </div>
                  ))}
                  <br></br>
                  <button className="nextBtn" onClick={this.handleQ1} type="button">Next</button>
                </div>

    questionTwo = <div className="formQuestion" id="question2">
                  <h1 className="question" >Now, let's talk about money.</h1>
                  <img src={kala} alt="Kala the squid"/>
                  <h2>When do you need this funding by?</h2>
                  {this.q2Options.map(answer => (
                      <div>
                          <input className="answer" type="radio" name="question2" id={answer} value={answer} key={answer}></input>
                          <label htmlFor={answer}>{answer}</label>
                      </div>
                  ))}
                  <br></br>
                  <button className="nextBtn" onClick={this.handleQ2} type="button">Next</button>
                </div>

    questionThree = <div className="formQuestion" id="question3">
                  <h1 className="question" >What is your business type?</h1>
                  <img src={kala} alt="Kala the squid"/>
                  <h2>Gimme answer</h2>
                  <select id="bizType" name="bizType">
                  {this.q3Options.map(answer => (
                      <option value={answer} key={answer}>{answer}</option>
                  ))}
                  </select>
                  <br></br>
                  <button className="nextBtn" onClick={this.handleQ3} type="button">Next</button>
                </div>



    beginForm = () => {
      this.setState({currQuestionNumber: this.state.currQuestionNumber + 1});
      this.displayQuestion();
      console.log(this.state);
      document.getElementById("welcomeMsg")?.classList.add("hidden");
      document.getElementById("beginForm")?.classList.add("hidden");
    }

    currQuestion: JSX.Element = <div></div>;
    // Work in progress - Fence post issue with questionNumber & currState
    displayQuestion = () => {
      let currQuestionNumber = this.state.currQuestionNumber;
      console.log(currQuestionNumber);
      switch (currQuestionNumber) {
        case 1:
          this.currQuestion = this.questionOne;
          break;
        case 2:
          this.currQuestion  = this.questionTwo;
          break;
        case 3:
          this.currQuestion  = this.questionThree;
          break;
        default:
          this.currQuestion  = <p>You've completed all our questions!</p>;
      }
      this.fillProgress();
    }

    fillProgress = () => {
      const progressDots = document.querySelectorAll(".dot") as NodeListOf<HTMLInputElement>;
      const currQuestion = this.state.currQuestionNumber;
      if (currQuestion < 4) { // temp if statement
        progressDots[currQuestion - 1].classList.add("currDot");
      }
      
    }

    handleSubmit = () => {
      console.log(this.state);
    }

    render() {
      
      return (
        <main>
            <div id="progressBar">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <p id="welcomeMsg">Welcome</p>
            <button onClick={this.beginForm} type="button" id="beginForm">Begin Form</button>
            <form id="fundingForm">
                {/* Current idea to make the form dynamic: have state that tracks progress of questions, have if/else or switch statements to toggle which question is on display at the moment */}
                {/* Handlers should be assigned in createQuestion.tsx */}
                {/* Should these functions be made private methods instead? */}
                
                
                {/* Test code */}
                
                
                {/* {this.displayQuestion} */}
                {this.currQuestion}

                

                
                {/* {createMultiselectQuestion("Why do you need funding?", "Select all that apply", ["Payroll", "Rent", "Working Capital"])}
                {createDropDownQuestion("What state do you live in?", "Select one", ["NV", "CA", "WA"])}
                {createRadioQuestion("Do you like squids?", "Answer the question", ["Yes", "No"])} */}
                {/* <button className="backBtn" type="button">Back</button>
                <button className="nextBtn" type="button">Next</button>
              <br></br>*/}
                <input type="submit" value="Submit" className="hidden" id="submitBtn" onClick={e => {e.preventDefault(); this.handleSubmit()}}></input>
            </form>
        </main>
      );

    }

}

export default FundingForm;
    