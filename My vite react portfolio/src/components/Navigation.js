import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Navigation.css";

function Navigation() {
    return (
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About Me
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/resume" className="nav-link">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navigation;