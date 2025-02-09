import React from "react";
import styles from "./Review.module.css";

const Review = () => {
  return (
    <div>
      <h1 className={styles.headingsh1}>See why they love my work</h1>
      <div className={styles.main_review}>
        <div className={styles.left}>
          <h3>
            Turpis gravida mauris neque phasellus ut praesent ullamcorper a
            amet. Consequat amet turpis vitae pretium viverra. Platea non
            imperdiet fringilla nunc lacus congue mauris in vitae.
          </h3>
          <div className={styles.footer}>
            <img src="/images/testimonial-01.jpg" alt="" />
            <h3>Jessica</h3>
          </div>
        </div>
        <div className={styles.right}>
          <h3>
            Turpis gravida mauris neque phasellus ut praesent ullamcorper a
            amet. Consequat amet turpis vitae pretium viverra. Platea non
            imperdiet fringilla nunc lacus congue mauris in vitae.
          </h3>
          <div className={styles.footer}>
            <img src="/images/testimonial-02.jpg" alt="" />
            <h3>Miguel</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
