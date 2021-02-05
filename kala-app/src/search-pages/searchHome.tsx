import React from 'react';
import './searchStyle.css';

// properties that belong to SearchHome
interface searchProps {
  
}

// states that belong to SearchHome
interface searchState {
}

class SearchHome extends React.Component<searchProps, searchState> {
    render() {
      return (
          <div>
            <h1>Search home page </h1>
            <p>This is where users can find all the funding they need :) </p>
        </div>
      );
    }
}
    
export default SearchHome; 