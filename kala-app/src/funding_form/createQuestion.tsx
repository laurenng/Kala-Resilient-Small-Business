import kala from './kala_orange_solid 3.svg';
import './fundingForm.css';
// Need onChange Handlers

export const createMultiselectQuestion = (question: string, questionInstruction: string, answerOptions: string[]) => {
    return(
        <div className="formQuestion">
            <h1 className="question">{question}</h1>
            <img src={kala} alt="Kala the squid"/>
            <h2>{questionInstruction}</h2>
            {answerOptions.map(answer => (
                <div>
                    <input type="checkbox" id={answer} value={answer}></input>
                    <label htmlFor={answer}>{answer}</label>
                </div>
            ))}
        </div>
    )
}

export const createRadioQuestion = (question: string, questionInstruction: string, answerOptions: string[]) => {
    return(
        <div className="formQuestion">
            <h1 className="question">{question}</h1>
            <img src={kala} alt="Kala the squid"/>
            <h2>{questionInstruction}</h2>
            {answerOptions.map(answer => (
                <div>
                    <input type="radio" id={answer} value={answer}></input>
                    <label htmlFor={answer}>{answer}</label>
                </div>
            ))}
        </div>
    )
}

export const createDropDownQuestion = (question: string, questionInstruction: string, answerOptions: string[]) =>{
    return(
        <div className="formQuestion">
            <h1 className="question">{question}</h1>
            <img src={kala} alt="Kala the squid"/>
            <h2>{questionInstruction}</h2>
            {/* <label htmlFor={question}>{questionInstruction}</label> */}
            {/* <br></br> */}
            <select id={question} name={question}>
            {answerOptions.map(answer => (
                <option value={answer}>{answer}</option>
            ))}
            </select>
        </div>
    )
}