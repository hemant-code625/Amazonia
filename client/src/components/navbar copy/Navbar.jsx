import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import AccountMenu from './AccountMenu';
import CartIcon from './CartIcon';
import LocationSelector from './LocationSelector';
import CategoryMenu from './CategoryMenu';

function Navbar() {
  return (
    <nav className="bg-amazon text-white">
      {/* Main Navbar */}
      <div className="flex items-center gap-4 px-4 py-2">
        <Link to="/" className="flex-shrink-0">
          <img 
            src="/amazon-logo-white.png" 
            alt="Amazon Logo" 
            className="h-8"
          />
        </Link>
        
        <LocationSelector />
        <SearchBar />
        <AccountMenu />
        <CartIcon />
      </div>

      {/* Category Menu */}
      <CategoryMenu />
    </nav>
  );
}

export default Navbar;