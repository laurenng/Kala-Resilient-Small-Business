import React from 'react';
import './libraryStyle.css';
import kala from './library_assets/kala_black_solid_bg.png';
import {RouteComponentProps} from 'react-router-dom';
import Loans from './category_pages/loans';
import Tribal from './category_pages/tribalBusiness';
import Grants from './category_pages/grants';
import MinorityBusiness from './category_pages/minorityBusiness';
import FinancialLiteracy from './category_pages/financialLit';
import LanguageSupport from './category_pages/langSupport';
import CovidSupport from './category_pages/covidSupport';
import AdditionalSupport from './category_pages/additionalSupport';
import libHistory from './libraryHistory';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';

import loansImg from '../assets/library_banners/loans-16-9.jpg';
import finLitImg from '../assets/library_banners/fin-lit-and-education-16-9.jpg';
import tribalImg from '../assets/library_banners/tribal-owned-16-9.jpg';
import minorityImg from '../assets/library_banners/minority-owned-16-9.jpg';
import languageImg from '../assets/library_banners/language-16-9.jpg';
import covidImg from '../assets/library_banners/covid-related-16-9.jpg';
import addImg from '../assets/library_banners/additional-16-9.jpg';
import grantsImg from '../assets/library_banners/grants-16-9.jpg';

import { url } from 'inspector';

interface libraryState {
  cat: string
}

interface libraryProp extends RouteComponentProps<any> {
  /* other props for ChildComponent */
}

class LibraryHome extends React.Component<libraryProp, libraryState> {
  componentDidMount() {
    console.log(libHistory)
    console.log(this.state)
  }

  constructor(props: libraryProp, state: libraryState){
    super(props);
    this.state = {
      cat: "home"
    };
  }

    render() {
      let displayContent; 
      let category = this.state.cat;
      switch (category) {
        case "loans":
          displayContent  = 
          <div id="loans">
            {this.createBanner("Loans", loansImg)}
            <Loans/>
          </div>
          break;
        case "grants":
          displayContent  = 
            <div id="grants">
              {this.createBanner("Grants", grantsImg)}
              <Grants/>
            </div>
          break;
        case "minorities":
          displayContent  = 
            <div id="minorities">
              {this.createBanner("Minority Owned Small Businesses", minorityImg)}
              <MinorityBusiness/>
            </div>
          break;
        case "tribal":
          displayContent  = 
            <div id="tribal">
              {this.createBanner("Tribally Owned Small Businesses", tribalImg)}
              <Tribal/>
            </div>
          break;
        case "finLit":
        displayContent  = 
          <div id="finLit">
            {this.createBanner("Financial Literacy and Education", finLitImg)}
            <FinancialLiteracy/>
          </div>
        break;
        case "lang":
        displayContent  = 
          <div id="lang">
            {this.createBanner("Language Support", languageImg)}
            <LanguageSupport/>
          </div>
        break;
        case "covid":
        displayContent  = 
          <div id="covid">
            {this.createBanner("COVID Resource", covidImg)}
            <CovidSupport/>
          </div>
        break;
        case "additional":
        displayContent  = 
          <div id="additional">
            {this.createBanner("Additional Support", addImg)}
            <AdditionalSupport/>
          </div>
        break;
        default: // Home 
          displayContent = 
            <div>
              <h1>Library</h1>
              <p>In this library you can find resources to guide you as you apply for funding.</p>
            </div>
      }

      return (
          <main>
            <br></br>
            <div className="translatorBtn">Need a translator?</div>

            {displayContent}

            <List id="libraryCats">
              <ListItem>
                  <div onClick={() => this.categoryClick("loans")}>{this.createCategory("Loans")}</div> 
              </ListItem>
              <ListItem>
                  <div onClick={() => this.categoryClick("grants")}>{this.createCategory("Grants")}</div>
              </ListItem>
              <ListItem>
                  <div onClick={() => this.categoryClick("minorities")}>{this.createCategory("Minority Owned Small Businesses")}</div>
              </ListItem>
              <ListItem>
                  <div onClick={() => this.categoryClick("tribal")}>{this.createCategory("Tribally Owned Small Businesses")}</div>
              </ListItem>
              <ListItem>
                  <div onClick={() => this.categoryClick("finLit")}>{this.createCategory("Financial Literacy and Education")}</div>
              </ListItem>
              <ListItem>
                  <div onClick={() => this.categoryClick("lang")}>{this.createCategory("Language Support")}</div>
              </ListItem>
              <ListItem>
                  <div onClick={() => this.categoryClick("covid")}>{this.createCategory("COVID Resources")}</div>
              </ListItem>
              <ListItem>
                  <div onClick={() => this.categoryClick("additional")}>{this.createCategory("Additional Support")}</div>
              </ListItem>
            </List>
          </main>
      );  
    }

    private createBanner = (title: string, bgImg: string) => {
      let styles = {
        backgroundImage: "linear-gradient(to right, grey 9%, silver 100%), url(" + bgImg + ")",
        opacity: 0.8,
        backgroundBlendMode: 'multiply'
        
    }
      return (
      <div className="catTitle" style={styles}>
        <ArrowBackIos className="backNavArrow" onClick={this.libraryLoad}></ArrowBackIos>
        <h1>{title}</h1>
      </div>);
    }
  
    private libraryLoad = () => {
      console.log("back btn clicked")
      this.setState({
        cat: "home"
      })
      console.log(this.state)
      document.getElementById("libraryCats")?.classList.remove("hidden");
    }

    private createCategory = (categoryName: string) => {
      return (
        <div className="categoryContainer">
          <img className="catIcon" src={kala} alt="Category Icon"></img>
          <h2>{categoryName}</h2>
          <ArrowForwardIos className="navArrow"></ArrowForwardIos>
        </div>
        );
    }

    private categoryClick = (categoryName: string) => {
      this.setState({
        cat: categoryName
      })
      console.log(this.state)
      document.getElementById("libraryCats")?.classList.add("hidden");
    }
      
}
    
export default LibraryHome; 


