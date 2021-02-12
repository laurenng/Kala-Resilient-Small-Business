import React from 'react';
import './category.css';
import Arrow from '../library_assets/Arrow 1.png';

class AdditionalSupport extends React.Component<any> {
  goBack(){
    this.props.history.goBack();
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  };
    render() {
      return (
          <main>
            <div className="catTitle">
            <img className="backArrow" src={Arrow} alt="Backwards Navigation Arrow" onClick={() => this.goBack()}></img>
              <h1>Additional Support</h1>
            </div>
            <h4>If you need technical assistance or one on one help with receiving funding or other business help,
                 there are multiple organizations that offer free assistance in a multitude of languages
                  and come from an array of cultures and backgrounds.</h4>
            {/* use router for this*/}
            {this.createResource("Seattle Public Library List of Organizations Offering Help to Small Businesses", "https://www.spl.org/programs-and-services/business/business-resources/business-assistance-organizations", "spl.org")}
            {this.createResource("Seattle Office of Economic Development Small Business Support", "https://www.seattle.gov/office-of-economic-development/small-business", "seattle.gov")}
            {this.createResource("Technical Assistance and Small Business Support Provider List", "https://www.smallbizhelpwa.com/resources", "smallbizhelpwa.com")}
            {this.createResource("Small Business Resiliency Assistance", "http://startup.choosewashingtonstate.com/small-business-resiliency-assistance/", "startup.choosewashingtonstate.com")}
            {this.createResource("Affordable Housing, Tax Credits, and Technical Assistance from the National Development Council", "https://ndconline.org/", "ndconline.org")}
            {this.createResource("Business Guidance, Licensing, and Registration Provider", "https://www.business.wa.gov/", "business.wa.gov")}
        </main>
      );
        
    }
    private createResource = (resourceName: string, resourceURL: string, resourceDesc: string) => {
      return (
          <div className="resource">
            <h2>{resourceName}</h2>
            <a href={resourceURL} target="_blank"><h3>{resourceDesc}</h3></a>
          </div>
      );
    }
}

export default AdditionalSupport;