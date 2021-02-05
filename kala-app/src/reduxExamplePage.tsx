// this file is just for reference. Please don't include in rest of application. Will be used for redux example

import React from 'react';
import './App.css';
import AppState, { pages } from './redux-data/types';
import { connect } from "react-redux";
import {setCurrentPage} from "./redux-data/actions"
import { Link } from 'react-router-dom';

// 
interface homeProps {
  setCurrentPage: (page: pages) => void
}

interface homeState {
  email: string,
  password: string,
  authError: string
}

class HomePage extends React.Component<homeProps, homeState> {
    render() {
      return (
          <div>
            <div>Home taggsss</div>
            <p>what a poop</p>

            <Link to="/OtherPage">
                <button type="button">
                    Otherpage
                </button>
            </Link>
            <Link to="/">
                <button type="button">
                    app
                </button>
            </Link>
        </div>
      );
    }
    private changePage = () => { 
        let switchPage = this.props.setCurrentPage; 
        switchPage(pages.OtherPage)
      }
}
    

function mapStateToProps(state: AppState) {
    return {   

    }
}

function mapDispatchToProps(dispatch: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    (page: pages) => dispatch(setCurrentPage(page))
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);