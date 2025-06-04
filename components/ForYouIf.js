import React from "react";
import styles from "./ForYouIf.module.css";
import Link from 'next/link'

const ForYouIf = () => {
  return (
    <section className={styles.forYouIf}>
      <img
        src="/ThisIsForYou.jpg"
        alt="Calm mom reflecting"
        className={styles.image}
      />

      <div className="copyDiv">
        <h2 className="title">This Is For You If You...</h2>
        <ul className="bullets">
          <li>Feel overwhelmed and stretched thin by everything on your plate</li>
          <li>Are always giving but rarely pause to receive</li>
          <li>Wish you could feel more calm, present, and emotionally available</li>
          <li>Want simple ways to stay grounded when life gets hectic</li>
          <li>Crave space to breathe, reflect, and get clear on your life priorities — for yourself and your family</li>
          <li>Are ready to find a balance that feels just right — for you and the ones you love</li>
        </ul>
        <Link href="/book-free-session" className="button"target="_blank" rel="noopener noreferrer">
          Book Free Session
        </Link>
      </div>
    </section>
  );
};

export default ForYouIf;
