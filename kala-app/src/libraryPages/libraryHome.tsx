import React from 'react';
import './libraryStyle.css';
import {RouteComponentProps} from 'react-router-dom';
import Loans from './categoryPages/loans';
import Tribal from './categoryPages/tribalBusiness';
import Grants from './categoryPages/grants';
import MinorityBusiness from './categoryPages/minorityBusiness';
import FinancialLiteracy from './categoryPages/financialLit';
import LanguageSupport from './categoryPages/langSupport';
import CovidSupport from './categoryPages/covidSupport';
import AdditionalSupport from './categoryPages/additionalSupport';
import {ArrowBack} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
// Category resource banner images
import loansImg from '../assets/libraryBanners/loans-16-9.jpg';
import finLitImg from '../assets/libraryBanners/fin-lit-and-education-16-9.jpg';
import tribalImg from '../assets/libraryBanners/tribal-owned-16-9.jpg';
import minorityImg from '../assets/libraryBanners/minority-owned-16-9.jpg';
import languageImg from '../assets/libraryBanners/language2-16-9.jpg';
import covidImg from '../assets/libraryBanners/covid-related-16-9.jpg';
import addImg from '../assets/libraryBanners/additional-16-9.jpg';
import grantsImg from '../assets/libraryBanners/grants-16-9.jpg';


interface libraryState {
  cat: string
}

interface libraryProp extends RouteComponentProps<any> {
  /* other props for ChildComponent */
  location: {
    hash: string
    key: string
    pathname: string
    search: string
    state: string
    }
}

const desktopGrid: number = 3;
const mobileGrid: number = 6;


/**
 * This class is renders and controls the library feature. It includes the library home
 * as well as the switching of displays between different library category views.
 */
class LibraryHome extends React.Component<libraryProp, libraryState> {
  rowSpacing: any;
  langRedirect: boolean;

  componentDidMount() {
    window.scrollTo(0, 0); // Scrolls to the top of the page on mount
    this.langRedirectFunc();
  }

  constructor(props: libraryProp, state: libraryState){
    super(props);
    if (props.location.search !== "") {
      this.state = {
        cat: "lang"
      };
      this.langRedirect = true;

    } else {
      this.state = {
        cat: "home"
      };
      this.langRedirect = false;
    }

    // Only changes on refresh
    var windowMatches = window.matchMedia('(min-width: 1000px)');
    if (windowMatches.matches) {
      this.rowSpacing = desktopGrid;
    } else {
      this.rowSpacing = mobileGrid;
    }

    
  }

