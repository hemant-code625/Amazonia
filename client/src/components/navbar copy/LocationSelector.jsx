function LocationSelector() {
  return (
    <button className="flex items-start text-left hover:ring-1 hover:ring-white rounded-sm p-2">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5 mt-1" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
        />
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
        />
      </svg>
      <div className="ml-1">
        <div className="text-xs text-gray-300">Deliver to</div>
        <div className="text-sm font-bold">India</div>
      </div>
    </button>
  );
}