import { Activity, Heart, Sparkles } from 'lucide-react';
import styles from './WhyItWorks.module.css';
import Link from 'next/link'

export default function WhyItWorks() {
  return (
    <section className={styles.whyItWorks}>
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>Why This Works—On Every Level</h2>
      </div>

      <div className={styles.columnsRow}>
        <div className={styles.column}>
          <Activity size={64} className={styles.icon} />
          <h3 className={styles.subheading}>Physically</h3>
          <p className={styles.description}>
            Yoga soothes your nervous system, eases built-up tension, and helps your body finally exhale.
            Breath and movement reset stress at the root.
          </p>
        </div>

        <div className={styles.column}>
          <Heart size={64} className={styles.icon} />
          <h3 className={styles.subheading}>Emotionally</h3>
          <p className={styles.description}>
            Coaching helps you quiet the inner critic, shift out of overwhelm, and set clear boundaries—without guilt.
          </p>
        </div>

        <div className={styles.column}>
          <Sparkles size={64} className={styles.icon} />
          <h3 className={styles.subheading}>Spiritually</h3>
          <p className={styles.description}>
            When your body and mind align, you reconnect with your inner peace and intuition.
            That’s where real clarity lives.
          </p>
        </div>
      </div>
        

    
      <p className="claimMessage">
            ✨ Discover how this can work for you
          </p>

          <Link href="/book-free-session" className="button">
              Book Free Session
          </Link>

          {/* <Link
            href="/book-free-session"
            className="ctaLink"
            target="_blank"
            rel="noopener noreferrer"
          >
           Book your free session →
          </Link> */}
    </section>
  );
}
