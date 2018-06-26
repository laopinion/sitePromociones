import React from 'react'
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import Home from '../pages/containers/Home.jsx'

import './normalize.css'
import './app.sass'

const App = document.getElementById('app')

// ReactDOM.render(<Media />, App);
render(<Home />, App)
