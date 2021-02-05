// This is the Navbar component. Anything at top of page is from here :) 
import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


class Navbar extends React.Component<any> {
    render() {
      return (
          <div className="navbar">
            <Link to="/">
                <div className="tab">
                    <h1>home</h1>
                </div>
            </Link>
            <Link to="/search">
                <div className="tab">
                    <h1>search funding tool</h1>
                </div>
            </Link>
            <Link to="/library">
                <div className="tab">
                    <h1>Financial Resource Library</h1>
                </div>
            </Link>
        </div>
      );
    }
  }

  export default Navbar;