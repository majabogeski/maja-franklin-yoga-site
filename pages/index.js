import Head from 'next/head'
import Hero from '../components/Hero'
import MomMessage from '../components/MomMessage'
import MomWellnessIntro from '../components/MomWellnessIntro'
import ForYouIf from '../components/ForYouIf'
import WhyItMatters from '../components/WhyItMatters'
import WhatIOffer from '../components/WhatIOffer'
import MyJourney from '../components/MyJourney'
import WhyItWorks from '../components/WhyItWorks'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
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

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
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
        <WhatIOffer />
        <MyJourney />
        <WhyItMatters />
        <WhyItWorks />
        <Footer />
      </div>
    </>
  )
}
