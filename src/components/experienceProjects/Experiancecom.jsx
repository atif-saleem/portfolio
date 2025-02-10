import React from "react";
import styles from "./Experiencecom.module.css";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

const Experiancecom = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, 6, { duration: 3 });
    return () => controls.stop();
  }, []);
  const text = {
    fontSize: 64,
    color: "#4ff0b7",
  };
  return (
    <div>
      <div className={styles.main_experiance}>
        <div className={styles.experience}>
          <h1>
            <span>
              <motion.pre style={text}>{rounded}</motion.pre>
            </span>
            Month Experiance
          </h1>
        </div>
        <div className={styles.projects}>
          <h1>
            <span>
              <motion.pre style={text}>{rounded}</motion.pre>
            </span>
            Successful projects
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Experiancecom;
