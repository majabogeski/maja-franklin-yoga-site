import React from "react";
import styles from "./WhatIOffer.module.css";
import Link from 'next/link'

const WhatIOffer = () => {
  return (
    <section className="sectionDiv">
     <div className="contentWrapper">
      <div className="copyDiv">
            <h2 className="title">What I Offer</h2>
            
          <p>
            I guide busy, big-hearted mothers through gentle yet powerful practices that help you:
          </p>
          <ul className="bullets">
            <li>Exhale the pressure of doing it all and feel truly supported</li>
            <li>Rediscover the power of being, not doing, in your everyday life</li>
            <li>Feel at home in your body again — without needing to push, fix, or prove anything</li>
            <li>Use simple breath and movement to stay grounded and calm, even when life feels chaotic</li>
            <li>Soothe your nervous system so you can show up calm and present — for yourself and your family</li>
            <li>Reconnect to what matters most — not society’s version of balance, but yours</li>
            <li>Carve out space to rest, reflect, and reset — without guilt</li>
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
