import {createDropDownQuestion, createMultiselectQuestion, createRadioQuestion} from './createQuestion';
import React from 'react';
import './fundingForm.css';
import kala from './kala_orange_solid 3.svg';

class FundingForm extends React.Component<any, any> {
    constructor(props: any) {
      super(props)
      this.state = {
        currQuestionNumber: 0,
        languageAns: [],
        fundingReasonAns: [],
        bizIndustryAns: "",
        bizTypeAns: "",
        bizDateAns: ""
      };
      this.handleQ1 = this.handleQ1.bind(this);
      this.handleQ2 = this.handleQ2.bind(this);
      this.handleQ3 = this.handleQ3.bind(this);
      this.handleSkip = this.handleSkip.bind(this);
      this.handleBackBtn = this.handleBackBtn.bind(this);
      this.displayQuestion();
    }

    handleBackBtn = (event: { target: any; }) => {
      this.setState({currQuestionNumber: this.state.currQuestionNumber - 1}, () => {
        this.displayQuestion();
      });
    }

    handleSkip = (event: { target: any; }) => {
      this.setState({currQuestionNumber: this.state.currQuestionNumber + 1}, () => {
        this.displayQuestion();
      });
    }

    // question is stored in state
    // questionNumber: {question: string, questionAnswer: string[]}
    // handlers should follow same format, just change checked with selected, etc.
    handleQ1 = (event: { target: any; }) => {
      const answerInputs = document.querySelectorAll(".answer") as NodeListOf<HTMLInputElement>;;
      const answerSubmitted: string[] = [];
      answerInputs.forEach(answer => {
        if (answer.checked == true) {
          answerSubmitted.push(answer.value);
        }
      });

      this.setState({currQuestionNumber: this.state.currQuestionNumber + 1, languageAns: answerSubmitted}, () => {
        this.displayQuestion();
      });
    }

    handleQ2 = (event: { target: any; }) => {
      const answerInputs = document.querySelectorAll(".answer") as NodeListOf<HTMLInputElement>;
      const answerSubmitted: string[] = [];
      answerInputs.forEach(answer => {
        if (answer.checked == true) {
          answerSubmitted.push(answer.value);
        }
      });
 
      this.setState({currQuestionNumber: this.state.currQuestionNumber + 1, fundingReasonAns: answerSubmitted}, () => {
        this.displayQuestion();
      });
    }

    handleQ3 = (event: { target: any; }) => {
      const bizType = document.getElementById("bizType") as HTMLSelectElement;
      const bizIndustry = document.getElementById("bizIndustry") as HTMLSelectElement;
      const bizDate = document.getElementById("bizDate") as HTMLInputElement;
      const bizTypeAns = bizType.value;
      const bizIndustryAns = bizIndustry.value;
      const bizDateAns = bizDate.value;

      this.setState({currQuestionNumber: this.state.currQuestionNumber + 1, bizIndustryAns: bizIndustryAns ,
      bizTypeAns: bizTypeAns, bizDateAns: bizDateAns}, () => {
        this.displayQuestion();
      });
    }

    beginForm = () => {
      document.getElementById("welcomeMsg")?.classList.add("hidden");
          document.getElementById("beginForm")?.classList.add("hidden");
          document.getElementById("welcomeDiv")?.classList.add("hidden");
          document.getElementById("progressBar")?.classList.add("active");
        this.setState({currQuestionNumber: this.state.currQuestionNumber + 1}, () => {
          this.displayQuestion();
      });    
    }

    q1Options = ["Spanish", "Mandarin", "Vietnamese", "Russian", " Swahili", "French", "ASL", "Laotian", "Thai", "English"];
    q2Options = ["Buy a building/property", "Insurance", "Make building improvements", "Marketing", "Pandemic-related expenses",
  "Pay employees", "Purchase machinery or equipment", "Purchase inventory", "Refinance", "Rent/Utility Bills"];
    q3BizTypeOptions = ["Sole proprietorship", "LLC", "Corporation", "Nonprofit", "Other"];
    q3IndustryOptions = ["Agriculture", "Construction", "Creative", "Education", "Finance", "Food", "Health Services",
    "Information Technology", "Leisure & Hospitality", "Manufacturing", "Professional & Business Services",
    "Real Estate", "Retail", "Trade, Transportation, & Utilities", "Other"]


    welcomeQuestion = <div id="welcomeDiv">
                        <h1 id="welcomeMsg">Matching Questionaire</h1>
                        <div className="question" id="welcomeQuestion">
                            <p>Hi! I’m kala the squid. This should take about 10 minutes.</p>
                            <p>Answering these questions will help you see <strong>what funding and assistance best match your business.</strong></p>
                            <p>The more information you provide, the more accurate the results will be. We respect your privacy,
                            so most of these questions are optional.</p>
                            <p>Your information will not be saved or shared unless you save it to a user profile. 
                            This search tool is made specifically for existing Washington state small businesses.</p>
                        </div>
                        <img src={kala} alt="Kala the squid"/>
                        <br></br>
                        <div className="controls">
                            <button onClick={this.beginForm} type="button" id="beginForm">Begin</button>
                        </div>
                      </div>          

