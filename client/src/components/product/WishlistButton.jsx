/* eslint-disable react/prop-types */
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { useWishlist } from "../../hooks/useWishlist";

const WishlistButton = ({ productId }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const inWishlist = isInWishlist(productId);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggleWishlist(productId);
      }}
      className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md "
    >
      {inWishlist ? (
        <HeartSolid className="h-6 w-6 text-red-500" />
      ) : (
        <HeartOutline className="h-6 w-6 text-gray-600" />
      )}
    </button>
  );
};

export default WishlistButton;
