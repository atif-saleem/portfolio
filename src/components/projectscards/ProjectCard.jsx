import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ src, heading, href, h1 }) => {
  return (
    <div>
      <div class={styles.column}>
        <div class={styles.card}>
          <img src={src} alt="projects" />
          <h4>{heading}</h4>
          <a href={href} target="_blank">
            <h1>{h1}</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
