import React from "react";
import "../CSS/Resume.css";

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <div className="proficiencies">
        <h3>Proficiencies</h3>
        <ul>
          <li>Front-End Development</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
        </ul>
      </div>
      <div className="download">
        <h3>Download Resume</h3>
        <a href="/placeholder.pdf" download>
          Download PDF
        </a>
      </div>
    </section>
  );
}

export default Resume;