
import React from 'react'
import p1 from 'images/1.jpg'
import irene from 'images/bio.jpg'
import irene2 from 'images/IRENE.jpg'
//


export default () => (
  
  <div className="about_content">
    <h1>About me</h1>
    {/* <img alt="background" src={p1} /> */}
    
    <div className="grid-flex">
      <div className="col col-image bio1" />
      <div className="col col-text">
        <div className="Aligner-item">
          <p> My name is Irene Rudnyk. I am a  portraiture photographer, content creator and KelbyOne Instructor residing in Calgary, Canada.</p><br />
      <p>I picked up a camera around 9 years ago and regularly photographed my main subject, my sister Orysia. Since then I have been captivated and inspired by feminine beauty. I try to capture the woman in front of my camera in a more creative, romantic manner.
          </p>
        </div>
      </div>
    </div>
  
    <div className="grid-flex">
      <div className="col col-image bio2">
        &nbsp;
      </div>
      <div className="col col-text col-left">
        <div className="Aligner-item">
          <p>I don't strive for realism, but rather a visually pleasing and feminine version of the finished product. While the subject is always the focus of my images, I truly put a lot of thought into the environment and details of the photo.
        I like to have full creative control over the photoshoot, so I often act as a stylist or creative director and sometimes assume the role of the makeup and hair artist.
          </p>
        </div>
      </div>
    </div>

    

    {/* <div classNameName="about_flex">
      <div classNameName="col col-image bio2">
        <img alt="" src={ irene2 } />
      </div>
      <div classNameName="col col-text">
        <div classNameName="aligner-item">
          <p> My name is Irene Rudnyk. I am a  portraiture photographer, content creator and KelbyOne Instructor residing in Calgary, Canada.</p><br />
      <p>I picked up a camera around 9 years ago and regularly photographed my main subject, my sister Orysia. Since then I have been captivated and inspired by feminine beauty. I try to capture the woman in front of my camera in a more creative, romantic manner.</p><br /><p>I don't strive for realism, but rather a visually pleasing and feminine version of the finished product. While the subject is always the focus of my images, I truly put a lot of thought into the environment and details of the photo.
        I like to have full creative control over the photoshoot, so I often act as a stylist or creative director and sometimes assume the role of the makeup and hair artist.</p><br /><p>
      I started my Youtube channel as a place for me to share all my creative projects and help other photographers with tutorials, behind the scenes and DIY videos. I never was and never will be an overly technical photographer, and I love to show how I achieve my images with just simple techniques, simple setups and natural light. I share my art with my subscribers in the hopes of inspiring others and to spread some beauty into the world.
          </p>
        </div>
        
      </div>
    </div> */}

  </div>
)
