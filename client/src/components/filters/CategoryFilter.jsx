function CategoryFilter({ value, onChange }) {
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'home', name: 'Home & Kitchen' },
    { id: 'books', name: 'Books' }
  ];

  return (
    <div>
      <h3 className="font-medium mb-3">Department</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <label key={category.id} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={value === category.id}
              onChange={() => onChange(category.id)}
              className="text-amazon-orange focus:ring-amazon-orange"
            />
            <span className="text-sm">{category.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;