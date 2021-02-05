import React from 'react';
import './App.css';

// the nav bar 
import Navbar from './Navbar/Navbar';

// pages that are linked in navbar
import SearchHome from './search-pages/searchHome';
import LibraryHome from './library_pages/libraryHome';

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
                <Route exact path="/search" component={SearchHome} />
                <Route exact path="/library" component={LibraryHome} />
            </Switch>
        </div>
      </Router>
      </div>
    );
  }
}


export default App;