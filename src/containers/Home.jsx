import React from 'react'
import { withSiteData } from 'react-static'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
//
import logoImg from '../logo.png'

export default withSiteData(() => (
  <div>
    
    <ParallaxBanner
        className="your-class"
        layers={[
            {
                image: 'https://lorempixel.com/320/240',
                amount: 0.1,
                slowerScrollRate: false,
            },
            {
                image: 'https://lorempixel.com/320/240',
                amount: 0.2,
                slowerScrollRate: false,
            },
        ]}
        style={{
            height: '100vh',
        }}
    >
        <h1>Banner Children</h1>`
    </ParallaxBanner>

    <div className="section1">
      <h1>First section</h1>
    </div>
    <ParallaxBanner
        className="your-class"
        layers={[
            {
                image: 'https://lorempixel.com/320/240',
                amount: 0.1,
                slowerScrollRate: false,
            },
            {
                image: 'https://lorempixel.com/320/240',
                amount: 0.2,
                slowerScrollRate: false,
            },
        ]}
        style={{
            height: '100vh',
        }}
    >
        <h1>Banner Children</h1>`
    </ParallaxBanner>

    <div className="section2">
      <h1>New section</h1>
    </div>




    {/*<h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <img src={logoImg} alt="" /> */}
  </div>
  
))
