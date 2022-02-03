import React from "react";
import "./Navbar.scss";
import { useEffect } from "react";
import { MenuOpen } from "@material-ui/icons";
function Navbar() {
  window.onscroll = () => {
    if (window.scrollY > 30) {
      document.getElementById("nav").classList.add("nav-colored");
    } else {
      document.getElementById("nav").classList.remove("nav-colored");
    }
  };
  return (
    <nav id="nav">
      <h1>Parth Sharma</h1>
      <span id="span">
        <a href="#skills-parent">Skills</a>
        <br />
        <a href="#about-me">About Me</a>
        <br />
        <a href="#experience">Experience</a>
        <br />
        <a href="#contact-us">Contact Me</a>
        <br />
        <button
          id="close-menu"
          onFocus={() => {
            document.getElementById("span").style.transform =
              "translateX(400px)";
          }}
        >
          <MenuOpen />
        </button>
      </span>
      <button
        id="open-menu"
        onFocus={() => {
          document.getElementById("span").style.transform = "translateX(0)";
        }}
      >
        <MenuOpen />
      </button>
    </nav>
  );
}

export default Navbar;
