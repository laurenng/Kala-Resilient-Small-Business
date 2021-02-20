import React from 'react';
import './fundingForm.css';
import kala from './kala_orange_solid 3.svg';

export default class Question2 extends React.Component<any, any> {

    q2Options = ["Immediately", "Within 1-2 months", "Within the next year", "Anytime"];

    // adding redux here to change filters properties 
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        console.log("will be handling change here");
        console.log(event.target.value);
    }

    render() {
        return(
            <div className="formQuestion" id="question2">
                <h1 className="question" >Now, let's talk about money.</h1>
                <img src={kala} alt="Kala the squid"/>
                <h2>When do you need this funding by?</h2>
                {this.q2Options.map(answer => (
                    <div key={answer}>
                        <input className="answer" type="radio" name="question2" id={answer} value={answer} key={answer}></input>
                        <label htmlFor={answer}>{answer}</label>
                    </div>
                ))}
            </div>
        )
    }
}
