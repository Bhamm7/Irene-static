import React from 'react'
import { withSiteData } from 'react-static'

import logoImg from '../logo.png'
import doggo1Img from '../images/doggo1.jpg'
import doggo2Img from '../images/doggo2.jpg'

export default withSiteData(() => (
  //<div className="wrapper">
  <div>
    <section className="section parallax bg1">
      <h1> Such Adorableness </h1>
    </section>
    <section className="section static">
      <h1>Boring</h1>
    </section>
    <section className="section parallax bg2">
      <h1>SO FWUFFY AWWW </h1>
    </section>
  </div>
))
