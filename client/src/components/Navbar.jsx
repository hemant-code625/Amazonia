import { Link } from "react-router-dom";
import logo from "../assets/navbar/amazon-logo.png";
import SearchBar from "./navbar/SearchBar";
import AccountMenu from "./navbar/AccountMenu";
import CartIcon from "./navbar/CartIcon";
import Header from "./home/Header";
import Returns_Orders from "./navbar/Returns_Orders";
import UpdateLocation from "./navbar/UpdateLocation";

const Navbar = () => {
  return (
    <nav className="bg-amazon text-white fixed top-0 left-0 right-0 z-[100] shadow-lg">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 hover:border-2 p-1">
            <img src={logo} alt="amazon-logo " className="h-12" />
            {/* <span className="text-2xl font-bold">Amazon</span> */}
          </Link>
          <UpdateLocation />
          <SearchBar />
          <div className="flex items-center space-x-4">
            <AccountMenu />
            <Returns_Orders />
            <CartIcon />
          </div>
        </div>
      </div>
      <Header />
    </nav>
  );
};

export default Navbar;
