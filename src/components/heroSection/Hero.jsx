import React from "react";
import styles from "./Hero.module.css";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className={styles.herodiv}>
      <div className={styles.hero}>
        <motion.h1
          initial={{ scale: 0, y: -100 }}
          animate={{
            scale: 1,
            y: 1,
          }}
          transition={{ duration: 1, delay: 1 }}
        >
          Frontend web developer
        </motion.h1>
        <motion.p
          initial={{ scale: 0, y: -100 }}
          animate={{
            scale: 1,
            y: 1,
          }}
          transition={{ duration: 1, delay: 1 }}
        >
          Expert in front end developments
        </motion.p>
        <motion.div
          initial={{ scale: 0, y: 100 }}
          animate={{
            scale: 1,
            y: 1,
          }}
          transition={{ duration: 1, delay: 1 }}
          className={styles.hero_btn}
        >
          <button
            className={styles.contact}
            onClick={() => scroll.scrollToBottom()}
          >
            Let's Contact
          </button>
          <button
            className={styles.project}
            onClick={() => scroll.scrollTo(3350)}
          >
            My Projects
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
