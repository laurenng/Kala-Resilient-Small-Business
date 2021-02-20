import React from 'react';
import './fundingForm.css';
import kala from './kala_orange_solid 3.svg';

export default class Question3 extends React.Component<any, any> {
    
    q3Options = ["Sole proprietorship", "LLC", "Corporation", "Nonprofit", "Other"];

    // adding redux here to change filters properties 
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        console.log("will be handling change here");
        console.log(event.target.value);
    }

    render() {
        return(
            <div className="formQuestion" id="question3">
                <h1 className="question" >What is your business type?</h1>
                <img src={kala} alt="Kala the squid"/>
                <h2>Gimme answer</h2>
                <select id="bizType" name="bizType">
                {this.q3Options.map(answer => (
                    <option value={answer} key={answer}>{answer}</option>
                ))}
                </select>
            </div>
        )
    }
}
