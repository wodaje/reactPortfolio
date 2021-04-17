import React from "react";
import projects from "../Projects.json";
import Project from "../components/Project";
import "../css/styles.css";

function Portfolio() {
  return (
    <div className="row mt-5">
      {projects.map((project) => (
        <Project
          key={project.readme}
          readme={project.readme}
          readmeText={project.readmeText}
          deployed={project.deployed}
          deployedText={project.deployedText}
          imgSrc={require(project.imgSrc)}
          alt={project.alt}
          github={project.github}
          githubText={project.githubText}
        />
      ))}
    </div>
  );
}

export default Portfolio;
