import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Home from '../pages/Home.jsx';
import './app.sass';

const App = document.getElementById('app');

// ReactDOM.render(<Media />, App);
render(<Home />, App);