    questionOne = <div className="formQuestion" id="question1">
                    <div className="questionBubble">
                    <h4 className="question">What language(s) would you prefer to use when speaking to assistance?</h4>
                    <h5 className="questionInstructions">Select all that apply.</h5>
                  </div>
                  <div className="sideByside">
                    <img src={kala} alt="Kala the squid"/>
                    <div className="checkBoxList">
                      {this.q1Options.map(answer => (
                          <div>
                              <input className="answer" type="checkbox" id={answer} value={answer} key={answer}></input>
                              <label htmlFor={answer}>{answer}</label>
                          </div>
                      ))}
                    </div>
                  </div>
                  <br></br>
                  <div className="controls">
                      <button className="skipBtn" onClick={this.handleSkip} type="button">Skip</button>
                      <button className="backBtn" onClick={this.handleBackBtn} type="button">Back</button>
                      <button className="nextBtn" onClick={this.handleQ1} type="button">Next</button>
                    </div>
                </div>
    
    questionTwo = <div className="formQuestion" id="question2">
                    <div className="questionBubble">
                    <h4 className="question">Let’s start with why you need funding.</h4>
                    <h5 className="questionInstructions">Select all that apply.</h5>
                  </div>
                  
                  <div className="sideByside">
                    <img src={kala} alt="Kala the squid"/>
                    <div className="checkBoxList">
                      {this.q2Options.map(answer => (
                          <div>
                              <input className="answer" type="checkbox" id={answer} value={answer} key={answer}></input>
                              <label htmlFor={answer}>{answer}</label>
                          </div>
                      ))}
                    </div>
                  </div>
                  <br></br>
                  <div className="controls">
                      <button className="skipBtn" onClick={this.handleSkip} type="button">Skip</button>
                      <button className="backBtn" onClick={this.handleBackBtn} type="button">Back</button>
                      <button className="nextBtn" onClick={this.handleQ2} type="button">Next</button>
                    </div>
                </div>

    questionThree = <div className="formQuestion" id="question3">
                    <div className="questionBubble">
                      <h4 className="question">Tell me about your business.</h4>
                    </div>
                    
                      <div className="sideByside">
                        <img src={kala} alt="Kala the squid"/>
                        
                        <div className="dropDownList">
                          <h3>Business industry</h3>
                          <select id="bizIndustry" name="bizIndustry">
                            {this.q3IndustryOptions.map(answer => (
                                <option value={answer} key={answer}>{answer}</option>
                            ))}
                          </select>

                          <h3>Business type</h3>
                          <select id="bizType" name="bizType">
                            {this.q3BizTypeOptions.map(answer => (
                                <option value={answer} key={answer}>{answer}</option>
                            ))}
                          </select>

                          <h3>When did you start your business?</h3>
                          <input type="month" id="bizDate" name="bizDate"></input>
                        </div>
                      </div>

                      <br></br>
                      <div className="controls">
                        {/* skip should only change questionnumber in state */}
                        <button className="skipBtn" onClick={this.handleSkip} type="button">Skip</button>
                        <button className="backBtn" onClick={this.handleBackBtn} type="button">Back</button>
                        <button className="nextBtn" onClick={this.handleQ3} type="button">Next</button>
                      </div>
                    </div>

    currQuestion: JSX.Element = <div></div>;
    displayQuestion = () => {
      let currQuestionNumber = this.state.currQuestionNumber;
      console.log(this.state);
      console.log(currQuestionNumber);
      switch (currQuestionNumber) {
        case 0:
          this.currQuestion = this.welcomeQuestion; // need edge case for going back and progress bar still there, need prevState
          break;
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
          this.currQuestion  = <p>You've completed all our questions! Are you sure you want to submit your answers?</p>;
          document.getElementById("submitBtn")?.classList.remove("hidden");
      }
      this.fillProgress();
      this.forceUpdate(); // had to have this in order for the component to rerender on state change - look into this more
    }

    fillProgress = () => {
      const progressDots = document.querySelectorAll(".dot") as NodeListOf<HTMLInputElement>;
      const currQuestion = this.state.currQuestionNumber;
      const prevQuestion = 0;
      if (currQuestion > 0 && currQuestion < 4) { 
        progressDots[currQuestion-1].classList.add("currDot");
      } else { // something to do with redux probably to get prevState
        // progressDots[currQuestion-1].classList.remove("currDot");
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

            {/* {this.welcomeQuestion} */}

            <form id="fundingForm">
                {/* Current idea to make the form dynamic: have state that tracks progress of questions, have if/else or switch statements to toggle which question is on display at the moment */}
                {/* Handlers should be assigned in createQuestion.tsx */}
                {/* Should these functions be made private methods instead? */}
                
                
                
                
                
                {/* {this.displayQuestion} */}
                {this.currQuestion}

                

                {/* Test code */}
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
    