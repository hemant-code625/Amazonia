import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const AddToCart = ({ price }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="border rounded-lg p-4">
      <div className="text-2xl text-amazon-orange font-medium">₹{price}</div>

      <div className="mt-4">
        <p className="text-sm text-green-600 font-medium">
          FREE delivery Tomorrow
        </p>
        <p className="text-sm text-gray-600">Order within 4 hrs 32 mins</p>
      </div>

      <div className="mt-4">
        <label className="text-sm font-medium">Quantity:</label>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="ml-2 border rounded p-1"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <button className="mt-4 w-full bg-amazon-yellow hover:bg-yellow-400 text-sm font-medium py-2 px-4 rounded-full">
        Add to Cart
      </button>

      <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 px-4 rounded-full">
        Buy Now
      </button>
    </div>
  );
};

export default AddToCart;
