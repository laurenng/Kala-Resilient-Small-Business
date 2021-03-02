import React from 'react';
import './App.css';

// pages that are linked in navbar
import SearchHome from './search-pages/searchHome';
import LibraryHome from './library_pages/libraryHome';
import Landing from './Landing';
import ProfileHome from './profileHome';
import FundingExpand from './search-pages/fundExpanded';
import TaExpand from './search-pages/TaExpanded';
import NotFoundPage from './NotFoundPage';

// React-Router 
import {Route, Router, Switch} from 'react-router-dom' // fixed compenent not rendering got rid of browserRouter

// material-ui
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import history from "./customHistory";

//fundingform
import FundingForm from './funding_form/fundingForm';

//hamburgerMenu
import PersistentDrawerLeft from './testAppBar';



class App extends React.Component<any> {
  
  // example material-ui code
  Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {/* {'Copyright © '} {' '} 
        {new Date().getFullYear()}
        {'.'}*/}
        
        Designed and developed by <Link color="inherit" href="https://ischool.uw.edu/capstone">Team kala</Link> for a WA Dept. Commerce + UW project. 
        
      </Typography>
    );
  }

  render() {
    return (
      <div>
        <PersistentDrawerLeft /> {/* Hamburger Menu*/}
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