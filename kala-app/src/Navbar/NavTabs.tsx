import { Link } from "react-router-dom";
import './Navbar.css';

 const NavTabs = () => {
    return (
        <div id="navbar">
            <div id="navContent">
                <Link to="/">
                    <div className="tab">
                        <h1>home</h1>
                    </div>
                </Link>
                <Link to="/search">
                    <div className="tab">
                        <h1>Search</h1>
                    </div>
                </Link>
                <Link to="/library">
                    <div className="tab">
                        <h1>Library</h1>
                    </div>
                </Link>
                <Link to="/profile">
                    <div className="tab">
                        <h1>Profile</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NavTabs;