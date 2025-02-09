import React from "react";
import Projectscontent from "../../components/projectcontent/Projectscontent";
import ProjectCard from "../../components/projectscards/ProjectCard";
import styles from "../../components/projectscards/ProjectCard.module.css";
import tictac from "/images/DESIN 2.png";
import quiz from "/images/quizapp.png";
import dicepic from "/images/dicegame.png";
import sidebar from "/images/sidebar.png";

const Projects = () => {
  return (
    <div>
      <Projectscontent />
      <div class={styles.row}>
        <ProjectCard
          src={tictac}
          heading="Game"
          href="https://atif-saleem.github.io/tick-tack-toe-game/"
          h1="TiTack Toe Game a simple projects"
        />
        <ProjectCard
          src={quiz}
          heading="Quiz App"
          href="https://atif-saleem.github.io/quizApp/"
          h1="Quiz App in Js"
        />
        <ProjectCard
          src={dicepic}
          heading="Dice Game in React"
          href="https://dicegameready.netlify.app/"
          h1="Click And Play DiceGame "
        />
        <ProjectCard
          src={sidebar}
          heading="Responsive sidebar"
          href="https://atif-saleem.github.io/sidebar-website-project-5-6/"
          h1=" Project using Html Css"
        />
      </div>
    </div>
  );
};

export default Projects;
