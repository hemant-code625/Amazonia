import { useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import WishlistButton from "../components/product/WishlistButton";
import { formatPrice } from "../utils/formatters";

const ProductDetails = () => {
  const { id } = useParams();

  // Mock product data (replace with actual data fetching)
  const product = {
    id: 1,
    title: "Apple iPhone 13",
    price: 799.99,
    rating: 4.5,
    description:
      "The latest iPhone with amazing features and powerful performance.",
    image: "https://placehold.co/600x400?text=iPhone",
    features: [
      "6.1-inch Super Retina XDR display",
      "A15 Bionic chip",
      "Advanced dual-camera system",
      "Ceramic Shield front",
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-lg"
          />
          <WishlistButton productId={product.id} />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <div className="flex items-center mt-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-6 w-6 ${
                  i < Math.floor(product.rating)
                    ? "text-amazon-orange"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-gray-600">{product.rating}</span>
          </div>

          <div className="mt-6">
            <p className="text-3xl font-bold">{formatPrice(product.price)}</p>
            <p className="mt-4 text-gray-600">{product.description}</p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <button className="button w-full">Add to Cart</button>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md font-semibold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
