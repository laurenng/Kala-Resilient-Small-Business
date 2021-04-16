import React from 'react';
import './category.css';
import {createResource} from './createResource';

/**
Creates the Minority Business page of the library with pertinent resources
*/
class MinorityBusiness extends React.Component<any> {

  componentDidMount() {
    window.scrollTo(0, 0);
  };
    render() {
      return (
        <main>
            <h4>If you are a minority, woman, or LGBTQ+ small business owner, then the
               following resources may be useful for supporting your business.</h4>
            <div className="resourceContainer">
            {createResource("Office of Minority and Women Business Enterprise Small Business Assistance", "https://omwbe.wa.gov/small-business-assistance", "omwbe.wa.gov")}
            {createResource("Small Business Administration Business Guide for Minority Businesses", "https://www.sba.gov/business-guide/grow-your-business/get-more-funding", "sba.gov")}
            {createResource("Minority Business Development Agency", "https://www.mbda.gov/", "mbda.gov")}
            </div>
        </main>
      );
        
    }
}

export default MinorityBusiness;