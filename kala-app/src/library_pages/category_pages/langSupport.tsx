import React from 'react';
import './category.css';
import Arrow from '../library_assets/Arrow 1.png';

class LanguageSupport extends React.Component<any> {
    render() {
      return (
          <main>
            <div className="catTitle">
              <img className="backArrow" src={Arrow} alt="Backwards Navigation Arrow"></img>
              <h1>Language Support</h1>
            </div>
            <h4>If you need language support or one on one help with receiving funding or other business help,
                 there are multiple organizations that offer free assistance in a multitude of languages
                  and come from an array of cultures and backgrounds.</h4>
            {/* use router for this*/}
            
        </main>
      );
        
    }
}

export default LanguageSupport;