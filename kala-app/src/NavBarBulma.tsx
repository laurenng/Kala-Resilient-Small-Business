/*
This is a responsive navigation bar/menu that utilizes the
Bulma library.
*/

import './App.css';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import history from "./customHistory";
import FFBrand from './assets/FF.png';

export default function BulmaNavBar() { 

    const pushHistory = (path: string) => {
        history.push(path);
    }
    
    // Used to go to a specific category in library
    const pushHistorySearch = (path: string, search: string) => {
    history.push({
        pathname: path,
        search: search
        });
    }

    const toggleBurgerMenu = () => {
        let burger = document.getElementById("bulmaBurger");
        let menu = document.getElementById("bulmaMenu");
        burger?.classList.toggle("is-active");
        menu?.classList.toggle("is-active");
    }

    return (
        <Router>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
               <div className="navbar-item">
                <img src={FFBrand} />
                <Link to="/" onClick={ () => pushHistory("/")} id="navTitle" style={{ textDecoration: 'none', color: 'black'}}>
                            Funding Finder
                </Link>
               </div>
                
                <a role="button" id="bulmaBurger" onClick={toggleBurgerMenu} className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className="navbar-menu" id="bulmaMenu">
                <div className="navbar-start">
                    <Link to="/library?lang" className="navbar-item" onClick={ () => pushHistorySearch("/library", "lang")}>
                        <p>Language Help</p>
                    </Link>

                    <Link to="/library" onClick={ () => pushHistory("/library")} className="navbar-item">
                        <p>Library</p>
                    </Link>

                    <Link to="/search" onClick={ () => pushHistory("/search")} className="navbar-item">
                        <p>Funding &amp; Assistance</p>
                    </Link>
                    <Link to="/profile" onClick={ () => pushHistory("/profile")} className="navbar-item">
                        <p>Profile</p>
                    </Link>
                
                </div>
            </div>
        </nav>
        </Router>
    );
}

