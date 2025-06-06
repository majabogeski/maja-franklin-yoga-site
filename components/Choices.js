import styles from "./Choices.module.css";
import React from "react";
import Link from "next/link";

const Choices = () => {
  return (
    <section className={`sectionDiv ${styles.sectionDivStrong}`}>
      <div className="contentWrapper">
        <div className="copyDiv">
          <h2 className="title">You can keep pushing… or choose to:</h2>
          <ul className="bullets">
            <li><strong>Reset your nervous system</strong> with science-backed yoga and breathwork — so stress doesn’t control you</li>
            <li><strong>Build simple habits and gentle routines that actually stick</strong> that fit your life — even in the middle of school runs, meetings, and messy kitchens</li>
            <li><strong>Create unshakable calm in just 10 minutes a day</strong> with simple yoga exercises</li>
            <li><strong>Sleep deeply, wake energized,</strong> and move through life with ease and presence</li>
          </ul>

          <h2 className="title">Why This Works:</h2>
          <ul className="bullets">
            <li><strong>A unique journey for your body and soul.</strong> Each session focuses on what you need most — whether it’s calm, clarity, or gentle growth</li>
            <li><strong>Beyond the mat:</strong> I offer mindful habits to balance work, parenting, and self-care. I provide a system, a plan, and simple rituals that can fit into busy mornings or evenings</li>
            <li><strong>Backed by neuroscience:</strong> Yoga reduces inflammation, boosts resilience, and rewires your stress responses — proven by recent studies</li>
          </ul>

          {/* CTA inside copyDiv */}
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <p style={{ fontSize: "1.3rem", color: "#735240", marginBottom: "1rem" }}>
              ✨ Ready to experience this for yourself?
            </p>
           
            <Link href="/book-free-session" className="button"target="_blank" rel="noopener noreferrer">
              Book Free Session
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choices;
