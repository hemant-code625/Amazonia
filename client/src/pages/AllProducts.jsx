import { useState } from "react";
import ProductGrid from "../components/product/ProductGrid";
import FilterSidebar from "../components/filters/FilterSidebar";
import SortDropdown from "../components/filters/SortDropdown";
import { ALL_PRODUCTS } from "../constants/products.js";

const AllProducts = () => {
  const [filters, setFilters] = useState({
    price: { min: 0, max: 50000 },
    rating: 0,
    category: "all",
  });
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    return (
      product.price >= filters.price.min &&
      product.price <= filters.price.max &&
      (filters.rating === 0 || product.rating >= filters.rating) &&
      (filters.category === "all" || product.category === filters.category)
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 flex-shrink-0">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </aside>

          <main className="flex-1">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="text-sm text-gray-600">
                  {sortedProducts.length} results
                </p>
                <SortDropdown value={sortBy} onChange={setSortBy} />
              </div>
            </div>

            <ProductGrid products={sortedProducts} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
