import React from 'react';
import './App.css';

// the nav bar 
import Navbar from './Navbar/Navbar';

// pages that are linked in navbar
import SearchHome from './search-pages/searchHome';
import LibraryHome from './library_pages/libraryHome';
import Landing from './Landing';
import ProfileHome from './profileHome';
import FundingExpand from './search-pages/fundExpanded';

// React-Router 
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

// material-ui
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

//fundingform
import FundingForm from './funding_form/fundingForm';

class App extends React.Component<any> {

  // example material-ui code
  Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://ischool.uw.edu/capstone">
          UW Capstone Team kala
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  render() {
    return (
      <div>

        <Router>
        {/* Nav bar display */}
        <Navbar />
        {/* React-Router component that dictates which component to go to */}
        <div className="page">
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/search" component={SearchHome} />
                <Route exact path="/library" component={LibraryHome} />
                <Route exact path="/profile" component={ProfileHome} />
                <Route exact path="/profile" component={FundingExpand} />
            </Switch>
        </div>
      </Router>

      {/* <FundingForm /> */}
      {/* Copyright footer */}
      {this.Copyright()}

      </div>
    );
  }
}


export default App;