import React from 'react'
import twitterIcon from 'images/icons/001-twitter.png'
import youtubeIcon from 'images/icons/002-youtube.png'
import facebookIcon from 'images/icons/003-facebook.png'
import instagramIcon from 'images/icons/004-instagram.png'
import fiveHundredIcon from 'images/icons/005-500px-logo.png'
//

export default () => (
  <footer className="flex-rw">
    <ul className="footer-list-top">
        <h1></h1>
        <li>TestList</li>
        <li>TestList</li>
    </ul>
    <ul className="footer-list-top">
        <li>TestList</li>
        <li>TestList</li>         
    </ul>
    <ul className="social-footer">
        <li><img alt="facebook" src={facebookIcon} /></li>
        <li><img alt="youtube" src={youtubeIcon} /></li>
        <li><img alt="500px" src={fiveHundredIcon} /></li>
        <li><img alt="instagram" src={instagramIcon} /></li>
        {/* <li><img alt="twitter" src={twitterIcon} /></li> */}
        
    </ul>

  </footer>
)