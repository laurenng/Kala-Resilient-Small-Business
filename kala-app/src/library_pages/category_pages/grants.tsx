import React from 'react';
import './category.css';
import {createResource} from './createResource';
import Arrow from '../library_assets/Arrow 1.png';


class Grants extends React.Component<any> {
  goBack(){
    this.props.history.goBack();
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("Mount");
    
  };

    render() {
      return (
          <main>
            <div className="catTitle">
            <img className="backArrow" src={Arrow} alt="Backwards Navigation Arrow" onClick={() => this.goBack()}></img>
              <h1>Grants</h1>
            </div>

            <h4>Grants are disbursed capital/money that does not require repayment. The qualifications may vary depending
                 on the grant and grant provider but these resources will help you figure out which grant might be
                  best suited for your business as well as help you prepare for filling out an application.</h4>
            {/* use router for this*/}
            {createResource("Grant Terminology Dictionary", "https://www.grants.gov/web/grants/learn-grants/grant-terminology.html", "grants.gov")}
        </main>
      );
        
    }
}

export default Grants;