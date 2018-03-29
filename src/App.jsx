import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
import { ParallaxProvider } from 'react-scroll-parallax'
import Routes from 'react-static-routes'


//
import Footer from './containers/Footer'
import Header from './containers/Header'

import './app.scss'

const App = () => (
  <ParallaxProvider>
    <Router>
      <div className="outterDiv">
        <Header />
        <main>
          <Routes />


        </main>
        <Footer />
      </div>
    </Router>
  </ParallaxProvider>
)
export default hot(module)(App)
