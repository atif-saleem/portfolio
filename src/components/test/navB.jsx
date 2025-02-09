import React from "react";
import { useState } from "react";

import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { motion } from "motion/react";

import "./navB.css";
const NavB = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        y: 25,
      }}
      transition={{
        duration: 1,
        delay: 1,
      }}
      className={`navbar ${open ? "mobile" : ""}`}
    >
      <div className="logo">
        <img src="/images/atif2.png" alt="" />
      </div>

      <ul className={`menu ${open ? "open" : ""}`}>
        <li>
          <a to="#about" onClick={() => scroll.scrollTo(1000)}>
            About
          </a>
        </li>
        <li>
          <a to="#projects" onClick={() => scroll.scrollTo(3550)}>
            Projects
          </a>
        </li>
        <li>
          <a to="#services" onClick={() => scroll.scrollTo(1550)}>
            Services
          </a>
        </li>
        <li>
          <a to="#testimonials" onClick={() => scroll.scrollTo(5550)}>
            Testimonials
          </a>
        </li>
      </ul>

      <button className="apply-btn" onClick={() => scroll.scrollToBottom()}>
        {" "}
        Let's Contact
      </button>

      {/* Toggle button for mobile view */}
      <button className="toggle-btn" onClick={() => setOpen(!open)}>
        {open ? "❌" : "☰"}
      </button>
    </motion.nav>
  );
};

export default NavB;
