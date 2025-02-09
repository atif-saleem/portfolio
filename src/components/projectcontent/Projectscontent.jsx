import React from "react";
import styles from "./Projectscontent.module.css";

const Projectscontent = () => {
  return (
    <div className={styles.project_main}>
      <h1>Featured Work</h1>
      <div className={styles.feature_body}>
        <div className={styles.front_left}>
          <img src={"/images/design 1.png"} alt="landingpage " />
        </div>
        <div className={styles.front_right}>
          <h3>FRONT END DESIGN</h3>
          <h1>Nike Website Redesign</h1>
          <p>
            It is just desing of landing page of react.apply the react
            components.
          </p>
          <button>
            <a href="https://contactmepage.netlify.app/" target="_blank">
              See Project Dettail
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projectscontent;
