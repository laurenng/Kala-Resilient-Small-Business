import React from 'react';
import './category.css';
import {createResource} from './createResource';

/**
Creates the Language Support page of the library with pertinent resources
*/
class LanguageSupport extends React.Component<any> {
  componentDidMount() {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <main>
          <h4>If you need language support,
                there are multiple organizations that offer free assistance in a multitude of languages
                and come from an array of cultures and backgrounds.</h4>
                <div className="resourceContainer">
          {createResource("List of Support Providers from Range of Languages, Cultures, and Communities", "https://www.smallbizhelpwa.com/resources", "smallbizhelpwa.com")}
          {createResource("SBA Disaster Loan Information in Multiple Languages", "http://www.seattle.gov/office-of-economic-development/covid-19/sba-disaster-loan-assistance", "seattle.gov")}
          {createResource("Change Chrome Language & Translation Features", "https://support.google.com/chrome/answer/173424", "support.google.com")}
          {createResource("Change Firefox Language Settings & Features", "https://support.mozilla.org/en-US/kb/use-firefox-another-language", "support.mozilla.org")}
          </div>
      </main>
    ); 
  }
}

export default LanguageSupport;