import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function SearchBar() {
  const [category, setCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'computers', name: 'Computers' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'books', name: 'Books' },
  ];

  return (
    <div className="flex flex-1 max-w-4xl">
      <div className="relative group">
        <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-10 bg-gray-100 border-r border-gray-300 rounded-l-md px-3 text-black text-sm focus:outline-none focus:ring-2 focus:ring-amazon-orange"
        >
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      
      <input
        type="text"
        className="flex-1 h-10 px-4 text-black focus:outline-none focus:ring-2 focus:ring-amazon-orange"
        placeholder="Search Amazon.in"
      />
      
      <button className="h-10 px-6 bg-amazon-yellow hover:bg-yellow-400 rounded-r-md flex items-center justify-center">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-800" />
      </button>
    </div>
  );
}

export default SearchBar;