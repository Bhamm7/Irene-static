import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import { ParallaxProvider } from 'react-scroll-parallax'
//
import Routes from 'react-static-routes'

import './app.scss'

const App = () => (
  <ParallaxProvider>
    <Router>
      <div>
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
        <div className="content">
          <Routes />
        </div>
      </div>
    </Router>
  </ParallaxProvider>
)
export default hot(module)(App)
