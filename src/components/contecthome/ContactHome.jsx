import React from "react";

import styles from "./ContactHome.module.css";
import { IoLogoFacebook } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaYoutubeSquare } from "react-icons/fa";

const ContactHome = () => {
  return (
    <div className={styles.main_contact}>
      <div className={styles.left}>
        <h1>Let’s connect and create something awesome together!</h1>
        <h1>atifsaleem0008@gmail.com</h1>
        <h1>
          <a
            href="https://wa.me/923034345397"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Chat
          </a>
        </h1>
      </div>
      <div className={styles.right}>
        <a href="">
          <IoLogoFacebook />
        </a>
        <a href="">
          <FaWhatsapp />
        </a>
        <a href="">
          <SlSocialLinkedin />
        </a>
        <a href="">
          <FaYoutubeSquare />
        </a>
      </div>
    </div>
  );
};

export default ContactHome;
