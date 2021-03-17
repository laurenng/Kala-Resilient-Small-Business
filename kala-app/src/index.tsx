/**
Creates the application :) sets up with redux store
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Extra optimizations 
import * as serviceWorker from './performance/serviceWorker';
import reportWebVitals from './performance/reportWebVitals';

// Redux Imports
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reduxData/reducer';

// import pages 
import App from './App';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App /> 
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
