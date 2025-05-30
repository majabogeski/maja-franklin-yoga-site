import React from "react";
import styles from "./WhyItMatters.module.css";
import Link from 'next/link'

const WhyItMatters = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <img
          src="/whyitmatters.jpg" // replace with your actual image filename
          alt="Peaceful yoga moment"
          className={styles.heroImage}
        />
      </div>

      <div className={styles.right}>
        <h2 className={styles.title}>It’s More Than Just Stress Relief</h2>
        <p className={styles.subtitle}>
        Blending ancient yoga wisdom with coaching that nurtures mind, body, and spirit, I help you discover balance and cultivate calm and joy—physically, emotionally, and spiritually.
        </p>
        
        <Link href="https://innermovementcoaching.com/contact" passHref target="_blank" rel="noopener noreferrer">
        <button className="cta">Book Free Session</button>
      </Link>
      </div>
    </section>
  );
};

export default WhyItMatters;
