import { Link } from "react-router-dom";
import './libraryStyle.css';
import kala from './library_assets/kala_black_solid_bg.png';
import Arrow from './library_assets/Arrow 1.png';
import libHistory from "./libraryHistory";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const pushHistory = (path: string) => {
    libHistory.push(path);
  }

const Categories = () => {
    return ( 
        <div>
            {/* <Link to="/loans">{createCategory("Loans")}</Link> */}
            {/* <Link to="/grants">{createCategory("Grants")}</Link>
            <Link to="/minority-owned-small-businesses">{createCategory("Minority Owned Small Businesses")}</Link>
            <Link to="/tribally-owned-small-businesses">{createCategory("Tribally Owned Small Businesses")}</Link>
            <Link to="/financial-literacy-and-education">{createCategory("Financial Literacy and Education")}</Link>
            <Link to="/language-support">{createCategory("Language Support")}</Link>
            <Link to="/covid-resources">{createCategory("COVID Resources")}</Link>
            <Link to="/additional-support">{createCategory("Additional Support")}</Link> */}

            <List>
                <ListItem>
                    <div>{createCategory("Loans")}</div> {/*onClick={ () => pushHistory("/loans")}*/}
                </ListItem>
                <ListItem button component={Link} to="/grants">
                    <div onClick={ () => pushHistory("/grants")}>{createCategory("Grants")}</div>
                </ListItem>
                <ListItem button component={Link} to="/minority-owned-small-businesses">
                    <div onClick={ () => pushHistory("/minority-owned-small-businesses")}>{createCategory("Minority Owned Small Businesses")}</div>
                </ListItem>
                <ListItem button component={Link} to="/tribally-owned-small-businesses">
                    <div onClick={ () => pushHistory("/tribally-owned-small-businesses")}>{createCategory("Tribally Owned Small Businesses")}</div>
                </ListItem>
                <ListItem button component={Link} to="/financial-literacy-and-education">
                    <div onClick={ () => pushHistory("/financial-literacy-and-education")}>{createCategory("Financial Literacy and Education")}</div>
                </ListItem>
                <ListItem button component={Link} to="/language-support">
                    <div onClick={ () => pushHistory("/language-support")}>{createCategory("Language Support")}</div>

                </ListItem>
                <ListItem button component={Link} to="/covid-resources">
                    <div onClick={ () => pushHistory("/covid-resources")}>{createCategory("COVID Resources")}</div>
                </ListItem>
                <ListItem button component={Link} to="/additional-support">
                    <div onClick={ () => pushHistory("/additional-support")}>{createCategory("Additional Support")}</div>
                </ListItem>
            </List>
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