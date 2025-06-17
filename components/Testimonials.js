import { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";
import Link from "next/link";

const testimonials = [
  {
    name: "Emily R.",
    text: "Maja’s private yoga sessions, combined with coaching, helped me reconnect with my body and release stored stress. Through movement and breathwork, I was able to slow down and tune in. I now show up more grounded and present—for both my family and my work."
  },
  {
    name: "Marija G.",
    text: "The breathing exercises quiet my monkey mind instantly. I use them all the time to reset and find calm."
  },
  {
    name: "Natalie S.",
    text: "Maja guided me to focus on what matters, let go of stress, and feel more balanced and confident."
  },
  {
    name: "Laxmi G.",
    text: "The experience was absolutely amazing—exactly what I was looking for! The class was both refreshing and rejuvenating, leaving me feeling more balanced and energized. I truly appreciate the guidance and atmosphere, and I will definitely continue attending."
  },
  {
    name: "Nancy G.",
    text: "Working with Maja has been a transformative experience. Her support helped me stay focused, break through mental blocks, and believe in my potential—even in tough moments. I now feel more capable, clear, and confident."
  },
  {
    name: "Joanne B.",
    text: "Wonderful way to go into the rest of the evening! Relaxed, stretched, strengthened in gentle ways and calmed."
  },
  {
    name: "Jes D.",
    text: "Great class, very restorative, calming and just the right amount of challenging. Maja is a great instructor!"
  },
  {
    name: "Jackie P.",
    text: "Working with Maja has been a transformative experience in my lifelong struggle with time management... Thanks to her guidance and encouragement, I am learning to guide myself in healthier and more constructive ways. I absolutely recommend Maja as a life coach to anyone looking to enhance their life and reach their full potential!"
  }
];

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const [initialCount, setInitialCount] = useState(6);

  useEffect(() => {
    const updateCount = () => {
      setInitialCount(window.innerWidth < 768 ? 3 : 6);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const toggleTestimonials = () => setShowAll(!showAll);
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, initialCount);

  return (
    <section
      className={styles.testimonials}
      aria-label="Client testimonials about yoga and life coaching with Maja"
    >
      <h2 className="title">From My Clients</h2>
      <div className={styles.grid}>
        {visibleTestimonials.map((t, index) => (
          <div key={index} className={styles.card}>
            <blockquote className={styles.text}>“{t.text}”</blockquote>
            <cite className={styles.name}>– {t.name}</cite>
          </div>
        ))}
      </div>

      {testimonials.length > initialCount && (
        <button className={styles.showMoreBtn} onClick={toggleTestimonials}>
          {showAll ? "Show Less" : "Show More Testimonials"}
        </button>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Maja Franklin Yoga",
            "url": "https://www.majafranklinyoga.com/",
            "sameAs": [
              "https://www.instagram.com/majafranklinyoga",
              "https://www.youtube.com/@majafranklinyoga"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Shoreline CT",
              "addressLocality": "Richmond",
              "addressRegion": "CA",
              "postalCode": "94804",
              "addressCountry": "US"
            },
            "knowsAbout": [
              "Private Yoga",
              "Life Coaching",
              "Mindfulness",
              "Breathwork",
              "Stress Management",
              "Holistic Coaching",
              "Motherhood Support",
              "Wellness",
              "Meditation"
            ],
            "review": testimonials.map(t => ({
              "@type": "Review",
              "reviewBody": t.text,
              "author": { "@type": "Person", "name": t.name },
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
            })),
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": testimonials.length
            }
          })
        }}
      />
    </section>
  );
};

export default Testimonials;
