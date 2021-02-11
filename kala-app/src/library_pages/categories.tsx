import { Link } from "react-router-dom";
import './libraryStyle.css';
import kala from './library_assets/kala_black_solid_bg.png';
import Arrow from './library_assets/Arrow 1.png';

const Categories = () => {
    return ( 
        <div>
            <Link to="/loans">{createCategory("Loans")}</Link>
            <Link to="/grants">{createCategory("Grants")}</Link>
            <Link to="/minority-owned-small-businesses">{createCategory("Minority Owned Small Businesses")}</Link>
            <Link to="/tribally-owned-small-businesses">{createCategory("Tribally Owned Small Businesses")}</Link>
            
            
           
            <Link to="/financial-literacy-and-education">{createCategory("Financial Literacy and Education")}</Link>
            <Link to="/language-support">{createCategory("Language Support")}</Link>
            <Link to="/covid-resources">{createCategory("COVID Resources")}</Link>
            <Link to="/additional-support">{createCategory("Additional Support")}</Link>
        </div>
    );
}

const createCategory = (categoryName: string) => {
    return (
        <div className="categoryContainer">
          <img className="catIcon" src={kala} alt="Category Icon"></img>
          <h2>{categoryName}</h2>
          <img className="navArrow" src={Arrow} alt="Navigation Arrow"></img>
        </div>
    );
}

export default Categories;