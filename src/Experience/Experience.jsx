import React from 'react';
import './Experience.scss';
function Experience() {
    return (
      <div id='experience'>
        <h1>My Experience</h1>
        <div className="cards">
          <h1>Full Stack Developer</h1>
          <h2>IIT Bombay</h2>
          <h3>January 2022 - Present</h3>
          <p>
            I am right now working as a full stack developer working with MERN
            stack to build user facing apps.
          </p>
        </div>
        <div className="cards">
          <h1>Front End Developer</h1>
          <h2>GoIgnis</h2>
          <h3>August 2021 - September 2021</h3>
          <p>
            I worked at Goignis as a front end developer developing their main website.
          </p>
        </div>
        <div className="cards">
          <h1>Front End Developer</h1>
          <h2>Go4Garage</h2>
          <h3>May 2022 - August 2021</h3>
          <p>
            i worked at Go4Garage as a front end developer developing their main website
          </p>
        </div>
      </div>
    );
}

export default Experience;
