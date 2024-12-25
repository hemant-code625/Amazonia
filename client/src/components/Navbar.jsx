import { Link } from "react-router-dom";
import logo from "../assets/navbar/amazon-logo.png";
import SearchBar from "./navbar/SearchBar";
import AccountMenu from "./navbar/AccountMenu";
import CartIcon from "./navbar/CartIcon";
import Header from "./home/Header";
import Returns_Orders from "./navbar/Returns_Orders";
import UpdateLocation from "./navbar/UpdateLocation";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-amazon text-white fixed top-0 left-0 right-0 z-[100] shadow-lg">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 hover:border-2 p-1">
            <img src={logo} alt="amazon-logo" className="h-12" />
          </Link>

          <UpdateLocation className="hidden md:flex" />

          <div className="flex-1 max-navLen:hidden lg:block">
            <SearchBar />
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="block md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-black dark:stroke-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <div className="hidden md:flex items-center space-x-4">
              <AccountMenu />
              <Returns_Orders />
              <CartIcon />
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-amazon-light text-white">
          <SearchBar />
          <AccountMenu />
          <Returns_Orders />
          <CartIcon />
        </div>
      )}

      {/* Header for larger screens */}
      <div className="hidden lg:block">
        <Header />
      </div>
    </nav>
  );
};

export default Navbar;
