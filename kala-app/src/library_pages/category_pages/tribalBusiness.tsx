import React from 'react';
import './category.css';
import Arrow from '../library_assets/Arrow 1.png';

class Tribal extends React.Component<any> { 
  
  // componentDidMount() {
  //     window.scrollTo(0, 0);
  //   }

    goBack(){
      this.props.history.goBack();
    } 

    render() {
      return (
          <div>
            <div className="catTitle">
              <img className="backArrow" src={Arrow} alt="Backwards Navigation Arrow" onClick={() => this.goBack()}></img>
              <h1>Tribally Owned Small Businesses</h1>
            </div>
            <h4>We understand that Tribal owned businesses have different needs and processes when it comes to 
                operating as well as receiving funding. Here are some resources that cater specifically to Native Americans.</h4>
            
            {this.createResource("Potlach Fund", "http://www.potlatchfund.org/", "potlatchfund.org")}
            {this.createResource("Small Business Administration (SBA) for Tribes", "https://www.sba.gov/about-sba/sba-locations/headquarters-offices/office-native-american-affairs/office-native-american-affairs-resources", "sba.gov")}
            {this.createResource("First Nations Grantseeking Resources", "https://www.firstnations.org/grantmaking/grantseeker-resources/", "firstnations.org")}
            {this.createResource("PPE Guidelines", "https://ncaiedppeguide.org/", "ncaiedppeguide.org")}
            {this.createResource("Sister Sky Business Management Services", "https://sisterskyinc.com/", "sisterskyinc.com")}
            {this.createResource("WA Department of Commerce Tribal Government COVID-19 Grants & Relief", "https://www.commerce.wa.gov/serving-communities/homelessness/tribal-government-covid-19-emergency-response-grants/", "commerce.wa.gov")}
            {this.createResource("Affiliated Tribes of Northwest Indians Economic Development Corporation (ATNI-EDC)", "https://atniedc.com/", "atniedc.com")}

        </div>
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

export default Tribal;