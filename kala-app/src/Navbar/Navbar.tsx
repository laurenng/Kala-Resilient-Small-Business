// This is the Navbar component. Anything at top of page is defined from here :) 
import React from 'react';
import './Navbar.css';
import NavTabs from './NavTabs';
import TitleHeader from './titleHeader';

class Navbar extends React.Component<any> {
    render() {
      return (
            <div>
                <TitleHeader />
                <NavTabs />
            </div>
      );
    }

    private titleHeader = () => {
        return (
            <h1>hello</h1>
        )
    }
}

export default Navbar;