import { Link } from 'react-router-dom';

function CategoryMenu() {
  const categories = [
    'All', 'Fresh', 'Amazon miniTV', 'Sell', 'Gift Cards', 'Buy Again',
    'Baby', 'Browsing History', 'Amazon Pay'
  ];

  return (
    <div className="bg-amazon-light text-sm">
      <div className="flex items-center gap-4 px-4 py-1 overflow-x-auto no-scrollbar">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/category/${category.toLowerCase()}`}
            className="whitespace-nowrap py-1 px-2 hover:text-amazon-yellow"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;