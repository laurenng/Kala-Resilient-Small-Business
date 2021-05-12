/**
The welcome to questionaire introduction to give users insights 
into what this form is used for. 
*/
import './fundingForm.css';
import kala from '../assets/kala_orange_solid 3.svg';

const WelcomeQuestion = () => {
    return(
        <div id="welcomeDiv">
            <h1 id="welcomeMsg">Matching Questionaire</h1>
            <div className="question questionBubble" >
                <p>This survey will help you see <strong>what funding and assistance best match your business.</strong></p>
                <p>The more information you provide, the more accurate the results will be. We respect your privacy,
                so all of these questions are optional.</p>
                <p>Your information will not be saved or shared unless you save it to a user profile. 
                This search tool is made specifically for existing Washington state small businesses.</p>
            </div>
            {/* <img src={kala} alt="Kala the squid"/> */}
            <br></br>
        </div>  
    )
}

export default WelcomeQuestion;