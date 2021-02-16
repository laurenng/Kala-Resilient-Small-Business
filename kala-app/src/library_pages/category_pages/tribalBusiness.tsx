import React from 'react';
import './category.css';
import {createResource} from './createResource';
import Arrow from '../library_assets/Arrow 1.png';

class Tribal extends React.Component<any> { 
  
  componentDidMount() {
      window.scrollTo(0, 0);
    }

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
            
            {createResource("Potlach Fund", "http://www.potlatchfund.org/", "potlatchfund.org")}
            {createResource("Small Business Administration (SBA) for Tribes", "https://www.sba.gov/about-sba/sba-locations/headquarters-offices/office-native-american-affairs/office-native-american-affairs-resources", "sba.gov")}
            {createResource("First Nations Grantseeking Resources", "https://www.firstnations.org/grantmaking/grantseeker-resources/", "firstnations.org")}
            {createResource("PPE Guidelines", "https://ncaiedppeguide.org/", "ncaiedppeguide.org")}
            {createResource("Sister Sky Business Management Services", "https://sisterskyinc.com/", "sisterskyinc.com")}
            {createResource("WA Department of Commerce Tribal Government COVID-19 Grants & Relief", "https://www.commerce.wa.gov/serving-communities/homelessness/tribal-government-covid-19-emergency-response-grants/", "commerce.wa.gov")}
            {createResource("Affiliated Tribes of Northwest Indians Economic Development Corporation (ATNI-EDC)", "https://atniedc.com/", "atniedc.com")}

        </div>
      );
        
    }
}

export default Tribal;