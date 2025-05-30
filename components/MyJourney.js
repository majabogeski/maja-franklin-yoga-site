import React from "react";
import styles from "./MyJourney.module.css";

const MyJourney = () => {
  return (
    <section className={styles.myJourney}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>From Tech to Teaching Yoga: My Journey</h2>
        <p>
          For over seven years, I thrived in the fast-paced tech world as a Sr. Front-End Developer at Gap Inc.
          Just as I stepped into a long-awaited Product Manager role, I was unexpectedly laid off.
          It was bittersweet—but also the push I needed to pursue a long-held dream:
          becoming a yoga teacher and holistic coach.
        </p>
        <p>
        Rooted in years of yoga practice, training, and inner growth, I followed a calling to support women—especially moms—through the healing power of yoga’s ancient wisdom and holistic coaching. This path has brought me peace and purpose, and it’s how I help others find calm, clarity, confidence, and joy in everyday life.
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="/myjorney.jpg"
          alt="My journey from tech to yoga"
          className={styles.myJourneyImage}
        />
      </div>
    </section>
  );
};

export default MyJourney;
