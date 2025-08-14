import React from "react";
import "../css/NavBar.css";

function NavBar() {
  return (
    <header className="header">
      <div className="container">

        {/* Logo */}
        <div className="logo">
            <img src="./icon.png" alt="Akshay's Logo " className="h1-logo" />
        </div>

        {/* Navigation Menu */}
        <nav className="navbar">
        <ul className="navbar-list">
          <li><a href="#home" className="navbar-link">Home</a></li>
          <li><a href="#about" className="navbar-link">About</a></li>
          <li><a href="#skills" className="navbar-link">Skills</a></li>
          <li><a href="#experience" className="navbar-link">Experience</a></li>
          <li><a href="#education" className="navbar-link">Education</a></li>
          <li><a href="#portfolio" className="navbar-link">Portfolio</a></li>
          <li><a href="#projects" className="navbar-link">Projects</a></li>
          <li><a href="#contact" className="navbar-link">Contact</a></li>
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default NavBar;
