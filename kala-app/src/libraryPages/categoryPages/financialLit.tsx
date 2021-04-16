import React from 'react';
import './category.css';
import {createResource} from './createResource';

/**
Creates the Financial Literacy page of the library with pertinent resources
*/
class FinancialLiteracy extends React.Component<any> {
    componentDidMount() {
      window.scrollTo(0, 0);
      // window.scrollTo({
      //   top: 0,
      //   behavior: "smooth"
      // });
      // document.querySelector('body').scrollTo(0,0);
      console.log("Height: " + window.innerHeight + " Width: " + window.innerWidth);
    };
    render() {
      
      return (
          <main>
            <h4>If you’re looking to improve your financial literacy and educate yourself in business related topics here’s
               a list of free online courses, modules, and resources for developing your business and understanding 
               financial information.</h4>
               <div className="resourceContainer">
                {createResource("Financing Your Business Learning Module from Small Business Administration", "https://learn.sba.gov/learning-center-launch/learning-center-financing-your-business", "learn.sba.gov")}
                {createResource("Small Business Development Center Financial Management Online Course", "https://wsbdc.ecenterdirect.com/events/99271365", "wsbdc.com")}
                {createResource("Marketing Tips from Office of Minority and Women Business Enterprises", "https://omwbe.wa.gov/resources-small-businesses/more-resources/marketing-tips", "omwbe.wa.gov")}
                {createResource("Resources for Starting and Building Your Business from StartUpWashington", "http://startup.choosewashingtonstate.com/", "startup.choosewashingtonstate.com")}
                {createResource("General Business Help and Financial Literacy from the Seattle Public Library", "https://www.spl.org/programs-and-services/business", "spl.org")}
            </div>
        </main>
      );
        
    }
}

export default FinancialLiteracy;