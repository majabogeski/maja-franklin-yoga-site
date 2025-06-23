import styles from './Hero.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaYoutube, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
      <Image
        src="/majafranklinyogahero.jpg"
        alt="Maja Franklin by the water"
        width={1571}
        height={2158}
        priority 
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
        
       

        <Link href="/book-free-session"  passHref target="_blank" rel="noopener noreferrer" >
            <button className="cta">Book Free Session</button>
        </Link>
        <div className={styles.phoneUnderCta}>
          Prefer to talk?{" "}
          <a href="tel:+15104266579">510-426-6579</a>
        </div>
      
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
        <div className={styles.phoneNumber}>
            <a href="tel:5104266579" aria-label="Call Maja Franklin">
              510-426-6579
            </a>
        </div>
        
      </div>
      
    </section>
  )
}
