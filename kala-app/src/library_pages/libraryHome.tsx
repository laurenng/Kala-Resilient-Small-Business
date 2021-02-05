import React from 'react';
import './libraryStyle.css';

class LibraryHome extends React.Component<any> {
    render() {
      return (
          <div>
            <h1>Library Home Page</h1>
            <p>start typings heres!!! to learn more about finance, do the following</p>
            {this.tempFunction("Loans")}
            {this.tempFunction("Grants")}
        </div>
      );
    }

    // with functions and any variables, you need to specify types (ie: string, any, boolean, int)
    private tempFunction = (targetWord: string) => {
        return <h2>THIS IS JUST A TEMPORARY FUNCTION and we pass parameters like this. {targetWord}</h2>
    }
}
    
export default LibraryHome; 