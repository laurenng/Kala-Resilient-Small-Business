import './App.css';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import history from "./customHistory";
import kala from './assets/kala_orange_clearbg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch , faBook , faMoneyBillWave, faLanguage, faUser} from '@fortawesome/free-solid-svg-icons';

/**
 * Creates & returns the navigatation bar for the desktop site
 * Uses react router and custom browser history for navigation/routing
 */
export default function DesktopNavBar() { 

    const pushHistory = (path: string) => {
        history.push(path);
    }
    
    // Used to go to a specific category in library atm
    const pushHistorySearch = (path: string, search: string) => {
    history.push({
        pathname: path,
        search: search
        });
    }

    return (
        <nav>
            <Router>
                <Link to="/" onClick={ () => pushHistory("/")}>
                    <img src={kala} alt= "funding finder logo of kala the squid with 3 tentacles and a smiley face" />
                </Link>

                <Link to="/" onClick={ () => pushHistory("/")} id="navTitle">
                    {/* <Typography variant="h6" noWrap className={classes.title}> */}
                        Funding Finder
                    {/* </Typography> */}
                </Link>

                <div className="navTabs">

                    <Link to="/library?lang" onClick={ () => pushHistorySearch("/library", "lang")} className="navTab">
                        <FontAwesomeIcon icon={faLanguage} size="2x" color="black" />
                        <p>Language Help</p>
                    </Link>
                
                    <Link to="/library" onClick={ () => pushHistory("/library")} className="navTab">
                        <FontAwesomeIcon icon={faBook} size="2x" color="black" />
                        <p>Library</p>
                    </Link>

                    <Link to="/search" onClick={ () => pushHistory("/search")} className="navTab">
                        <FontAwesomeIcon icon={faMoneyBillWave} size="2x" color="black" />
                        <p>Funding & Assistance</p>
                    </Link>
                    <Link to="/profile" onClick={ () => pushHistory("/profile")} className="navTab">

                        <FontAwesomeIcon icon={faUser} size="2x" color="black" />
                        <p>Profile</p>
                    </Link>

                </div>
           </Router>
        </nav>
    );

}