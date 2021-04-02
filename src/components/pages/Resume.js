import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Resume.css";
import ProgressBar from "../ProgressBar.js";

export default function Resume() {
  return (
    <div id="resume">
      <ScrollAnimation animateIn="fadeInUp" offset={300} animateOnce={true}>
        <div className="education">
          <h1>Education</h1>
          <div className="lewagon">
            <h2>Le Wagon - Munich</h2>
            <p>Full-stack web development coding bootcamp</p>
            <p>Completion: December 2020</p>
          </div>
          <div className="davis">
            <h2>University of Californis, Davis</h2>
            <p>Bachelor of Science in Mechanical Engineering</p>
            <p>Graduation year: 2018</p>
          </div>
        </div>
      </ScrollAnimation>
      <div className="experience">
        <ScrollAnimation
          animateIn="fadeInRight"
          offset={300}
          animateOnce={true}
        >
          <h1>Employment History</h1>
          <div className="presize">
            <h2>Front-End Intern | Presize | February – August 2021</h2>
            <ul>
              <li>
                Created mathematical optimization model to determine necessary
                parameters of reactants for highest yield in complex, multi-step
                flow of consecutive chemical reactions
              </li>
              <li>
                Implemented optimization model and accompanying GUI in Python
              </li>
            </ul>
          </div>
          <div className="sri">
            <h2>
              Temporary Researcher | SRI International | May – September 2019
            </h2>
            <ul>
              <li>
                Created mathematical optimization model to determine necessary
                parameters of reactants for highest yield in complex, multi-step
                flow of consecutive chemical reactions
              </li>
              <li>
                Implemented optimization model and accompanying GUI in Python
              </li>
            </ul>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <div className="bioceryx">
            <h2>Research Engineer | BioCeryx | January – May 2019 </h2>
            <ul>
              <li>
                Tested and modified hardware elements of analyzer that performs
                biological reactions in analysis of fetal DNA
              </li>
              <li>
                Designed microfluidics chambers and performed thermal analysis
              </li>
              <li>
                Wrote Python scripts to troubleshoot analyzer malfunctions
              </li>
            </ul>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <div className="junior-specialist">
            <h2>
              Junior Specialist | UC Davis Department of Mechanical Engineering
              | June – December 2018
            </h2>
            <ul>
              <li>
                Built data fusion/filtering algorithms to model rowboat dynamics
              </li>
              <li>
                Increased accuracy by 20% and created intra-stroke data
                resolution
              </li>
              <li>Published paper in PLoS One about filtering algorithms</li>
            </ul>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <div className="uber">
            <h2>
              Mechanical Engineering Intern | Uber ATG | June – December 2017
            </h2>
            <ul>
              <li>
                Designed, manufactured, and tested instrumentation for
                autonomous semi-trucks using modern CAD/CAM and vibration
                analysis software
              </li>
              <li>
                Designed and built thermal test chamber for validating LiDAR
                units
              </li>
            </ul>
          </div>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="skills">
          <h1>Skills</h1>
          <ProgressBar text="JavaScript & Typescript" percent={90} />
          <ProgressBar text="React" percent={90} />
          <ProgressBar text="Redux" percent={80} />
          <ProgressBar text="HTML & CSS" percent={100} />
          <ProgressBar text="Ruby & RoR" percent={70} />
          <ProgressBar text="SQL" percent={100} />
          <ProgressBar text="Git" percent={80} />
          <ProgressBar text="Python" percent={50} />
        </div>
      </ScrollAnimation>
    </div>
  );
}
