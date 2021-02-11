import React from 'react';
import './category.css';
import Arrow from '../library_assets/Arrow 1.png';

class CovidSupport extends React.Component<any> {
    render() {
      return (
          <main>
            <div className="catTitle">
              <img className="backArrow" src={Arrow} alt="Backwards Navigation Arrow"></img>
              <h1>COVID Related Resources</h1>
            </div>
            <h4>If your business is struggling to stay open due to COVID-19, you need help moving online,
                 or facing any other complications as a result of the pandemic, the following resources are available. </h4>
            {/* use router for this*/}
            
        </main>
      );
        
    }
}

export default CovidSupport;