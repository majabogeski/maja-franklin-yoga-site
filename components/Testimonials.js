import { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";
import Link from "next/link";

const testimonials = [
  // {
  //   name: "Emily R.",
  //   text: "As a mom constantly juggling work, parenting, and never-ending to-do lists, I felt like I was running on fumes. Maja’s gentle yoga, breathwork, and coaching helped me slow down and reconnect with myself. The combination is a truly whole body–mind–soul experience. These simple but powerful tools gave me real ways to manage stress and stay grounded — even in the middle of chaos. I now show up calmer and more present, both at home and at work. Working with her has truly changed my life.",
  // },
  {
    name: "Emily R.",
    text: "Maja’s breathwork and coaching helped me slow down and reconnect. I now show up calmer and more present for my family and work."

  },
  {
    name: "Marija G.",
    text: "The breathing exercises quiet my monkey mind instantly. I use them all the time to reset and find calm.",
  },

  // {
  //   name: "Marija G.",
  //   text: "Before working with Maja, I felt constantly overwhelmed and reactive — I’d lose my patience with my kid over the smallest things. I fell in love with the breathing exercises; I had no idea how powerful and calming they could be. My favorite is the bee breath — it quiets my monkey mind instantly, and I use it all the time. Through Maja’s guidance, I’ve learned how to pause, reset, and respond with more calm.",
  // },
  {
    name: "Natalie S.",
    text: "Maja guided me to focus on what matters, let go of stress, and feel more balanced and confident.",
  },
  // {
  //   name: "Natalie S.",
  //   text: "Before working with Maja, I was overwhelmed trying to juggle a full-time job, my business, and parenting as a single mom. I felt constantly stressed and struggled to prioritize what really mattered. Maja guided me with meditation, breathwork, and gentle movement to help me reconnect with myself and truly focus on what’s important—letting go of things that aren’t and not obsessing over them. Her thoughtful questions helped me uncover my own answers instead of just giving advice. With her support, I learned how to make wiser choices and make my own decisions that feel right to me with confidence, manage my stress better, and focus on what truly counts in my life. Thanks to Maja, I feel more balanced, calm, and confident in handling everything on my plate. So thankful!",
  // },
  {
    name: "Laxmi G.",
    text: "The experience was absolutely amazing—exactly what I was looking for! The class was both refreshing and rejuvenating, leaving me feeling more balanced and energized. I truly appreciate the guidance and atmosphere, and I will definitely continue attending.",
  },
  {
    name: "Nancy G.",
    text: "Working with Maja has been a transformative experience. Her support helped me stay focused, break through mental blocks, and believe in my potential—even in tough moments. I now feel more capable, clear, and confident.",
  },
  {
    name: "Joanne B.",
    text: "Wonderful way to go into the rest of the evening! Relaxed, stretched, strengthened in gentle ways and calmed.",
  },
  {
    name: "Jes D.",
    text: "Great class, very restorative, calming and just the right amount of challenging. Maja is a great instructor!",
  },
  {
    name: "Jackie P.",
    text: "Working with Maja has been a transformative experience in my lifelong struggle with time management. From our very first session, it was evident that she possesses a unique ability to keep me on track and hold me accountable for my goals. We started with organizing my middle room that was cluttered. Maja is a great listener and communicator which make it easy to share my challenges and doubts. I always feel understood and supported because what stands out most is her belief in my potential, even in moments of doubt. That is when Maya has encouraged me as a friend and as a life coach. Maja gave me tools I can use when the negative blocks start to build in my head. Now I am easily guided back to my strengths and the task at hand. Maja has helped me see that I am worth the journey of self-improvement. Thanks to her guidance and encouragement, I am learning to guide myself in healthier and more constructive ways. I absolutely recommend Maja as a life coach to anyone looking to enhance their life and reach their full potential!",
  },
];

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const [initialCount, setInitialCount] = useState(5); // default for desktop

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 768) {
        setInitialCount(3); // mobile
      } else {
        setInitialCount(5); // desktop
      }
    };

    updateCount(); // run once on mount
    window.addEventListener("resize", updateCount);

    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const toggleTestimonials = () => {
    setShowAll(!showAll);
  };

  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, initialCount);

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
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Maja",
            knowsAbout: [
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
            review: testimonials.map((t) => ({
              "@type": "Review",
              reviewBody: t.text,
              author: {
                "@type": "Person",
                name: t.name
              }
            }))
          }),
        }}
      />
    </section>
  );
};

export default Testimonials;