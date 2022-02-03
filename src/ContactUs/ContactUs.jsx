import React from "react";
import "./ContactUs.scss";
import axios from "axios";
function ContactUs() {
  return (
    <div id="contact-us">
      <h1>Get In Touch</h1>
          <form action="" onSubmit={ e =>
          {
              e.preventDefault()
              axios.post( "https://parth-portfolio-api.herokuapp.com/contact-us", {
                  name: e.target[ 0 ].value,
                  email: e.target[ 1 ].value,
                  number: e.target[ 2 ].value,
                  message:e.target[3].value
              } ).then( res =>
              {
                  console.log("message sent")
              } ).catch( err =>
              {
                  console.log( err );
              })
      }}>
        <input type="text" placeholder="Enter your name..." />
        <br />
        <input type="email" placeholder="Enter your email..." />
        <br />
        <input type="number" placeholder="Enter your phone number..." />
        <br />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <br />
        <button type="submit">Send</button>
      </form>
      <br />
      <span>
        <a href="https://github.com/partg952">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg"
            alt=""
          />
        </a>
        <a href="https://twitter.com/Parthsh42727231">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/120px-Twitter-logo.svg.png"
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/in/parth-sharma-5b8236207/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Linkedin_circle.svg"
            alt=""
          />
        </a>
      </span>
    </div>
  );
}

export default ContactUs;
