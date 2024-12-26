import { useEffect, useState } from "react";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
// import RelatedProducts from "../components/product/RelatedProducts";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);
  console.log("Items from cart: ", items);

  const handleRemoveItem = (id) => {
    dispatch({
      type: "cart/removeItem",
      payload: id,
    });
  };

  const handleClearCart = () => {
    dispatch({
      type: "cart/clearCart",
    });
  };

  const navigate = useNavigate();

  const handleUpdateQuantity = (id, quantity) => {
    // Update the quantity of an item in the cart
    const updatedCart = items.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );

    dispatch({
      type: "cart/updateQuantity",
      payload: updatedCart,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch cart items from backend api
  }, []);

  return (
    <div className="container mx-auto px-4 mt-18">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          {/* <h1 className="text-3xl font-bold mb-6 text-gray-900">
            Your Shopping Cart
          </h1> */}

          {items.length === 0 ? (
            <div className="text-center">
              <p className="text-xl text-gray-500">Your cart is empty.</p>
              <button
                onClick={() => navigate("/all")}
                className="mt-4 px-6 py-3 bg-amazon-yellow hover:bg-yellow-400 rounded-md transition duration-200"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onDelete={handleRemoveItem}
                  onClearCart={handleClearCart}
                />
              ))}
            </div>
          )}
          {/* <RelatedProducts /> */}
        </div>

        {/* Cart Summary Section */}
        <div className="lg:col-span-1 sticky top-4">
          <CartSummary items={items} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
