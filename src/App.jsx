import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import { ParallaxProvider } from 'react-scroll-parallax'
import ResponsiveMenu from 'react-responsive-navbar'
import Footer from './containers/Footer'
//
import Routes from 'react-static-routes'
import menuImg from 'images/logo.png'


import './app.scss'

const App = () => (
  <ParallaxProvider>
    <Router>
      <div className="outterDiv">
        <nav>
          <div className="logo">
            IRENE RUDNYK PHOTOGRAPHY
          </div>
          <div className="link-area">
            <ResponsiveMenu
              menuOpenButton={<div className="openMenu"><img alt="" src={menuImg} /></div>}
              menuCloseButton={<div className="openMenu"><img alt="" src={menuImg} /></div>}
              changeMenuOn="1175px"
              largeMenuClassName="large-menu-classname"
              smallMenuClassName="small-menu-classname"
              menu={
                <div className="links">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/social">Social</Link>
                  <Link to="/gallery">Gallery</Link>
                  <Link to="/workshops">Workshops</Link>
                  <Link to="/store">Store</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/blog">Blog</Link>
                </div>
              }
            />
          </div>
        </nav>
        <main>
          <Routes /> 
        </main>
        <Footer />
      </div>
    </Router>
  </ParallaxProvider>
)
export default hot(module)(App)
