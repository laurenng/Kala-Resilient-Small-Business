import React from 'react';
import './fundingForm.css';
import kala from './kala_orange_solid 3.svg';

export default class Question1 extends React.Component<any, any> {

    q1Options = ["Buy a building/property", "Insurance", "Make building improvements", "Marketing", "Pandemic-related expenses",
    "Pay employees", "Purchase machinery or equipment", "Purchase inventory", "Refinance", "Rent/Utility Bills"];

    // question is stored in state
    // questionNumber: {question: string, questionAnswer: string[]}
    // handlers should follow same format, just change checked with selected, etc.
    handleQ1 = (event: { target: any; }) => {
        const answerInputs = document.querySelectorAll(".answer") as NodeListOf<HTMLInputElement>;;
        // console.log(answerInputs);
        const answerSubmitted: string[] = [];
        answerInputs.forEach(answer => {
          if (answer.checked === true) {
            answerSubmitted.push(answer.value);
          }
        });
        // console.log(answerSubmitted);
  
        this.setState({currQuestionNumber: this.state.currQuestionNumber + 1});
        this.setState({question1ans: answerSubmitted});
        console.log(this.state);
      }

    // adding redux here to change filters properties 
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        console.log("will be handling change here");
        console.log(event.target.value);
    }

    render() {
        return(
            <div className="formQuestion" id="question1">
                  <h1 className="question" >Why do you want this funding?</h1>
                  <img src={kala} alt="Kala the squid"/>
                  <h2>Select all options that apply to you.</h2>
                  {this.q1Options.map(answer => (
                      <div key={answer} onChange={this.handleChange}>
                          <input className="answer" type="checkbox" id={answer} value={answer} key={answer}></input>
                          <label htmlFor={answer}>{answer}</label>
                      </div>
                  ))}
                  <br></br>
                </div>
        )
    }
}
