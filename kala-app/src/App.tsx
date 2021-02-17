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
import TaExpand from './search-pages/TaExpanded';

// React-Router 
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

class App extends React.Component<any> {
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
                <Route exact path="/expandFunds" component={FundingExpand} />
                <Route exact path="/expandTA" component={TaExpand} />
            </Switch>
        </div>
      </Router>
      </div>
    );
  }
}


export default App;