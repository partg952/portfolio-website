import React from "react";
import "./AboutMe.scss";
function AboutMe() {
  return (
    <div id="about-me">
      <h1>About Me</h1>
      <h4>
        I am a student of class 10 Bhai Parmanand Vidya Mandir and a Coding
        Enthusiast.I am from India.Currently working as an intern.and always
        trying <br /> to meet new developers.
      </h4>
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

export default AboutMe;
