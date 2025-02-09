import React, { useEffect, useState } from "react";
import "./App.css";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button"; //Add this line Here

// import { DonutCursor } from "react-cool-cursors";

import { motion, transform } from "motion/react";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/Projects/Projects";
import Services from "./pages/services/Services";
import Experiancecom from "./components/experienceProjects/Experiancecom";
import Testimonials from "./pages/testimonials/testimonials";
import ContactHome from "./components/contecthome/ContactHome";
import ContactPage from "./components/contactpage/ContactPage";
import MainFooter from "./components/mainfooter/MainFooter";

const App = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  // console.log(mousePosition);
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };

  return (
    <>
      <div className="main">
        <div className="overlay">
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
          </Routes> */}
          <Home />
          <About />
          <Services />
          <Projects />

          <ScrollUpButton />
          <Experiancecom />
          <Testimonials />
          <ContactPage />
          <ContactHome />
          <MainFooter />
          <motion.div
            className="custom_cursor"
            variants={variants}
            transition={{ duration: 0.1 }}
            animate="default"
          />
        </div>
      </div>

      {/* <DonutCursor TransitionTime={0.1} color="green" size={30} /> */}
    </>
  );
};

export default App;
