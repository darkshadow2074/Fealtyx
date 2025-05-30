import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-0.5 text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} fill="currentColor" size={16} />
      ))}
      {halfStar && (
        <Star fill="currentColor" size={16} className="opacity-50" />
      )}
    </div>
  );
};

export default RatingStars;
