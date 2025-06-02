import Head from 'next/head'
import Hero from '../components/Hero'
import MomMessage from '../components/MomMessage'
import MomWellnessIntro from '../components/MomWellnessIntro'
import ForYouIf from '../components/ForYouIf'
import Choices from '../components/Choices'
import Testimonials from '../components/Testimonials'
import WhyItMatters from '../components/WhyItMatters'
import WhatIOffer from '../components/WhatIOffer'
import MyJourney from '../components/MyJourney'
import WhyItWorks from '../components/WhyItWorks'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        {/* Favicons */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="maja yoga" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Page Metadata */}
        <title>Maja Franklin | Yoga & Holistic Coaching for Moms</title>
        <meta
          name="description"
          content="Helping busy moms find calm, balance, and joy through breathwork, yoga, and mindful routines."
        />
        <meta
          name="keywords"
          content="yoga for moms, private yoga, holistic coaching, breathwork, mindfulness, stress relief, mom burnout, nervous system reset, Maja Franklin, Maya Franklin, yoga for women, finding balance"
        />
        <meta name="author" content="Maja Franklin" />

        {/* Open Graph */}
        <meta property="og:title" content="Maja Franklin | Yoga & Holistic Coaching for Moms" />
        <meta
          property="og:description"
          content="Helping busy moms find calm, balance, and joy through breathwork, yoga, and mindful routines."
        />
        <meta property="og:url" content="https://www.majafranklinyoga.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.majafranklinyoga.com/majafranklinyogahero.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maja Franklin | Yoga & Holistic Coaching for Moms" />
        <meta
          name="twitter:description"
          content="Helping busy moms find calm, balance, and joy through yoga, breathwork, and mindful routines."
        />
        <meta name="twitter:image" content="https://www.majafranklinyoga.com/majafranklinyogahero.jpg" />
      </Head>

      <div>
        <Hero />
        <MomMessage />
        <MomWellnessIntro />
        <ForYouIf />
        <Choices />
        <Testimonials />
        <WhatIOffer />
        <MyJourney />
        <WhyItMatters />
        <WhyItWorks />
        <Footer />
      </div>
    </>
  )
}
