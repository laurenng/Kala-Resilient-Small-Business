/**
Error not found page. we need to work on this some more
*/

import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component{
    render(){
        return <div>
            <h1> Uh oh... either you did something wrong or we did. Try again later. Go back home</h1>
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
    }
}

export default NotFoundPage;