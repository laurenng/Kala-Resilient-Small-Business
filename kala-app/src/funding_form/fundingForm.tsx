import {createDropDownQuestion, createMultiselectQuestion, createRadioQuestion} from './createQuestion';
import React from 'react';

class FundingForm extends React.Component<any> {

    render() {
      
      return (
        <main>
            <p>Progress Bar</p>
            <form>
                {/* Current idea to make the form dynamic: have state that tracks progress of questions, have if/else or switch statements to toggle which question is on display at the moment */}
                {/* Handlers should be assigned in createQuestion.tsx */}
                {/* Should these functions be made private methods instead? */}
                {createMultiselectQuestion("Why do you need funding?", "Select all that apply", ["Payroll", "Rent", "Working Capital"])}
                {createDropDownQuestion("What state do you live in?", "Select one", ["NV", "CA", "WA"])}
                {createRadioQuestion("Do you like squids?", "Answer the question", ["Yes", "No"])}
            </form>
        </main>
      );

    }
}

export default FundingForm;
    