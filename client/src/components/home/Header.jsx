import { Link } from "react-router-dom";

const Header = () => {
  const categories = [
    "All",
    "MX Player",
    "Sell",
    "Best Sellers",
    "Today's Deals",
    "Mobiles",
    "Customer Service",
    "Electronics",
    "Prime",
    "Home & Kitchen",
    "Amazon Pay",
    "New Releases",
    "Fashion",
    "Computers",
  ];

  return (
    <header className="bg-amazon-light text-white">
      <div className="max-w-full mx-auto">
        <ul className="flex items-center space-x-4 text-sm h-10 px-4">
          {categories.map((category) => (
            <li key={category}>
              <Link
                to="/"
                className="hover:border-2 hover:border-white p-2 rounded-sm"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;