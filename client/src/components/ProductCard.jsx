/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import ProductRating from "./product/ProductRating";
import WishlistButton from "./product/WishlistButton";
import { formatPrice } from "../utils/formatters";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddtoCart = () => {
    dispatch({
      type: "cart/addItem",
      payload: {
        id: product.id,
        title: product.title,
        image: product.images[0].url,
        price: product.price,
        quantity: 1,
      },
    });
  };

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 relative flex flex-col">
      <WishlistButton productId={product.id} />
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="cursor-pointer aspect-square overflow-hidden"
      >
        <img
          src={product.images[0].url}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3
          onClick={() => navigate(`/product/${product.id}`)}
          className="cursor-pointer hover:text-orange-600 text-sm sm:text-base font-medium text-gray-800 line-clamp-2 mb-1"
        >
          {product.title}
        </h3>
        <ProductRating rating={product.rating} />
        <div className="mt-auto pt-3">
          <p className="text-lg sm:text-xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </p>
          <button
            onClick={handleAddtoCart}
            className="mt-3 w-full bg-amazon-yellow hover:bg-yellow-400 text-sm font-semibold py-2 px-4 rounded-full transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
