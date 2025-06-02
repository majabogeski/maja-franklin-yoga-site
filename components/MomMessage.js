// components/MomMessage.js
import React from 'react';
import styles from './MomMessage.module.css';
import Link from 'next/link';

const MomMessage = () => {
  return (
    <section className="sectionDiv">
      <div className={`${styles.momMessageWrapper} contentWrapper`}>
        <img
          src="/WorriedMom.jpg"
          alt="Mom with child"
          className={`${styles.momMessageImage} cornerImage`}
        />
        <div className="copyDiv">
          <h2 className="title">Feeling Stretched Too Thin?</h2>
          <ul className="bullets">
            <li>Do you feel like you're constantly giving but rarely have time to fill your cup?</li>
            <li>Are your days packed with tasks, yet it still feels like there's never enough time?</li>
            <li>Do you crave a moment of peace—just for you, without the guilt?</li>
          </ul>
          <p>You're not alone.</p>
          <p>
          As a mom, I know how overwhelming it can get—juggling deadlines, family responsibilities, school runs, and still trying to be fully present for your child.
          </p>
          <p>
            I’ve been there—running on empty, holding it all together, and just craving a moment to breathe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MomMessage;
