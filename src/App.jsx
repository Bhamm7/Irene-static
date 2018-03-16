import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import './app.scss'

const App = () => (
    <Router>
     
        
        <div className="wrapper">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/social">Social</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/store">Store</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </nav>
          <Routes />
        </div>
     
    </Router>
)
export default hot(module)(App)
