import React from 'react';
import './category.css';
import {createResource} from './createResource';
import Arrow from '../library_assets/Arrow 1.png';

class LanguageSupport extends React.Component<any> {
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
              <h1>Language Support</h1>
            </div>
            <h4>If you need language support,
                 there are multiple organizations that offer free assistance in a multitude of languages
                  and come from an array of cultures and backgrounds.</h4>
            {/* use router for this*/}
            {createResource("List of Support Providers from Range of Languages, Cultures, and Communities", "https://www.smallbizhelpwa.com/resources", "smallbizhelpwa.com")}
            {createResource("SBA Disaster Loan Information in Multiple Languages", "http://www.seattle.gov/office-of-economic-development/covid-19/sba-disaster-loan-assistance", "seattle.gov")}
        </main>
      );
        
    }
}

export default LanguageSupport;