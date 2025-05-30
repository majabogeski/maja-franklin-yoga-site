import styles from './Hero.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaYoutube, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
      <img
          src="/majafranklinyogahero.jpg"
          alt="Maja Franklin by the water"
          width={1571}
          height={2158}
          layout="responsive"
          className={styles.heroImage}
        />

        <div className={styles.logo}>
            <img
              src="/majafranklinlogo.svg"
              alt="Maja Franklin Yoga Logo"
              className={styles.logoImage}
            />
        </div>
   
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>
          I help busy <br /> moms find <br />
          <span>
            <span className={styles.cream}>calm, </span>
            <span className={styles.cream}>balance, </span>
            <span className={styles.white}>and </span>
            <span className={styles.cream}>peace.</span>
          </span>
        </h1>
        <p className={styles.subtitle}>
          Using simple tools to reduce stress, restore your well-being, and enjoy motherhood—without burning out.
        </p>
        <Link href="https://innermovementcoaching.com/contact" legacyBehavior passHref>
          <a target="_blank" rel="noopener noreferrer">
            <button className="cta">Book Free Session</button>
          </a>
        </Link>
      </div>

      <div className={styles.socialLinks}>
        <a href="https://www.youtube.com/@majafranklinyoga" target="_blank" aria-label="YouTube" rel="noreferrer" className={styles.socialIcon}>
          <FaYoutube />
        </a>
        <a href="https://www.instagram.com/majafranklinyoga" target="_blank" aria-label="Instagram" rel="noreferrer" className={styles.socialIcon}>
          <FaInstagram />
        </a>
        <a href="mailto:majafranklinyoga@gmail.com" aria-label="Email" className={styles.socialIcon}>
          <MdEmail />
        </a>
      </div>
    </section>
  )
}
