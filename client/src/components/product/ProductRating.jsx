/* eslint-disable react/prop-types */
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";

const ProductRating = ({ rating }) => {
  return (
    <div className="flex items-center mt-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= Math.floor(rating) ? (
            <StarIcon className="h-4 w-4 text-amazon-orange" />
          ) : (
            <StarOutline className="h-4 w-4 text-amazon-orange" />
          )}
        </span>
      ))}
      <span className="ml-1 text-xs text-gray-500">({rating})</span>
    </div>
  );
};

export default ProductRating;
