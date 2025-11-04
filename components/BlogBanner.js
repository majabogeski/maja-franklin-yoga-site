import styles from "./BlogBanner.module.css";

export default function BlogBanner() {
  return (
    <div className={styles.banner}>
      <p className={styles.text}>
        🌿 Learn more + read my blog →
      </p>
      <a
        href="https://innermovementcoaching.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Visit Blog ✨
      </a>
    </div>
  );
}
