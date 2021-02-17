// import React from 'react';
// import './searchStyle.css';

// // properties that belong to SearchHome
// interface prop {
// }

// // states that belong to SearchHome
// interface state {
//   technicalAssistance: any[],
// }

// class TaRect extends React.Component<prop, state> {
//     constructor(props: prop, state: state){
//       super(props);
//       this.state = {
//         technicalAssistance: []
//       };
//     }

//     render() {
//       // map through every technical assistance to display all
//       let displayContent = this.state.technicalAssistance.map((d, i) => {
//         return(
//           <div key={d.id}>
//             {this.individualRect(i) }
//           </div>
//         )
//       })
      
//       return (
//           <div>
//             {displayContent}
//           </div>
//       );
//     }

//     private individualRect = (num: number) => {
//       let d = this.state.technicalAssistance[num];
//       console.log(d);
//       return(
//         <div className="fundBox">
//             <h1>{d.name}</h1>
//             <h3 className="fundingFont">{d.description}</h3>
//             <div className="moreDetailsBox">
//                 <p>website: {d.website}</p>
//                 <p>phone: {d.phone}</p>
//                 <p>email: {d.email}</p>
//             </div>
//         </div>
//       )
//     }

//     async componentDidMount() {
//       let ta = require('../testData/testTA.json');
//       this.setState({
//         technicalAssistance: ta
//       })
//     }
// }
    
// export default TaRect; 

import React from 'react';
import './searchStyle.css';
import { RouteComponentProps, withRouter } from 'react-router'; 
import { updateTA } from "../redux-data/actions";
import { connect } from "react-redux";
import { AppState, TA } from "../redux-data/types";

interface props extends RouteComponentProps<any> {
  /* other props for ChildComponent */
  updateTA: (TA: TA) => void;
}

// states that belong to SearchHome
interface state {
  technicalAssistance: any[],
}

class TaRect extends React.Component<props, state> {
    constructor(props: props, state: state){
      super(props);
      this.state = {
        technicalAssistance: []
      };
    }

    render() {
      // map through every technical assistance to display all
      let displayContent = this.state.technicalAssistance.map((d, i) => {
        return(
          <div key = {d.id}>
            {this.individualRect(i)}
          </div>
        )
      })
      
      return (
          <div>
            {displayContent}
          </div>
      );
    }

    private individualRect = (num: number) => {
      let d = this.state.technicalAssistance[num];
      console.log(d);
      return(
        <div className="fundBox" onClick={() => this.handleClick(d)}>
            <h1>{d.name}</h1>
            <h3 className="fundingFont">{d.description}</h3>
            <div className="moreDetailsBox">
                <p>website: {d.website}</p>
                <p>phone: {d.phone}</p>
                <p>email: {d.email}</p>
            </div>
        </div>
      )
    }

    handleClick (d: TA) {
      console.log(d);
      this.props.history.push('/expandTA');
      this.props.updateTA(d);
    }

    async componentDidMount() {
      let ta = require('../testData/testTA.json');
      this.setState({
        technicalAssistance: ta
      })
    }
}

function mapStateToProps(state: AppState) {
  return { }
}

function mapDispatchToProps(dispatch: any)  {
  return {
    updateTA: ( TA: TA ) => dispatch(updateTA(TA))
  }    
}
    
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TaRect));