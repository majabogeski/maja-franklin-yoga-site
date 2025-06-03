import Head from 'next/head'
import { useEffect, useRef } from 'react'
import styles from './BookFreeSession.module.css'

export default function BookFreeSession() {
  const calendlyRef = useRef(null)

  useEffect(() => {
    const scriptSrc = 'https://assets.calendly.com/assets/external/widget.js'

    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script')
      script.src = scriptSrc
      script.async = true
      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/majafranklinyoga/30min',
            parentElement: calendlyRef.current,
            prefill: {},
            utm: {}
          })
        }
      }
      document.head.appendChild(script)
    } else {
      // If script already loaded
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/majafranklinyoga/30min',
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {}
        })
      }
    }
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

      <main className={styles.main}>
        <h1 className={styles.heading}>Book Your Free 45-Minute Session</h1>
        <p className={styles.text}>
          Let’s talk about what you need and how yoga, holistic coaching, or both can support you. I’d love to meet you!
        </p>

        {/* Calendly will render into this div */}
        <div ref={calendlyRef} className={styles.calendlyWidget} />
      </main>
    </>
  )
}
