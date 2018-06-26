import React from 'react'
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import Product from '../pages/containers/Product.jsx'
import listProducts from './listProducts.js'

import './normalize.css'
import './app.sass'

const App = document.getElementById('app')

// ReactDOM.render(<Media />, App);
render(<Product products={listProducts} />, App)
