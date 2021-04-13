import React from "react";
import projects from "../Projects.json";
import Project from "../components/Project";
import "../css/styles.css";

function Portfolio() {
  return (
    <div className="pic3">
      {projects.map((project) => (
        <Project
          readme={project.readme}
          readmeText={project.readmeText}
          deployed={project.deployed}
          deployedText={project.deployedText}
          imgSrc={project.imgSrc}
          imgSrcText={project.imgSrcText}
          github={project.github}
          githubText={project.githubText}
        />
      ))}
    </div>
  );
}

export default Portfolio;
