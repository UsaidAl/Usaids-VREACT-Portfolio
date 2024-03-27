import React from "react";
import "../CSS/Header.css";

function Header() {
  return (
    <header>
      <h1>Usaid's React Portfolio!</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;