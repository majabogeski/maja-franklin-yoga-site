import React from "react";
import styles from "./Footer.module.css";
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
<footer className={styles.footer}>
  <div className={styles.footerTop}>
    <div className={styles.footerLogos}>
      <img src="/MajaLogoWhite_fixed_crop.svg" alt="Maja Franklin Logo" />
    </div>

    <form className={styles.signupForm} action="/signup" method="POST">
      <input
        className={styles.signupInput}
        type="email"
        name="email"
        placeholder="Your email"
        required
        aria-label="Email address"
      />
      <button className={styles.signupButton} type="submit">
        Sign Up
      </button>
    </form>

    <div className={styles.socialLinks}>
      <a href="https://www.youtube.com/@majafranklinyoga" target="_blank" aria-label="YouTube" rel="noreferrer" className={styles.socialIcon}>
        <FaYoutube />
      </a>
      <a href="https://www.instagram.com/majafranklinyoga" target="_blank" aria-label="Instagram" rel="noreferrer" className={styles.socialIcon}>
        <FaInstagram />
      </a>
      <a href="mailto:majafranklinyoga@gmail.com" aria-label="Email" className={styles.socialIcon}>
        <MdEmail />
      </a>
    </div>
  </div>

  <div className={styles.legalText}>
    Maja Franklin — Yoga Teacher + Holistic Coach | All rights reserved © 2015–2025
  </div>
</footer>

  );
};

export default Footer;
