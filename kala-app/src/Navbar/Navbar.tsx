// This is the Navbar component. Anything at top of page is from here :) 
import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


class Navbar extends React.Component<any> {
    render() {
      return (
          <div className="navbar">
            <Link to="/library">
                <div className="tab">
                    Financial Resource Library
                </div>
            </Link>
            <Link to="/search">
                <div className="tab">
                    search funding tool
                </div>
            </Link>
        </div>
      );
    }

  }

  export default Navbar;