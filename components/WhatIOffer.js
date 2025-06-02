import React from "react";
import styles from "./WhatIOffer.module.css";
import Link from 'next/link'

const WhatIOffer = () => {
  return (
    <section className={`sectionDiv ${styles.sectionLightBrown}`}> 
     <div className="contentWrapper">
      <div className="copyDiv">
            <h2 className="title">How I Help</h2>
            
          <p>
          I guide high-achieving, caring moms who do it all to thrive from the inside out — so you can finally let go of the overwhelm and fully step into support, presence, and ease
          </p>
          <ul className="bullets">
          <li><strong>Exhale the pressure</strong> of doing it all and feel <strong>truly supported</strong></li>
          <li>Rediscover the power of <strong>being, not doing</strong>, in your everyday life</li>
          <li>Feel <strong>at home in your body</strong> again — without needing to push, fix, or prove anything</li>
          <li>Use <strong>simple breath and movement</strong> to stay <strong>grounded and calm</strong>, even when life feels chaotic</li>
          <li><strong>Soothe your nervous system</strong> so you can show up <strong>calm and present</strong> — for yourself and your family</li>
          <li>Reconnect to <strong>what matters most</strong> — not society’s version of balance, but <strong>yours</strong></li>
          <li>Carve out space to <strong>rest, reflect, and reset</strong> — without guilt</li>

          </ul>
          <Link href="https://innermovementcoaching.com/contact" className="button"target="_blank" rel="noopener noreferrer">
            Book Free Session
          </Link>
        </div>
      </div>
   
    </section>
  );
};

export default WhatIOffer;
