import React from "react";
import styles from "./ServiceComponets.module.css";

const serviceComponets = () => {
  return (
    <div>
      <div className={styles.main_services}>
        <div className={styles.services_right}>
          <h1>Services</h1>
          <h6>01</h6>
          <h1>Frontend Developer</h1>
          <p>
            Our web developer is proficient in designing beautiful and intuitive
            interfaces that enhance user experience, making our website a
            pleasure to navigate.
          </p>
          <h4>1.Proficient in HTML, CSS, and JavaScript.</h4>
          <h4>2.Learning React for modern web apps.</h4>
          <h4>3. Focused on responsive web design.</h4>
        </div>
        <div className={styles.services_left}>
          <img src="/images/serviceimg.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default serviceComponets;
