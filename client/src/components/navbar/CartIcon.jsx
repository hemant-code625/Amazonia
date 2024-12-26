import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const items = cartItems.map((item) => item.quantity);
  return (
    <Link to="/cart" className="hover:border-2 p-3">
      <div className="relative">
        <ShoppingCartIcon className="h-8 w-8" />
        <span className="absolute -top-2 -right-2 bg-amazon-orange text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
          {items.reduce((acc, item) => acc + item, 0)}
        </span>
      </div>
    </Link>
  );
};

export default CartIcon;
