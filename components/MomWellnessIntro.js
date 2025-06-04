import React from "react";
import styles from "./MomWellnessIntro.module.css";
import Link from 'next/link'


const MomWellnessIntro = () => {
  return (
    <section className={`sectionDiv ${styles.sectionDivBrown}`}>
      <div className="contentWrapper">
      <div className="copyDiv">
      <h2 className="title">
        For Moms Who Never Stop Giving, It’s Time to Take Care of You, Too
      </h2>

      <p className={styles.paragraph}>
        Discover how just a few mindful breaths can shift your entire day—even with a packed schedule.
      </p>

      <p className={styles.paragraph}>
        I work with high-achieving moms who want <strong>less stress</strong>, <strong>more grounding</strong>, and the ability to truly thrive—at home and at work.
      </p>

      <p className={styles.paragraph}>
        You’re not just looking for relief.
        You want real tools to support your physical, emotional, and spiritual well-being—so you can show up fully for yourself and your family.
      </p>

      <p className={`${styles.interMedium}`}>
      Find calm in the chaos — start with one breath.
      </p>
 
        <Link href="/book-free-session" className="button"target="_blank" rel="noopener noreferrer">
          Book Free Session
        </Link>
  
      </div>
      </div>
    </section>
  );
};

export default MomWellnessIntro;
