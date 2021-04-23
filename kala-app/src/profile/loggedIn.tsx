import { connect } from 'react-redux';
import React from 'react';
import './profile.css';
import kala from '../assets/kala_orange_solid 3.svg';

import { updateUser } from '../reduxData/actions';
import AppState, { UserInfo } from '../reduxData/types';

interface props {
    name: string
}

export default function loggedIn(props: props) {
    return <h1>Hello, {props.name}</h1>;
  }