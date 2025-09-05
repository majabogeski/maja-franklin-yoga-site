// pages/api/google-reviews.js
// export default async function handler(req, res) {
//   const PLACE_ID = "ChIJUbjh60Rfk28RAzxWYWoWl5g";
 

//   const API_KEY = process.env.GOOGLE_API_KEY;

//   try {
//     const response = await fetch(
//       `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${API_KEY}`
//     );
//     const data = await response.json();

//     console.log("Google API response:", JSON.stringify(data, null, 2)); // 🔍 debug

//     const reviews = data?.result?.reviews || [];
//     res.status(200).json({ reviews });
//   } catch (err) {
//     console.error("Error fetching Google reviews:", err);
//     res.status(500).json({ error: "Failed to fetch reviews" });
//   }
// }
// pages/api/google-reviews.js
// pages/api/google-reviews.js

// pages/api/google-reviews.js
export default async function handler(req, res) {
  const PLACE_ID = "ChIJUbjh60Rfk28RAzxWYWoWl5g";
  const API_KEY = process.env.GOOGLE_API_KEY;

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${API_KEY}`
    );
    const data = await response.json();

    const reviews = data?.result?.reviews || [];
    res.status(200).json({ reviews });
  } catch (err) {
    console.error("Error fetching Google reviews:", err);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
}


