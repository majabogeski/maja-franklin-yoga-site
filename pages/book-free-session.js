import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import styles from './BookFreeSession.module.css'

export default function BookFreeSession() {
  const calendlyRef = useRef(null)
  const [daysLeft, setDaysLeft] = useState(null)

  useEffect(() => {
    const scriptSrc = 'https://assets.calendly.com/assets/external/widget.js'

    const loadCalendly = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/majafranklinyoga/30min',
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {}
        })
      }
    }

    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script')
      script.src = scriptSrc
      script.async = true
      script.onload = loadCalendly
      document.head.appendChild(script)
    } else {
      loadCalendly()
    }

    const today = new Date()
    const daysLeftThisWeek = 6 - today.getDay() + 1
    setDaysLeft(daysLeftThisWeek)
  }, [])

  return (
    <>
      <Head>
        <title>Book a Free Session | Maja Franklin</title>
        <meta
          name="description"
          content="Book a free 45-minute holistic coaching session with Maja Franklin."
        />
      </Head>

      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.videoBackground}
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for contrast */}
      <div className={styles.videoOverlay} />

      <main className={styles.main}>
      <h1 className={`${styles.heading} ${styles.fadeSlideUp}`}>
        <span className={styles.highlight}>Book Your Free 45-Minute Session</span>
      </h1>

      <p className={styles.text}>
      <span className={`${styles.highlightBackground} ${styles.fadeSlideUp} ${styles.fadeDelay}`}>
        I’m excited to meet you and support your journey—let’s get started!
      </span>
      </p>

        <div ref={calendlyRef} className={styles.calendlyWidget} />

        {daysLeft !== null && (
         <p className={styles.urgencyAnimated}>
            ⏳ Hurry! Only <strong>{daysLeft} day{daysLeft > 1 ? 's' : ''}</strong> left this week to claim your free session.
          </p>
        )}
        <p className={`${styles.contactInfo} ${styles.fadeSlideUp} ${styles.fadeDelayLonger}`}>
          Prefer to talk? Text or call me at <a href="tel:5104266579">(510) 426-6579</a>
        </p>

      </main>
    </>
  )
}
