import React from "react";
import styles from "./backend.module.css";

const Backend = () => {
  return (
    <div>
      <div className={styles.main_backend}>
        <div className={styles.backend_right}>
          <h6>02</h6>
          <h1>Backend Developer</h1>
          <p>
            Our web developer can handle complex server-side processes including
            database management, ensuring seamless functionality of the website.
          </p>
          <h4>1.Database Management.</h4>
          <h4>2.Proficient in PHP and PHP Frameworks.</h4>
          <h4>3. Writing quality code.</h4>
        </div>
        <div className={styles.backend_left}>
          <img src="/images/backend-01.jpg" alt="backend" />
        </div>
      </div>
    </div>
  );
};

export default Backend;
