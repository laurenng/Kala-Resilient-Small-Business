/**
sets up with react router 
*/

import React from 'react';
import './App.css';

// pages that are linked in navbar
import SearchHome from './searchPages/searchHome';
import LibraryHome from './libraryPages/libraryHome';
import Landing from './mainPages/Landing';
import ProfileHome from './mainPages/profileHome';
import FundingExpand from './searchPages/fundExpanded';
import TaExpand from './searchPages/TaExpanded';
import NotFoundPage from './mainPages/NotFoundPage';

// React-Router 
import {Route, Router, Switch} from 'react-router-dom' // fixed compenent not rendering got rid of browserRouter

// material-ui
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import history from "./customHistory";

//fundingform
import FundingForm from './fundingForm/fundingForm';

//hamburgerMenu
import PersistentDrawerRight from './appBar';

import commerceLogo from './assets/Logo__Standard_RGB.png';


class App extends React.Component<any> {
  
  // example material-ui code
  Copyright = () => {
    return (
      <footer id="copyrightFooter">
        <img src={commerceLogo} alt="WA Commerce Department logo" height='30px' width='auto'/>
        <Typography variant="body2" color="textSecondary" align="left">
          {/* {'Copyright © '} {' '} 
          {new Date().getFullYear()}
          {'.'}*/}
          
          Designed and developed by <Link color="inherit" href="https://ischool.uw.edu/capstone">Team kala</Link> for a WA Dept. Commerce + UW project. 
          
        </Typography>
      </footer>
    );
  }

  render() {
    return (
      <div>
        {/* Hamburger Menu*/}
        <PersistentDrawerRight />
        <Router history={history}>
  
        <div className="page">
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/search" component={SearchHome} />
                <Route exact path="/library" component={LibraryHome} />
                <Route exact path="/profile" component={ProfileHome} />
                <Route exact path="/expandFunds" component={FundingExpand} />
                <Route exact path="/expandTA" component={TaExpand} />
                <Route exact path="/form" component={FundingForm} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </div>
      </Router>

      
      
      {/* Copyright footer */}
      {this.Copyright()}
    </div> 
    );
  }
}


export default App;