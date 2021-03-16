/**
Creates the business question component with forms for users to input their
business industry, type and date. Data is temporarily saved to redux 
*/
import React from 'react';
import './category.css';
import {createResource} from './createResource';

class AdditionalSupport extends React.Component<any> {
  componentDidMount() {
    window.scrollTo(0, 0);
  };
  render() {
    return (
        <main>
          <h4>If you need technical assistance or one on one help with receiving funding or other business help,
                there are multiple organizations that offer free assistance in a multitude of languages
                and come from an array of cultures and backgrounds.</h4>
          {createResource("Seattle Public Library List of Organizations Offering Help to Small Businesses", "https://www.spl.org/programs-and-services/business/business-resources/business-assistance-organizations", "spl.org")}
          {createResource("Seattle Office of Economic Development Small Business Support", "https://www.seattle.gov/office-of-economic-development/small-business", "seattle.gov")}
          {createResource("Technical Assistance and Small Business Support Provider List", "https://www.smallbizhelpwa.com/resources", "smallbizhelpwa.com")}
          {createResource("Small Business Resiliency Assistance", "http://startup.choosewashingtonstate.com/small-business-resiliency-assistance/", "startup.choosewashingtonstate.com")}
          {createResource("Affordable Housing, Tax Credits, and Technical Assistance from the National Development Council", "https://ndconline.org/", "ndconline.org")}
          {createResource("Business Guidance, Licensing, and Registration Provider", "https://www.business.wa.gov/", "business.wa.gov")}
      </main>
    );
        
    }
}

export default AdditionalSupport;