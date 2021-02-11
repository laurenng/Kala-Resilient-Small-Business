import React from 'react';
import './category.css';
import Arrow from '../library_assets/Arrow 1.png';

class Grants extends React.Component<any> {
    render() {
      return (
          <main>
            <div className="catTitle">
              <img className="backArrow" src={Arrow} alt="Backwards Navigation Arrow"></img>
              <h1>Grants</h1>
            </div>
            <h4>Grants are disbursed capital/money that does not require repayment. The qualifications may vary depending
                 on the grant and grant provider but these resources will help you figure out which grant might be
                  best suited for your business as well as help you prepare for filling out an application.</h4>
            {/* use router for this*/}
            
        </main>
      );
        
    }
}

export default Grants;