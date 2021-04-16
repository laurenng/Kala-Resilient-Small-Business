import React from 'react';
import './category.css';
import {createResource} from './createResource';

/**
Creates the COVID Support page of the library with pertinent resources
*/
class CovidSupport extends React.Component<any> {
  componentDidMount() {
    window.scrollTo(0, 0);
  };
  render() {
    return (
        <main>
          <h4>If your business is struggling to stay open due to COVID-19, you need help moving online,
                or facing any other complications as a result of the pandemic, the following resources are available. </h4>
                <div className="resourceContainer">
          {createResource("General COVID-19 Resources from Federal Government", "https://covid-sb.org/", "covid-sb.org")}
          {createResource("Small Business Administration COVID Relief Options", "https://www.sba.gov/funding-programs/loans/coronavirus-relief-options", "sba.gov")}
          {createResource("COVID-19 Small Business Resources from Washington State","http://startup.choosewashingtonstate.com/links/crisis/covid-19-resources/", "startup.choosewashingtonstate.com")}
      </div>
      </main>
    );   
  }
}

export default CovidSupport;