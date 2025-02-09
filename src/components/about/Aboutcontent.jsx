import React from "react";
import styles from "./About.module.css";
import { anticipate, motion } from "motion/react";

const Aboutcontent = () => {
  return (
    <div>
      <div className={styles.main_about}>
        <div className={styles.left}>
          <div className={styles.my_image}>
            <motion.img
              initial={{ opacity: 0, rotate: -60 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: anticipate,
              }}
              src="/images/myimage.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.right}>
          <h1>
            I’m Atif Saleem. I’m passionate about crafting exceptional websites.
            With a blend of design skills and coding expertise, I create unique
            online experiences that captivate users.
          </h1>
          <p>
            Developed and maintained high-performing, responsive hotel websites
            using HTML, CSS, JavaScript, and React, resulting in increased user
            engagement and online bookings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutcontent;
