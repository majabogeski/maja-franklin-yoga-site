import Head from 'next/head'
import dynamic from 'next/dynamic'
import Hero from '../components/Hero'

const MomMessage = dynamic(() => import('../components/MomMessage'), {
  loading: () => <p>Loading...</p>,
})
const MomWellnessIntro = dynamic(() => import('../components/MomWellnessIntro'), {
  loading: () => <p>Loading...</p>,
})
const ForYouIf = dynamic(() => import('../components/ForYouIf'), {
  loading: () => <p>Loading...</p>,
})
const Choices = dynamic(() => import('../components/Choices'), {
  loading: () => <p>Loading...</p>,
})
const Testimonials = dynamic(() => import('../components/Testimonials'), {
  loading: () => <p>Loading...</p>,
})
const WhatIOffer = dynamic(() => import('../components/WhatIOffer'), {
  loading: () => <p>Loading...</p>,
})
const MyJourney = dynamic(() => import('../components/MyJourney'), {
  loading: () => <p>Loading...</p>,
})
const WhyItMatters = dynamic(() => import('../components/WhyItMatters'), {
  loading: () => <p>Loading...</p>,
})
const WhyItWorks = dynamic(() => import('../components/WhyItWorks'), {
  loading: () => <p>Loading...</p>,
})
const StickyButton = dynamic(() => import('../components/StickyButton'), {
  loading: () => <p>Loading...</p>,
})
const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return (
    <>
      <Head>
        {/* Favicons */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        

        {/* Page Metadata */}
        <title>Maja Franklin | Yoga & Holistic Coaching for Moms in Bay Area</title>
        <meta
          name="description"
          content="Helping busy moms find calm, balance, and joy through breathwork, yoga, and mindful routines."
        />
        <meta name="google-site-verification" content="b86-vPVZit-M99xwIhR7xGVLYl9SceuiPVVgg6s52hM" />
        <meta
          name="keywords"
          content="yoga for moms, private yoga, holistic coaching, breathwork, mindfulness, stress relief, mom burnout, nervous system reset, Maja Franklin, Maya Franklin, yoga for women, finding balance"
        />
        <meta name="author" content="Maja Franklin" />
        <link rel="canonical" href="https://www.majafranklinyoga.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Maja Franklin | Yoga & Holistic Coaching for Moms" />
        <meta
          property="og:description"
          content="Helping busy moms find calm, balance, and joy through breathwork, yoga, and mindful routines."
        />
        <meta property="og:url" content="https://www.majafranklinyoga.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.majafranklinyoga.com/majafranklinyogahero.jpg" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maja Franklin | Yoga & Holistic Coaching for Moms" />
        <meta
          name="twitter:description"
          content="Helping busy moms find calm, balance, and joy through yoga, breathwork, and mindful routines."
        />
        <meta name="twitter:image" content="https://www.majafranklinyoga.com/majafranklinyogahero.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Maja Franklin Yoga",
              "url": "https://www.majafranklinyoga.com",
              "logo": "https://www.majafranklinyoga.com/logo.png"  
            }),
          }}
        />


        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Maja Franklin",
              "url": "https://www.majafranklinyoga.com/",
              "sameAs": [
                "https://www.facebook.com/yourprofile",
                "https://www.instagram.com/yourprofile",
              ],
              "jobTitle": "Yoga & Holistic Coach",
              "description": "Helping busy moms find calm, balance, and joy through breathwork, yoga, and mindful routines."
            }),
          }}
        />
      </Head>

      <main>
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
        <StickyButton/>
      </main>
    </>
  )
}