    render() {
      // Switches to the proper category display depending on state
      let displayContent; 
      let category = this.state.cat;
      switch (category) {
        case "loans":
          displayContent  = 
          <div id="loans" className="catContainer">
            {this.createBanner("Loans", loansImg)}
            <Loans/>
          </div>
          break;
        case "grants":
          displayContent  = 
            <div id="grants" className="catContainer">
              {this.createBanner("Grants", grantsImg)}
              <Grants/>
            </div>
          break;
        case "minorities":
          displayContent  = 
            <div id="minorities" className="catContainer">
              {this.createBanner("Minority Owned Small Businesses", minorityImg)}
              <MinorityBusiness/>
            </div>
          break;
        case "tribal":
          displayContent  = 
            <div id="tribal" className="catContainer">
              {this.createBanner("Tribally Owned Small Businesses", tribalImg)}
              <Tribal/>
            </div>
          break;
        case "finLit":
        displayContent  = 
          <div id="finLit" className="catContainer">
            {this.createBanner("Financial Literacy and Education", finLitImg)}
            <FinancialLiteracy/>
          </div>
        break;
        case "lang":
        displayContent  = 
          <div id="lang" className="catContainer">
            {this.createBanner("Language Support", languageImg)}
            <LanguageSupport/>
          </div>
        break;
        case "covid":
        displayContent  = 
          <div id="covid" className="catContainer">
            {this.createBanner("COVID Resource", covidImg)}
            <CovidSupport/>
          </div>
        break;
        case "additional":
        displayContent  = 
          <div id="additional" className="catContainer">
            {this.createBanner("Additional Support", addImg)}
            <AdditionalSupport/>
          </div>
        break;
        default: // Home 
          displayContent = 
            <div className="libraryHeader">
              <h1>Library</h1>
              <p>In this library you can find resources to guide you as you apply for funding.</p>
            </div>
      }

      return (
          <main>
            <br></br>
            {displayContent}
            <br></br>
            <div className="gridContainer" id="libraryCats">
            <div id="lib-grid" > {/* id="libraryCats" */}
              <div className="gridItem">
                  <div onClick={() => this.categoryClick("loans")}>{this.createCategory("Loans", loansImg)}</div> 
              </div>
              <div className="gridItem">
                  <div onClick={() => this.categoryClick("grants")}>{this.createCategory("Grants", grantsImg)}</div>
              </div>
              <div className="gridItem">
                  <div onClick={() => this.categoryClick("minorities")}>{this.createCategory("Minority Owned Small Businesses", minorityImg)}</div>
              </div>
              <div className="gridItem">
                  <div onClick={() => this.categoryClick("tribal")}>{this.createCategory("Tribally Owned Small Businesses", tribalImg)}</div>
              </div>
              <div className="gridItem">
                  <div onClick={() => this.categoryClick("finLit")}>{this.createCategory("Financial Literacy and Education", finLitImg)}</div>
              </div>
              <div className="gridItem">
                  <div onClick={() => this.categoryClick("lang")}>{this.createCategory("Language Support", languageImg)}</div>
              </div>
              <div className="gridItem">
                  <div onClick={() => this.categoryClick("covid")}>{this.createCategory("COVID Resources", covidImg)}</div>
              </div>
              <div className="gridItem">
                  <div onClick={() => this.categoryClick("additional")}>{this.createCategory("Additional Support", addImg)}</div>
              </div>
            </div>
            </div>
          </main>
      );  
    }

    
    // Function hides library categories when user is directed to lang support
    // page from nav
    private langRedirectFunc = () => {
      if (this.langRedirect) {
        var cats = document.getElementById("libraryCats");
        if (cats != null) {
          cats.classList.add("hidden");
        }
        this.langRedirect = false;
      }
    }

    /**
     * Creates the interactive category banners for the library
     * 
     * @param title - String - the title of the category
     * @param bgImg - String - the background image for the category banner
     * @returns div with the corresponding banner 
     */
    private createBanner = (title: string, bgImg: string) => {
      let styles = {
        backgroundImage: "linear-gradient(to right, grey 9%, silver 100%), url(" + bgImg + ")",
        opacity: 0.8,
        backgroundBlendMode: 'multiply',
        margin: "-1.3em"
    }
      return (
      <div className="catTitle" style={styles}>
        <ArrowBack className="backNavArrow" onClick={this.libraryLoad}></ArrowBack>
        <h1 className="bannerTitle">{title}</h1>
      </div>);
    }
  
    /**
     * Sets the initial state of the library to the library home page view
     */
    private libraryLoad = () => {
      this.setState({
        cat: "home"
      })
      document.getElementById("libraryCats")?.classList.remove("hidden");
    }

    /**
     * Creates the library home grid containers for each category
     * 
     * @param categoryName - String - the name of the library category
     * @param catImg - any - the image of the category preview from the library grid
     * @returns - a category div to be used in the library home grid
     */
    private createCategory = (categoryName: string, catImg: any) => {
      return (
        <div className="categoryContainer">
          <img className="catIcon" src={catImg} alt="Category Icon"></img>
          <h2>{categoryName}</h2>
        </div>
        );
    }

    /**
     * Sets the state to the category the user clicked and hides the 
     * grid of library categories
     * 
     * @param categoryName - String - the name of the category clicked
     */
    private categoryClick = (categoryName: string) => {
      this.setState({
        cat: categoryName
      })
      document.getElementById("libraryCats")?.classList.add("hidden");
    }
      
}
    
export default LibraryHome; 


