import React from "react";
import "./About.css";
import headshot from "./media/headshot.jpeg";

export default function About() {
  return (
    <div id="about">
      <img className="headshot" src={headshot} alt="headshot" />
      <div className="info-outer-container">
        <div className="info-inner-container">
          <h1>Who is she?</h1>
          <p>
            I graduated with my Bachelor's degree in Mechanical Engineering from
            UC Davis in California a couple of years ago. After working for a
            bit, I realized that I love to code. I completed the web development
            coding bootcamp at Le Wagon in Munich last year. I have since been
            working at a startup in Munich called Presize as a Front-End Intern.
          </p>
        </div>
      </div>
    </div>
  );
}
