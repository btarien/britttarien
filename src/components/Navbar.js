import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className="navbar">
        <i
          className={click ? "fas fa-times" : "fas fa-bars"}
          onClick={handleClick}
        ></i>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="home" className="nav-link" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-link" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="resume" className="nav-link" onClick={closeMobileMenu}>
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link to="portfolio" className="nav-link" onClick={closeMobileMenu}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" className="nav-link" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
