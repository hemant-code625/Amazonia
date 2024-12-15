import PriceFilter from './PriceFilter';
import RatingFilter from './RatingFilter';
import CategoryFilter from './CategoryFilter';

function FilterSidebar({ filters, setFilters }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      
      <div className="space-y-6">
        <PriceFilter
          value={filters.price}
          onChange={(price) => setFilters({ ...filters, price })}
        />
        
        <RatingFilter
          value={filters.rating}
          onChange={(rating) => setFilters({ ...filters, rating })}
        />
        
        <CategoryFilter
          value={filters.category}
          onChange={(category) => setFilters({ ...filters, category })}
        />
      </div>
    </div>
  );
}

export default FilterSidebar;