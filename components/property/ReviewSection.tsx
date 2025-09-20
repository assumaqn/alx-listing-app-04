import axios from "axios";
import { useState, useEffect } from "react";

type Review = {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
};

const ReviewSection: React.FC<{ propertyId: number }> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p className="text-center mt-4">Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-center mt-4 text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p className="text-center mt-4">No reviews yet.</p>;
  }

  return (
    <div className="mt-6 space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="p-4 border rounded-md">
          <p className="font-semibold">{review.user}</p>
          <p className="text-yellow-500">Rating: {review.rating}/5</p>
          <p className="text-gray-700 mt-1">{review.comment}</p>
          <p className="text-gray-400 text-sm mt-1">{review.date}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
