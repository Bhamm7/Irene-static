import React from 'react'
import { withSiteData, Link } from 'react-static'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

import logoImg from '../images/logo.png'
import twitterIcon from 'images/icons/001-twitter.png'
import youtubeIcon from 'images/icons/002-youtube.png'
import facebookIcon from 'images/icons/003-facebook.png'
import instagramIcon from 'images/icons/004-instagram.png'
import fiveHundredIcon from 'images/icons/005-500px-logo.png'


export default withSiteData(() => (
  <div id="parallax">

    {/* <section>
    <div className="title">
      <h3>Let's do some</h3>
      <h1>PARALLAX</h1>
    </div>
  </section> */}

    <section>
      <div className="parallax-one" />
    </section>

    <section>
      <div className="block">
        <ScrollAnimation animateIn="fadeIn"> 
          <div className="home-button-white"><Link to="/about">About</Link></div>  
        </ScrollAnimation>
        {/* <p className="line-break margin-top-10" /> */}
        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <p className="margin-top-10">Learn about me, how I got started, and the gear I use.</p>
        </ScrollAnimation>
      </div>
    </section>

    <section>
      <div className="image-section parallax-two">
        <ScrollAnimation animateIn="fadeIn">
          <div className="home-button-img middle"><Link to="/gallery">Gallery</Link></div>
        </ScrollAnimation>
      </div>
    
    </section>

    <section id="social">
      <div className="block">
        <ScrollAnimation animateIn="fadeIn">
          <div className="home-button-white right"><Link to="/social">Social</Link></div>
        </ScrollAnimation>
        {/* <p className="line-break margin-top-10" /> */}
        
        <ScrollAnimation animateIn="slideInLeft">
          <p className="margin-top-10">Follow me and interact on multiple platforms.</p>
        </ScrollAnimation>
       
          <ScrollAnimation animateIn="slideInLeft" delay="600">
            <div className="animated-icon"><img alt="youtube-icon" src={youtubeIcon} /></div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="slideInLeft" delay="400">
            <div className="animated-icon"><img alt="instagram-icon" src={instagramIcon} /></div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="slideInLeft" delay="200">
            <div className="animated-icon"><img alt="fivepx-icon" src={fiveHundredIcon} /></div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="slideInLeft" delay="10">
            <div className="animated-icon"><img alt="facebook-icon" src={facebookIcon} /></div>
          </ScrollAnimation>
       
      </div>
    </section>

    <section>
      <div className="image-section parallax-three">
        <ScrollAnimation animateIn="fadeIn">
          <div className="home-button-img middle"><Link to="/workshops">Workshops</Link></div>
        </ScrollAnimation>
      </div>
  
    </section>

    <section>
      <div className="block">
        <ScrollAnimation animateIn="fadeIn">
          <div className="home-button-white left"><Link to="/contact">Contact</Link></div>
        </ScrollAnimation>
        <p className="line-break margin-top-10" />
        <p className="margin-top-10">In 2011, UGG will go back to its roots and focus on bringing the active men that brought the brand to life back with new styles allowing them to love the brand again as well. Partnering with Super Bowl champion and NFL MVP Tom Brady, UGG will invite even more men to feel the love the rest of the world knows so well. UGG will also step into the world of high fashion with UGG Collection. The UGG Collection fuses the timeless craft of Italian shoemaking with the reliable magic of sheepskin, bringing the luxurious feel of UGG to high end fashion. As the love for UGG continues to spread across the world, we have continued to offer new and unexpected ways to experience the brand. The UGG journey continues on and the love for UGG continues to spread.</p>
      </div>
    </section>

    <section>
      <div className="image-section parallax-four">
        <ScrollAnimation animateIn="fadeIn">
          <div className="home-button-img middle"><Link to="/store">Store</Link></div>
        </ScrollAnimation>
      </div>
  
    </section>

    <section>
      <div className="block">
        <ScrollAnimation animateIn="fadeIn">
          <div className="home-button-white right"><Link to="/blog">Blog</Link></div>
        </ScrollAnimation>
        
        <p className="margin-top-10">In 2011, UGG will go back to its roots and focus on bringing the active men that brought the brand to life back with new styles allowing them to love the brand again as well. Partnering with Super Bowl champion and NFL MVP Tom Brady, UGG will invite even more men to feel the love the rest of the world knows so well. UGG will also step into the world of high fashion with UGG Collection. The UGG Collection fuses the timeless craft of Italian shoemaking with the reliable magic of sheepskin, bringing the luxurious feel of UGG to high end fashion. As the love for UGG continues to spread across the world, we have continued to offer new and unexpected ways to experience the brand. The UGG journey continues on and the love for UGG continues to spread.</p>
      </div>
    </section>

  </div>
))
