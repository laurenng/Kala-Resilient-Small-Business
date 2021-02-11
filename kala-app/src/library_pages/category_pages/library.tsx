import React from 'react';
import Categories from '../categories';

class Library extends React.Component<any> {
    render() {
      return (
          <main>
            <h1>Library</h1>
            <p>In this library you can find resources to guide you as you apply for funding.</p>
            {/* use router for this*/}
            <Categories />
        </main>
      );
        
    }
}

export default Library;