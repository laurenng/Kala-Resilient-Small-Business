import React from 'react';
import './libraryStyle.css';
import kala from './library_assets/kala_black_solid_bg.png';
import Arrow from './library_assets/Arrow 1.png';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Loans from './category_pages/loans';
import Tribal from './category_pages/tribalBusiness';
import Categories from './categories';
import { Link } from "react-router-dom";
import Library from './category_pages/library';
import Grants from './category_pages/grants';
import MinorityBusiness from './category_pages/minorityBusiness';
import FinancialLiteracy from './category_pages/financialLit';
import LanguageSupport from './category_pages/langSupport';
import CovidSupport from './category_pages/covidSupport';
import AdditionalSupport from './category_pages/additionalSupport';
import { createBrowserHistory } from "history";

import {withRouter} from 'react-router';
// useHistory?? https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router

class LibraryHome extends React.Component<any> {
    render() {
      
      return (
          <main>
            {/* <h1>Library</h1>
            <p>In this library you can find resources to guide you as you apply for funding.</p> */}

            {/* {this.createCategory("Tribally Owned Small Businesses", "/library/tribally-owned-small-businesses")}
            {this.createCategory("Loans", "/library/loans")} */}
              {/* forceRefresh={true} */}
            {/* Problem, when a library page is manually refreshed the component does not load/reload might be history problem */}
            <div className="translatorBtn">Need a translator?</div>
            <Router basename="/library"> 
            

              <div className="libraryContents">
                  <Switch>
                      <Route exact path="/tribally-owned-small-businesses" component={Tribal}/>
                      <Route exact path="/minority-owned-small-businesses" component={MinorityBusiness}/>
                      <Route exact path="/loans" component={Loans}/>
                      <Route exact path="/grants" component={Grants}/>
                      <Route exact path="/financial-literacy-and-education" component={FinancialLiteracy}/>
                      <Route exact path="/language-support" component={LanguageSupport}/>
                      <Route exact path="/covid-resources" component={CovidSupport}/>
                      <Route exact path="/additional-support" component={AdditionalSupport}/>
                      <Route exact path="/" component={Library}/>
                  </Switch>
              </div>

              {/* <Categories /> */}
              
            </Router>
          </main>
      );
        
    }

    // with functions and any variables, you need to specify types (ie: string, any, boolean, int)
    // private createCategory = (categoryName: string, categoryURL: string) => {
    //     return (
    //         <div className="categoryContainer">
    //           <Link to={categoryURL}>
    //             <img className="catIcon" src={kala} alt="Category Icon"></img>
    //             <h2>{categoryName}</h2>
    //             <img className="navArrow" src={Arrow} alt="Navigation Arrow"></img>
    //           </Link>
    //         </div>
    //     );
    // }
}
    
export default LibraryHome; 