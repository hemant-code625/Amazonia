import ProductCard from "../ProductCard";
import { BEST_OFFERS } from "../../constants/products";

const BestOffers = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Best Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {BEST_OFFERS.map((product) => (
          <div key={product.id} className="relative">
            <span className="absolute top-2 left-2 z-10 bg-red-500 text-white px-2 py-1 rounded-md">
              -{product.discount}%
            </span>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestOffers;
