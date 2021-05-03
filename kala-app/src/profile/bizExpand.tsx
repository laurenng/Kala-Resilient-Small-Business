import { connect } from 'react-redux';
import React from 'react';
import './profile.css';
import kala from '../assets/kala_orange_solid 3.svg';

import { updateUser } from '../reduxData/actions';
import AppState, { UserInfo } from '../reduxData/types';
import fetchFromAPI from '../reduxData/fetchFromAPI';
import fundingCard from '../searchPages/components/fundingCard';

interface props {
    currentUser: UserInfo,
    updateUser: (newUser: UserInfo) => void,
}

interface state {
    user: string,
    password: string,
    technicalAssistance: any[],
    fundingOpps: any[]
}

class bizExpand extends React.Component<props, state> {

    constructor(props:any) {
        super(props);
        let name = this.props.currentUser.user.value;
        let number = this.props.currentUser.password.value;
        // setting state to what is dictated in redux (aka storing prev values here)
        this.state = {
            user: name,
            password: number,
            technicalAssistance: [],
            fundingOpps: []
        };
    } 
    
    async componentDidMount() {
        let assistanceLink ="https://8tb0tsfjg2.execute-api.us-west-2.amazonaws.com/rsb/assistance";
        await fetchFromAPI(assistanceLink).then(data => {
          let selectedData = data.filter((type: any, index: number) => { return index < 4 } )
          // console.log(selectedData);
          this.setState({
            technicalAssistance: selectedData
          })
        });

        let fundingLink ="https://8tb0tsfjg2.execute-api.us-west-2.amazonaws.com/rsb/funding";
        await fetchFromAPI(fundingLink).then(data => {
            let selectedData = data.filter((type: any, index: number) => { return index < 4 } )
            this.setState({
                fundingOpps: selectedData
            })
        });

      }

    private handleClick (d: string) {
        console.log(d);
        // this.props.history.push('/expandFunds');
      }

    render() {
        let cards = this.state.fundingOpps.map((d) => {
            return fundingCard({"funding": d}) // <fundingCard funding = {d} />
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        console.log(this.state.technicalAssistance)
        return(
            <div id="bizExpand">
                <h1> Assistance Match</h1>
                <p> Reach out to these businesses to strengthen your business and funding applications. </p>
                <div className="cardDisplay">
                    {cards}
                </div>
                <br></br>

                <h1>Funding Matches</h1>
                <p>These loans and grants are the best suited to your company. Check them out</p>
                <div>
                    <p>DUMBY DATA HERE </p>
                </div>
                <br></br>

                <h2>Your Business Profile</h2>
                <p>These are the details collected from the form you filled out when you added this business to your account. Edit details here. </p>
                <div>
                    <p>DUMBY DATA HERE </p>
                </div>
                <br></br>

            </div>
        );
    }
}

function mapStateToProps(state: AppState) {
    return { 
        currentUser: state.currentUser
    }
}

function mapDispatchToProps(dispatch: any)  {
    return {
        
    }    
} 

export default connect(mapStateToProps, mapDispatchToProps)(bizExpand);