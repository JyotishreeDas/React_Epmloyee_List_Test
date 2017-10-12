import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import './src/css/EmployeeList.css';
import {HomeComponent} from './src/HomeComponent'


ReactDOM.render(<HomeComponent />, document.getElementById('app'));
