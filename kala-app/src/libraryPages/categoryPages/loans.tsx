import React from 'react';
import './category.css';
import {createResource} from './createResource';

/**
Creates the Loans page of the library with pertinent resources
*/
class Loans extends React.Component<any> {
    componentDidMount() {
      window.scrollTo(0, 0);
    };

    render() {
      return (
        <main>
            <h4>Loans are disbursed capital/money lent to a business and are expected to be repaid at a future date
               (in special cases loans like the PPP are forgivable and therefore do not require repayment). 
               The interest, timeline, and qualifications vary depending on the loan and loan provider but 
               these resources will help you figure out which loan might be best suited for your business as
                well as help you prepare for filling out an application.</h4>
                <div className="resourceContainer">
            {createResource("Getting a Business Loan Instructional Video Series", "http://wsbdc.org/training/instructional-video-series/", "wsbdc.org")}
              </div>
        </main>
      );
        
    }
}

export default Loans;