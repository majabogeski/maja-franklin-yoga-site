import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import styles from "./GoogleReviews.module.css";

// Helper for "x days ago"
const getRelativeTime = (unixSeconds) => {
  const diff = Date.now() - unixSeconds * 1000;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  return "Just now";
};

export default function GoogleReviews({ reviews }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!reviews || reviews.length === 0) {
    return <p className={styles.reviewsEmpty}>No reviews found.</p>;
  }

  return (
    <div className={styles.reviewsSection}>
      {/* Header */}
      <div className={styles.reviewsHeader}>
        <img src="/google_logo.svg" alt="Google Logo" className={styles.googleLogo} />
        <h2 className={styles.title}>Reviews</h2>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 20 }, // 👈 4 cards on wide screens
        }}
      >
        {reviews.map((review, index) => {
          const isExpanded = expandedIndex === index;
          const relativeTime = getRelativeTime(review.time);

          return (
            <SwiperSlide key={index}>
              <div className={styles.reviewCard}>
                {/* User info */}
                <div className={styles.reviewHeader}>
                  <div className={styles.avatarWrapper}>
                    <img
                      src={review.profile_photo_url || "/default-avatar.png"}
                      alt={review.author_name}
                      className={styles.avatar}
                    />
                    <div className={styles.googleBadge}>
                      <img
                        src="/google-icon-small1.png"
                        alt="Google"
                        className={styles.googleBadgeImg}
                      />
                    </div>
                  </div>
                  <div className={styles.reviewerInfo}>
                    <span className={styles.author}>
                      {review.author_name}
                      <span className={styles.verified}>✓</span>
                    </span>
                    <div className={styles.time}>{relativeTime}</div>
                  </div>
                </div>

                {/* Stars */}
                <div className={styles.rating}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`${styles.star} ${i < review.rating ? styles.filled : ""}`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review text */}
                <p className={styles.text}>
                  {isExpanded
                    ? review.text
                    : review.text.length > 250
                    ? `${review.text.slice(0, 250)}…`
                    : review.text}
                  {review.text.length > 250 && (
                    <span
                      className={styles.readMore}
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                    >
                      {isExpanded ? " Show less" : " Read more"}
                    </span>
                  )}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
