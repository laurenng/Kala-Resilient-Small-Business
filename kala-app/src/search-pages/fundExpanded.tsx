import React from 'react';
import './searchStyle.css';

// properties that belong to SearchHome
interface fundProps {
}

// states that belong to SearchHome
interface fundState {
}

class FundingExpand extends React.Component<fundProps, fundState> {
    constructor(props: fundProps, state: fundState){
      super(props);
      this.state = {
      };
    }

    render() {
      return (
            <h1>Fill out this form to filter results</h1>
      );
    }

    async componentDidMount() {
    }
}
    
export default FundingExpand; 