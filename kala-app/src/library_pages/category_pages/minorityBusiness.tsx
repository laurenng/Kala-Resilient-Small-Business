import React from 'react';
import './category.css';
import {createResource} from './createResource';
import Arrow from '../library_assets/Arrow 1.png';

class MinorityBusiness extends React.Component<any> {
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
              <h1>Minority Owned Small Business</h1>
            </div>
            <h4>If you are a minority, woman, or LGBTQ+ small business owner, then the
               following resources may be useful for supporting your business.</h4>
            {/* use router for this*/}
            {createResource("Office of Minority and Women Business Enterprise Small Business Assistance", "https://omwbe.wa.gov/small-business-assistance", "omwbe.wa.gov")}
            {createResource("Small Business Administration Business Guide for Minority Businesses", "https://www.sba.gov/business-guide/grow-your-business/get-more-funding", "sba.gov")}
            {createResource("Minority Business Development Agency", "https://www.mbda.gov/", "mbda.gov")}
        </main>
      );
        
    }
}

export default MinorityBusiness;