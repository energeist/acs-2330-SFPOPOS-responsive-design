import React from 'react';
import './Newsletter.css'

function Newsletter() {
  return (
    <div className="newsletter">
      <h2>Keep up to date with our monthly newsletter!</h2>
      <section className="newsletterText">
        <p>Get the latest news each month!</p>
        <ul>
          <li>New space listings</li>
          <li>Up-to-date hours and amenities</li>
          <li>Event listings</li>
        </ul>
      </section>
      <form action="" method="get" className="newsletterForm">
        <div className="formField">
          <label htmlFor="name">Enter your name: </label>
          <input type="text" name="name" id="name" placeholder="Your Name Here" required/>
        </div>
        <div className="formField">
          <label htmlFor="email">Enter your email: </label>
          <input type="email" name="email" id="email" placeholder="Your Email Here" required/>
        </div>
        <div className="submitButton">
          <input type="submit" value="Subscribe!"/>
        </div>
      </form>
    </div>
  )
}

export default Newsletter;
