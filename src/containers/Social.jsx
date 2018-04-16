import React from 'react'
import YouTube from 'react-youtube'
//


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
        <h1>Follow me and Interact!</h1>
        <div className="card youtube">
          <h2>Youtube</h2>
          <div className="video"><YouTube videoId="Ju792eH3A_s" opts={opts} onReady={this._onReady} /></div>
          <div className="g-ytsubscribe" data-channelid="UCqHw1bJGROJW8UI1UT7W8yw" data-layout="default" data-count="default" />
        </div>
        <p className="line-break" />
        <div className="card instagram">
          <h2>Instagram</h2>
        </div>
        <p className="line-break" />
        <div className="card fivepx">
          <h2>500px</h2>
        </div>
        <p className="line-break" />
        <div className="card facebook">
          <h2>Facebook</h2>
        </div>
        <h1>Check out my blog for more behind the scenes!</h1>
      </div>
    )
  }

  
}
