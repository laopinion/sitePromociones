import React from 'react'
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import ListProducts from '../pages/containers/ListProducts.jsx'
import data from './listProducts.js'

import './normalize.css'
import './app.sass'

const App = document.getElementById('app')

// ReactDOM.render(<Media />, App);
render(<ListProducts products={data} />, App)
