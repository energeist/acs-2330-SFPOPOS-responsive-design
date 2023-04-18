import React from 'react';
import './Newsletter.css'

function Newsletter() {
  return (
    <section className="newsletter" aria-label="Newsletter Signup">
      <h2>Keep up to date with our monthly newsletter!</h2>
      <section className="Newsletter__text">
        <p>Get the latest news each month!</p>
        <ul>
          <li>New space listings</li>
          <li>Up-to-date hours and amenities</li>
          <li>Event listings</li>
        </ul>
      </section>
      <form action="" method="get" className="Newsletter__form" aria-labelledby="newsletter-heading">
        <h3 id="newsletter-heading">Subscribe to our newsletter</h3>
        <div className="formField">
          <label htmlFor="name">Enter your name: </label>
          <input type="text" name="name" id="name" placeholder="Your Name Here" required aria-required="true"/>
        </div>
        <div className="formField">
          <label htmlFor="email">Enter your email: </label>
          <input type="email" name="email" id="email" placeholder="Your Email Here" required aria-required="true"/>
        </div>
        <div className="formSubmit">
          <input type="submit" value="Subscribe!" aria-label="Subscribe to our newsletter"/>
        </div>
      </form>
    </section>
  )
}

export default Newsletter;
