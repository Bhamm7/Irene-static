
import React from 'react'
import p1 from 'images/1.jpg'
import irene from 'images/bio.jpg'
import irene2 from 'images/IRENE.jpg'
//


export default () => (
  <div className="about-content" id="about">
    <h1>About me</h1>  
    <div className="group">
      <div className="left">
        <img className="bio-image" alt="bio1" src={irene} />
      </div>
      <div className="right">
        <p> My name is Irene Rudnyk. I am a  portraiture photographer, content creator and KelbyOne Instructor residing in Calgary, Canada.</p><br />
        <p>I picked up a camera around 9 years ago and regularly photographed my main subject, my sister Orysia. Since then I have been captivated and inspired by feminine beauty. I try to capture the woman in front of my camera in a more creative, romantic manner.
        </p>
      </div>   
    </div>
    <div className="group">
      <div className="right bio-image">
        <img className="bio-image" alt="bio1" src={irene2} />
      </div>
      <div className="left"> 
        <p>I don't strive for realism, but rather a visually pleasing and feminine version of the finished product. While the subject is always the focus of my images, I truly put a lot of thought into the environment and details of the photo.
        I like to have full creative control over the photoshoot, so I often act as a stylist or creative director and sometimes assume the role of the makeup and hair artist.
        </p>      
      </div>
    </div>
  </div>
)
