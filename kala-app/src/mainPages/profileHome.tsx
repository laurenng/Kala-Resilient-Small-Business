/**
The profile page component that should display lists of funding for the user. 
*/

import React from 'react';
import { Redirect } from 'react-router-dom';

// properties that belong to SearchHome
interface searchProps {
  
}

// states that belong to SearchHome
interface searchState {
}

class SearchHome extends React.Component<searchProps, searchState> {
  isLogin = false;

    render() {
      this.isLogin = (sessionStorage.getItem('fundingToken') !== null)
      
      if (!this.isLogin) {
        console.log("redirect to login")
        return <Redirect to="/login" />;
      }


      return (
          <div>
            <h1>Profile Page</h1>
            <p>say cHEESEEEEE </p>
        </div>
      );
    }
}
    
export default SearchHome; 