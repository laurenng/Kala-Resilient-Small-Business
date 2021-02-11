import React from 'react';
import './category.css';
import Arrow from '../library_assets/Arrow 1.png';

class FinancialLiteracy extends React.Component<any> {
    render() {
      return (
          <main>
            <div className="catTitle">
              <img className="backArrow" src={Arrow} alt="Backwards Navigation Arrow"></img>
              <h1>Financial Literacy and Education</h1>
            </div>
            <h4>If you’re looking to improve your financial literacy and educate yourself in business related topics here’s
                 a list of free online courses, modules, and resources for developing your business and understanding
                  financial information.</h4>
            {/* use router for this*/}
            
        </main>
      );
        
    }
}

export default FinancialLiteracy;