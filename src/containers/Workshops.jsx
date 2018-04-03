import React from 'react'
//

import backgroundVid from 'videos/workshop_small.mp4'

export default () => (
  <div className="outter-workshop">
    
    <div className="workshop-container">
      <h1>Upcoming Workshops</h1>
      <h2>May 16th, 2018 - Calgary, AB, Canada</h2>
      <h3>Day 1 (10am - 7pm)</h3>
      <h3>Lecture + Photoshoot on Location with Professional Models</h3>
      <ul>
        <li>How to get Inspiration and come up with Photoshoot ideas</li>
        <li>Developing your own Photographic Style</li>
        <li>Styling a photoshoot and working with a creative team</li>
        <li>Creative Photography on  budget</li>
        <li>Shooting and Understanding Natural Light</li>
        <li>How to pose a model and compose a shot</li>
      </ul>
      <br />
      <h3>Day 2 (10am - 5pm)</h3>
      <h3>Photoshop Editing Tutorial</h3>
      <ul>
        <li>Working in Camera Raw</li>
        <li>Skin Retouch</li>
        <li>How to use Liquify Tool</li>
        <li>Dodge and Burn</li>
        <li>Color Correction</li>
        <li>Sharpening the Image</li>
        <li>Saving the Image for Social media and Web use</li>
      </ul>
      <p>The maximum number of students for this workshop is 10, to ensure that I can work with every participant individually during the class.</p>
      <p>You will be able to ask me any question and receive individual critique of your existing work and the work you do during the workshop.</p>
      <p>We will have 3 beautiful models, styled by me and made up by a professional makeup and hair stylist. You will be able to keep all the images from the workshop and use them in your portfolio.</p>
      <p>Location is still in the process, but i will provide one indoor and one outdoor location.</p>
      <p>Snacks and drinks will be provided as well as some time off for lunch. This workshop is great for both professional and amatuer photographers.</p>
    </div>
    <div className="video-container">
      <video id="background-video" loop autoPlay>
        <source src={backgroundVid} type="video/mp4" />
        {/* <source src={backgroundVid} type="video/ogg" /> */}
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
)
