/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ProductRating from "./product/ProductRating";
import WishlistButton from "./product/WishlistButton";
import { formatPrice } from "../utils/formatters";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 relative flex flex-col"
    >
      <WishlistButton productId={product.id} />
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base font-medium text-gray-800 line-clamp-2 mb-1">
          {product.title}
        </h3>
        <ProductRating rating={product.rating} />
        <div className="mt-auto pt-3">
          <p className="text-lg sm:text-xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </p>
          <button className="mt-3 w-full bg-amazon-yellow hover:bg-yellow-400 text-sm font-semibold py-2 px-4 rounded-full transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
