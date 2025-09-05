import GoogleReviews from "../components/GoogleReviews";

export default function ReviewsPage({ reviews }) {
  return <GoogleReviews reviews={reviews} />;
}

export async function getStaticProps() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/google-reviews`);
    const data = await res.json();

    return {
      props: {
        reviews: data.reviews || [],
      },
      revalidate: 1209600, // 2 weeks
    };
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return {
      props: { reviews: [] },
      revalidate: 1209600,
    };
  }
}
