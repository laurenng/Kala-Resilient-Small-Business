import React from 'react';
import './category.css';
import {createResource} from './createResource';

/**
Creates the Grants page of the library with pertinent resources
*/
class Grants extends React.Component<any> {
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("Mount");
    
  };

    render() {
      return (
          <main>
            <h4>Grants are disbursed capital/money that does not require repayment. The qualifications may vary depending
                 on the grant and grant provider but these resources will help you figure out which grant might be
                  best suited for your business as well as help you prepare for filling out an application.</h4>
            {createResource("Grant Terminology Dictionary", "https://www.grants.gov/web/grants/learn-grants/grant-terminology.html", "grants.gov")}
        </main>
      );
        
    }
}

export default Grants;