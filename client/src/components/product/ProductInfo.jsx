/* eslint-disable react/prop-types */
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { formatPrice } from "../../utils/formatters";

const ProductInfo = ({ product }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index}>
        {index < Math.floor(rating) ? (
          <StarIcon className="h-5 w-5 text-amazon-orange" />
        ) : (
          <StarOutline className="h-5 w-5 text-amazon-orange" />
        )}
      </span>
    ));
  };

  return (
    <div>
      <h1 className="text-xl lg:text-2xl font-medium">{product.title}</h1>

      <div className="mt-2 flex items-center space-x-2">
        <div className="flex">{renderStars(product.rating)}</div>
        <span className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer">
          {product.reviewCount} ratings
        </span>
      </div>

      <div className="mt-4 pb-4 border-b">
        <div className="flex items-baseline space-x-2">
          <span className="text-sm">M.R.P.:</span>
          <span className="text-sm line-through">₹{product.mrp}</span>
          <span className="text-sm">({product.discount}% off)</span>
        </div>
        <div className="mt-1">
          <span className="text-2xl font-medium">
            {formatPrice(product.price)}
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-600">Inclusive of all taxes</p>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-medium">About this item</h2>
        <ul className="mt-2 space-y-2 text-sm">
          {product.features.map((feature, index) => (
            <li key={index} className="flex space-x-2">
              <span>•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
