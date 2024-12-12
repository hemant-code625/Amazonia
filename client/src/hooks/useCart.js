import { useState } from "react";

export const useCart = () => {
  const [itemCount] = useState(0);

  return {
    itemCount,
  };
};
