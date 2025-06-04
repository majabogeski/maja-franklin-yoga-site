import Link from 'next/link';
import styles from './StickyButton.module.css';

export default function StickyButton() {
  return (
    <Link
      href="/book-free-session"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.verticalStickyTab}
    >
      <span className={styles.verticalTextFlip}>Claim Calm</span>
    </Link>
  );
}
