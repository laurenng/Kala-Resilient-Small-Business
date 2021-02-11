import React from 'react';
import './category.css';
import Arrow from '../library_assets/Arrow 1.png';

class MinorityBusiness extends React.Component<any> {
    render() {
      return (
          <main>
            <div className="catTitle">
              <img className="backArrow" src={Arrow} alt="Backwards Navigation Arrow"></img>
              <h1>Minority Owned Small Business</h1>
            </div>
            <h4></h4>
            {/* use router for this*/}
            
        </main>
      );
        
    }
}

export default MinorityBusiness;