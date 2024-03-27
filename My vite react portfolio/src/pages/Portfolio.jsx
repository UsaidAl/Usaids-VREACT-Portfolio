import React from "react";
import "../CSS/Portfolio.css";

function Portfolio() {
  const projects = [
    {
      title: "Sakura Stream",
      description: "This team project was created using TailwindCSS, JavaScript, Vite, Local Storage and an anime API.",
      githubLink: "https://github.com/tyniaps/sakura-stream",
    },
    {
      title: "Recipe Translator",
      description: "This team project was created using HTML, TailwindCSS, Jquery and a rapidAPI.",
      githubLink: "https://github.com/BLealan/recipe-translator",
    },
    {
      title: "My Quiz",
      description: "A simple quiz game.",
      githubLink: "https://github.com/UsaidAl/My-Quiz",
    },
    {
      title: "Pro READme-Gen",
      description: "This tool generates a formatted readme document.",
      githubLink: "https://github.com/UsaidAl/ProREADme-Gen",
    },
    {
      title: "International Weather Forecaster",
      description: "A website designed to check the weather in any given city over a 5 day period.",
      githubLink: "https://github.com/UsaidAl/International-Weather-Forecaster",
    },
    {
      title: "Day2Day Planner",
      description: "A website designed to plan out your day and save the notes for later reminders.",
      githubLink: "https://github.com/UsaidAl/Day2Day-Planner",
    },
  ];

  return (
    <section id="portfolio">
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
          {/* Add other project details and links here */}
        </div>
      ))}
    </section>
  );
}

export default Portfolio;