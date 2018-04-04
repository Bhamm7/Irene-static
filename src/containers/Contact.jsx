import React from 'react'
import { Link } from 'react-static'
//

export default () => (
  <div className="contact-container">
    
    <form id="contact" action="https://formspree.io/brett.hamm@gmail.com"
      method="POST">
      <div className="contact-heading">
        <h1>Get in touch</h1>
        <h3>Contact for business enquiries, workshops, store issues and general comments</h3>
        <br />
        <h3>Have questions about my gear? Check out my&nbsp;</h3><Link to="/about">About</Link><h3>&nbsp;page!</h3>
      </div>     
      <fieldset>
      <input placeholder="Your name" type="text" name="Name" tabIndex="1" required autoFocus />
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" name="ReplyBackAddress" tabIndex="2" required />
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your Message Here...." name="EmailMessage" tabIndex="3" required />
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" value="Send" data-submit="...Sending">Submit</button>
    </fieldset>
    </form>
  </div>
)
