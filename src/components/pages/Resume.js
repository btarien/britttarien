import React, { useEffect, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Resume.css";
import ProgressBar from "../ProgressBar.js";

export default function Resume() {
  var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry.target.attributes);
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("visible");
        entry.target.style.width = "50%";
      }
    });
  });

  useEffect(() => {
    const skills = document.querySelectorAll(".bar");
    skills.forEach((skill) => {
      observer.observe(skill);
    });
  });
  return (
    <div id="resume">
      <ScrollAnimation animateIn="fadeInUp" offset={300} animateOnce={true}>
        <div className="education">
          <h1>Education</h1>
          <div className="davis">
            <h2>University of Californis, Davis</h2>
            <p>Bachelor of Science in Mechanical Engineering</p>
            <p>Graduation year: 2018</p>
          </div>
          <div className="lewagon">
            <h2>Le Wagon - Munich</h2>
            <p>Web development coding bootcamp</p>
            <p>Completion: December 2020</p>
          </div>
        </div>
      </ScrollAnimation>
      <div className="experience">
        <ScrollAnimation
          animateIn="fadeInRight"
          offset={300}
          animateOnce={true}
        >
          <h1>Experience</h1>
          <div className="sri">
            <h2>
              Temporary Researcher | SRI International | May – September 2019
            </h2>
            <ul>
              <li>
                Worked in biosciences division on SynFini which automates the
                chemical manufacturing process to produce the highest yield with
                a given stoichiometry of reactants.
              </li>
              <li>
                Implemented linear regression model in MATLAB and created
                intuitive graphical representations.
              </li>
              <li>
                Created mathematical optimization model to determine necessary
                parameters of reactants for highest yield in complex, multi-step
                flow of consecutive chemical reactions.
              </li>
              <li>
                Implemented optimization model and accompanying GUI in Python
                and Visual Basic
              </li>
            </ul>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <div className="bioceryx">
            <h2>Research Engineer | BioCeryx | January – May 2019 </h2>
            <ul>
              <li>
                Tested and modified hardware elements of an analyzer that uses
                microfluidics to perform biological reactions in analysis of
                fetal DNA from blood samples of pregnant women.
              </li>
              <li>
                Created CAD designs of microfluidics chambers and performed
                preliminary thermal analysis.
              </li>
              <li>
                Wrote Python scripts to streamline troubleshooting of analyzer
                malfunctions.
              </li>
              <li>
                Developed quality control tests for vetting new analyzers.
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
                Built data filtering algorithms written in Python that combine
                GPS and accelerometer data on an iPhone to produce more accurate
                speed and position tracking of a competition rowboat.
              </li>
              <li>
                Increased accuracy by over 20% and created intra-stroke data
                resolution.
              </li>
              <li>
                Submitted paper with Prof. Jason Moore in PLoS One about Kalman
                and complementary filters.
              </li>
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
                Member of fast-paced team of engineers, building
                electro-opto-mechanical instrumentation for autonomous
                semi-trucks.
              </li>
              <li>
                Designed, manufactured, and tested mounting brackets for various
                sensors, using modern CAD/CAM and vibration analysis software.
              </li>
              <li>
                Designed and built a thermal test chamber for acceptance
                qualification of LiDAR units.
              </li>
            </ul>
          </div>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="skills">
          <h1>Skills</h1>
          <ProgressBar text="HTML" percent={20} />
          <ProgressBar text="CSS" percent={90} />
          <ProgressBar text="JavaScript" percent={70} />
          <ProgressBar text="React" percent={60} />
          <ProgressBar text="Node.js" percent={30} />
          <ProgressBar text="Ruby" percent={10} />
          <ProgressBar text="Ruby on Rails" percent={0} />
        </div>
      </ScrollAnimation>
    </div>
  );
}
