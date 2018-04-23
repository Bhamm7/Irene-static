import React from 'react'
import { Router, Link } from 'react-static'

import twitterIcon from 'images/icons/001-twitter.png'
import youtubeIcon from 'images/icons/002-youtube.png'
import facebookIcon from 'images/icons/003-facebook.png'
import instagramIcon from 'images/icons/004-instagram.png'
import fiveHundredIcon from 'images/icons/005-500px-logo.png'
//

export default () => (
  <footer>
    <div  className="footer-grid">
        <ul className="footer-list" id="footer-left">
            <h1>Links</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>    
            <Link to="/gallery">Gallery</Link>
            <Link to="/social">Social</Link>
            <Link to="/workshops">Workshops</Link>
            <Link to="/store">Store</Link>
            <Link to="/contact">Contact</Link>
            {/* <Link to="/blog">Blog</Link> */}
        </ul>
        <ul className="social-footer"  id="footer-middle">
            <h1>Connect With Me</h1>
            <li><img alt="facebook" src={facebookIcon} /></li>
            <li><img alt="youtube" src={youtubeIcon} /></li>
            <li><img alt="500px" src={fiveHundredIcon} /></li>
            <li><img alt="instagram" src={instagramIcon} /></li>
            <p>irenerudnykphoto@gmail.com</p>
            {/* <li><img alt="twitter" src={twitterIcon} /></li> */}   
        </ul>
    
        <ul className="footer-list" id="footer-right">
            <h1>Get Inspired</h1>
            <li>KelbyOne Link</li>
            <li>Other Tutorial Link</li>         
        </ul>
    </div>
    <div className="footer-bottom">
        <h3>Irene Rudnyk Photography                        Copyright 2018 &copy;</h3>
    </div>
  </footer>
)