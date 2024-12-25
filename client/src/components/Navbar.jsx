import { Link } from "react-router-dom";
import logo from "../assets/navbar/amazon-logo.png";
import SearchBar from "./navbar/SearchBar";
import AccountMenu from "./navbar/AccountMenu";
import CartIcon from "./navbar/CartIcon";
import Header from "./home/Header";
import Returns_Orders from "./navbar/Returns_Orders";
import UpdateLocation from "./navbar/UpdateLocation";
import { useState } from "react";
import userMenuImage from "../assets/user.png";

const Navbar = () => {
  const [leftNavOpen, setLeftNavOpen] = useState(false);
  const [rightNavOpen, setRightNavOpen] = useState(false);

  return (
    <nav className="bg-amazon text-white fixed top-0 left-0 right-0 z-[100] shadow-lg">
      {/* For Mobile Devices */}
      {/* Left Hamburger Menu */}
      <div className="md:hidden flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <button className=" p-2" onClick={() => setLeftNavOpen(true)}>
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
        <Link to="/" className="flex flex-shrink-0 hover:border-2 p-1 mt-2">
          <img src={logo} alt="amazon-logo" className="h-12" />
        </Link>

        {/* Right User Menu */}
        <div className="justify-end">
          <div className="flex items-center space-x-4">
            <CartIcon />
            <button className="p-2" onClick={() => setRightNavOpen(true)}>
              <img src={userMenuImage} alt="user-menu" className="h-8" />
            </button>
          </div>
        </div>
      </div>

      <div className="block mx-auto md:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          <button
            className="hidden md:block p-2"
            onClick={() => setLeftNavOpen(true)}
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

          <Link
            to="/"
            className="hidden md:flex flex-shrink-0 hover:border-2 p-1"
          >
            <img src={logo} alt="amazon-logo" className="h-12" />
          </Link>

          <div className="hidden lg:flex">
            <UpdateLocation />
          </div>

          <SearchBar />

          <div className="hidden lg:flex items-center space-x-4">
            <AccountMenu />
            <Returns_Orders />
            <CartIcon />
          </div>
          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2" onClick={() => setRightNavOpen(true)}>
              <img src={userMenuImage} alt="user-menu" className="h-6" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-[75%] bg-gray-800 text-white transform transition-transform duration-300 ${
          leftNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setLeftNavOpen(false)}
        >
          &times;
        </button>
        <ul className="p-4">
          <li>Amazon Trending</li>
          <li>Best Offers</li>
          <li>Top Deals</li>
          <li>Categories</li>
        </ul>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-[75%] bg-gray-800 text-white transform transition-transform duration-300 ${
          rightNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 left-4 text-white"
          onClick={() => setRightNavOpen(false)}
        >
          &times;
        </button>
        <ul className="ml-8 p-4">
          <li>Your Orders</li>
          <li>Your Account</li>
          <li>Settings</li>
        </ul>
      </div>

      <Header />
    </nav>
  );
};

export default Navbar;
