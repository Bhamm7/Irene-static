import React from 'react'
import YouTube from 'react-youtube'
//
import twitterIcon from 'images/icons/001-twitter.png'
import youtubeIcon from 'images/icons/002-youtube.png'
import facebookIcon from 'images/icons/003-facebook.png'
import instagramIcon from 'images/icons/004-instagram.png'
import fiveHundredIcon from 'images/icons/005-500px-logo.png'


// const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
// const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
// let columnCount = 0

// if (w < h || w < 600) {
//   columnCount = 1
// }
// else {
//   columnCount = 4
// }

export default class Social extends React.Component {
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '329',
      width: '540',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    }

    return (
      <div id="social" className="social-container">
        {/* <h1>Follow me and Interact!</h1> */}
        <div className="card youtube">
          <div className="social-text">
            <div className="header-icon">
              <h2>Youtube</h2>
              <img alt="youtube-icon" src={youtubeIcon} />
            </div>    
            <p>See the latest photography videos including:</p>
            <ul>
              <li>Shooting tutorials</li>
              <li>Editing tutorials</li>
              <li>Behind the scenes</li>
              <li>Film experiments</li>
              <li>DIY props and outfits</li>
              <li>And more!</li>
            </ul>
            <p>Subscribe to be better notified of future videos. New videos every week!</p>
            <div className="sub"><div className="g-ytsubscribe" data-channelid="UCqHw1bJGROJW8UI1UT7W8yw" data-layout="default" data-count="default" /></div>        
          </div>      
          <div className="content"><YouTube videoId="Ju792eH3A_s" opts={opts} onReady={this._onReady} /></div>    
        </div>
          
        <p className="line-break" />
        <div className="card instagram">
          <div className="social-text">
            <div className="header-icon">
              <h2>Instagram</h2>
              <img alt="instagram-icon" src={instagramIcon} />
            </div>      
            <p>Check out my largest gallery, along with videos and stories!</p>
            
            <p>Subscribe to be better notified of future videos. New videos every week!</p>
            <div className="sub"><div className="g-ytsubscribe" data-channelid="UCqHw1bJGROJW8UI1UT7W8yw" data-layout="default" data-count="default" /></div>        
          </div>      
          <div className="content"><YouTube videoId="Ju792eH3A_s" opts={opts} onReady={this._onReady} /></div> 
        </div>

        <p className="line-break" />
        <div className="card fivepx">
          <div className="social-text">
            <div className="header-icon">
              <h2>500px</h2>
              <img alt="fivepx-icon" src={fiveHundredIcon} />
            </div>      
            <p>View and vote on work that I'm really proud of</p>
            
            <p>Subscribe to be better notified of future videos. New videos every week!</p>
            <div className="sub"><div className="g-ytsubscribe" data-channelid="UCqHw1bJGROJW8UI1UT7W8yw" data-layout="default" data-count="default" /></div>        
          </div>      
          <div className="content"><YouTube videoId="Ju792eH3A_s" opts={opts} onReady={this._onReady} /></div> 
        </div>

        <p className="line-break" />
        <div className="card facebook">
          <div className="social-text">
            <div className="header-icon">
              <h2>Facebook</h2>
              <img alt="facebook-icon" src={facebookIcon} />
            </div>     
            <p>Interact with posts of photography, shoutouts, model-calls and general info</p>
          
            <p>Subscribe to be better notified of future videos. New videos every week!</p>
            <div className="sub"><div className="g-ytsubscribe" data-channelid="UCqHw1bJGROJW8UI1UT7W8yw" data-layout="default" data-count="default" /></div>        
          </div>      
          <div className="content"><YouTube videoId="Ju792eH3A_s" opts={opts} onReady={this._onReady} /></div> 
        </div>
        <h1>Check out my blog for more behind the scenes!</h1>
      </div>
    )
  }
}
