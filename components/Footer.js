import React, { useState } from "react";
import styles from "./Footer.module.css";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // "success", "error", or null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/xkgbwrqy", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLogos}>
          <img
            src="/MajaLogoWhite_fixed_crop.svg"
            alt="Maja Franklin Logo"
          />
        </div>

        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <input
            className={styles.signupInput}
            type="email"
            name="email"
            placeholder="Your email"
            required
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className={styles.signupButton} type="submit">
            Sign Up
          </button>
        </form>

        {status === "success" && (
          <p style={{ textAlign: "center", color: "#fff", marginTop: "0.5rem" }}>
            ✅ Thanks! You’re signed up.
          </p>
        )}
        {status === "error" && (
          <p style={{ textAlign: "center", color: "red", marginTop: "0.5rem" }}>
            ❌ Oops! Something went wrong.
          </p>
        )}

        <div className={styles.socialLinks}>
          <a
            href="https://www.youtube.com/@majafranklinyoga"
            target="_blank"
            aria-label="YouTube"
            rel="noreferrer"
            className={styles.socialIcon}
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/majafranklinyoga"
            target="_blank"
            aria-label="Instagram"
            rel="noreferrer"
            className={styles.socialIcon}
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:majafranklinyoga@gmail.com"
            aria-label="Email"
            className={styles.socialIcon}
          >
            <MdEmail />
          </a>
        </div>
      </div>

      <div className={styles.legalText}>
        Maja Franklin — Yoga Teacher + Holistic Coach | All rights reserved ©
        2015–2025
      </div>
    </footer>
  );
};

export default Footer;
