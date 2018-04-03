import React from 'react'
import { Link } from 'react-static'
//

export default () => (
  <div className="contact-container">
    <h1>Get in touch</h1>
    <h3>Contact for business enquiries, workshops, store issues and general comments</h3>
    <br />
    <h3>Have questions about my gear? Check out my </h3><Link to="/about">About</Link><h3> page!</h3>
    <form id="contact" action="https://formspree.io/brett.hamm@gmail.com"
      method="POST">
      <fieldset>
      <input placeholder="Your name" type="text" tabIndex="1" required autoFocus />
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabIndex="2" required />
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your Message Here...." tabIndex="3" required />
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
    </form>
  </div>
)
