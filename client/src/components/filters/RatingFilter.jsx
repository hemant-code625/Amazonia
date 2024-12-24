import { StarIcon } from "@heroicons/react/24/solid";

function RatingFilter({ value, onChange }) {
  const ratings = [4, 3];

  return (
    <div>
      <h3 className="font-medium mb-3">Customer Rating</h3>
      <div className="space-y-2">
        {ratings.map((rating) => (
          <label
            key={rating}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              checked={value === rating}
              onChange={() => onChange(rating)}
              className="hidden"
            />
            <div
              className={`flex items-center p-2 rounded ${
                value === rating ? "bg-gray-100" : ""
              }`}
            >
              <div className="flex">
                {[...Array(rating)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-amazon-orange" />
                ))}
              </div>
              <span className="ml-1 text-sm">& Up</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default RatingFilter;
