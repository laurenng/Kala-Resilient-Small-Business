import React from 'react';
import './category.css';
import Arrow from '../library_assets/Arrow 1.png';

class Loans extends React.Component<any> {
    goBack(){
      this.props.history.goBack();
    };

    componentDidMount() {
      window.scrollTo(0, 0);
    };
    render() {
      return (
          <main>
            <div className="catTitle">
              <img className="backArrow" src={Arrow} alt="Backwards Navigation Arrow" onClick={() => this.goBack()}></img>
              <h1>Loans</h1>
            </div>
            <h4>Loans are disbursed capital/money lent to a business and are expected to be repaid at a future date
               (in special cases loans like the PPP are forgivable and therefore do not require repayment). 
               The interest, timeline, and qualifications vary depending on the loan and loan provider but 
               these resources will help you figure out which loan might be best suited for your business as
                well as help you prepare for filling out an application.</h4>
            {/* use router for this*/}
            {this.createResource("Getting a Business Loan Instructional Video Series", "http://wsbdc.org/training/instructional-video-series/", "wsbdc.org")}
        </main>
      );
        
    }
    private createResource = (resourceName: string, resourceURL: string, resourceDesc: string) => {
      return (
          <div className="resource">
            <h2>{resourceName}</h2>
            <a href={resourceURL} target="_blank"><h3>{resourceDesc}</h3></a>
          </div>
      );
    }
}

export default Loans;