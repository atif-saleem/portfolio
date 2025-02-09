import React from "react";
import styles from "./Frontend.module.css";

const Frontend = () => {
  return (
    <div>
      <div className={styles.main_services}>
        <div className={styles.services_right}>
          <h1>Services</h1>
          <h6>03</h6>
          <h1>Frontend Developer</h1>
          <p>
            Our full-stack web developer is a one-stop-shop for all web
            development needs – from creating visually stunning front-ends to
            handling complex back-end processes, making our website run smoothly
            and efficiently.
          </p>
          <h4>1.Proficient in HTML, CSS, JavaScript. Seeking Placements.</h4>
          <h4>2.Learning React.js for web development. Seeking Placements</h4>
          <h4>3.Passionate about UI/UX. Seeking front-end Placements</h4>
        </div>
        <div className={styles.services_left}>
          <img src="/images/service-02.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Frontend;
