import { useState } from "react";

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const isInWishlist = (productId) => wishlist.includes(productId);

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      isInWishlist(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return {
    wishlist,
    isInWishlist,
    toggleWishlist,
  };
};
