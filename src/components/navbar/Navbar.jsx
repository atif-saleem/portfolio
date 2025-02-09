import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useRef } from "react";
import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { motion } from "motion/react";

const Navbar = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
  };
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <motion.header
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        y: 25,
      }}
      transition={{
        duration: 1,
        delay: 1,
      }}
    >
      <div className={styles.logoo}>
        <img src="/images/atif2.png" alt="" />
      </div>
      <nav className={styles.nav} ref={navRef}>
        <Link to="/">
          <img src="/images/atif2.png" alt="Logo" className={styles.logo} />
        </Link>

        <ul>
          <li>
            <Link to="#about" onClick={() => scroll.scrollTo(1000)}>
              About
            </Link>
          </li>
          <li>
            <Link to="#projects" onClick={() => scroll.scrollTo(3550)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="#services" onClick={() => scroll.scrollTo(1550)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="#testimonials" onClick={() => scroll.scrollTo(5550)}>
              Testimonials
            </Link>
          </li>
        </ul>

        <button
          className={styles.contactBtn}
          onClick={() => scroll.scrollToBottom()}
        >
          Let's Contact
        </button>
        <button
          className={`${styles.nav_btn} ${styles.nav_close_btn}`}
          onClick={showNavBar}
        >
          <FaTimes />
        </button>
      </nav>
      <button className={styles.nav_btn} onClick={showNavBar}>
        <FaBars />
      </button>
    </motion.header>
  );
};
export default Navbar;
