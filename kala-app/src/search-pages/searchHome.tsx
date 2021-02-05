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
          <div id="searchMain">
            <h1>Search home page </h1>
            <p>This is where users can find all the funding they need :) </p>
            <p> PRINT OUT THE DATAS HEREEEEE </p>
          </div>
      );
    }

    // display fundBlock probably 
    private fundBlocks = () => {

    }

    async componentDidMount() {
        // will do this function when component is on screen... so get data here. and set to state 
    }
}
    
export default SearchHome; 