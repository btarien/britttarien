import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div id="contact">
      <div className="contact-container">
        <h1>Contact</h1>
        <div className="contact-info">
          <span>
            <i className="fas fa-envelope"></i>
          </span>
          <p>britt.tarien@gmail.com</p>
        </div>
        <div className="contact-info">
          <i className="fab fa-linkedin"></i>
          <p>linkedin.com/in/britt-tarien</p>
        </div>
        <div className="contact-info">
          <i className="fab fa-github"></i>
          <p>github.com/btarien</p>
        </div>
      </div>
    </div>
  );
}
