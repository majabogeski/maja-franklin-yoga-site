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
      <div>
        <Head>
          <title>Maja Franklin Yoga</title>
          <meta name="description" content="Helping busy moms find calm, balance, and peace" />
        </Head>
        <Hero />
        <MomMessage />
        <MomWellnessIntro /> 
        <ForYouIf />
        <WhatIOffer />
        <MyJourney />
        <WhyItMatters />
        <WhyItWorks/>
        <Footer />
      </div>
    </>
  )
}
