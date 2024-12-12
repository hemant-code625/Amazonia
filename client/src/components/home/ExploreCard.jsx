import { EXPLORE_CATEGORIES } from "../../constants/products";

const ExploreCard = () => {
  return (
    <section className="mb-8">
      <div>
        <h2 className="text-2xl font-bold m-4">Revamp your home in style</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {EXPLORE_CATEGORIES.map((product) => (
            <div key={product.id} className="relative">
              <CategoryCard category={product} />{" "}
              {/* Pass the whole product here */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCard;

/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/category/${category.category}`} // Use category.category for the URL path
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base font-medium text-gray-800 line-clamp-2 mb-1 transition-colors">
          {category.title}
        </h3>
      </div>
    </Link>
  );
};
