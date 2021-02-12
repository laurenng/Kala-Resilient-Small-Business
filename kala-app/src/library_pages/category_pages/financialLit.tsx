import React from 'react';
import './category.css';
import Arrow from '../library_assets/Arrow 1.png';

class FinancialLiteracy extends React.Component<any> {
    goBack(){
      this.props.history.goBack();
    };

    componentDidMount() {
      window.scrollTo(0, 0);
    };
    render() {
      
      return (
          <main>
            <div>
            <div className="catTitle">
              <img className="backArrow" src={Arrow} alt="Backwards Navigation Arrow" onClick={() => this.goBack()}></img>
              <h1>Financial Literacy and Education</h1>
            </div>
            <h4>If you’re looking to improve your financial literacy and educate yourself in business related topics here’s
               a list of free online courses, modules, and resources for developing your business and understanding 
               financial information.</h4>

               {this.createResource("Financing Your Business Learning Module from Small Business Administration", "https://learn.sba.gov/learning-center-launch/learning-center-financing-your-business", "learn.sba.gov")}
                {this.createResource("Small Business Development Center Financial Management Online Course", "https://wsbdc.ecenterdirect.com/events/99271365", "wsbdc.com")}
                {this.createResource("Marketing Tips from Office of Minority and Women Business Enterprises", "https://omwbe.wa.gov/resources-small-businesses/more-resources/marketing-tips", "omwbe.wa.gov")}
                {this.createResource("Resources for Starting and Building Your Business from StartUpWashington", "http://startup.choosewashingtonstate.com/", "startup.choosewashingtonstate.com")}
                {this.createResource("General Business Help and Financial Literacy from the Seattle Public Library", "https://www.spl.org/programs-and-services/business", "spl.org")}
            
            
            
            
            </div>
            
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

export default FinancialLiteracy;