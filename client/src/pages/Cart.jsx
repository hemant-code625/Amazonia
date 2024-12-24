import { useEffect, useState } from "react";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
// import RelatedProducts from "../components/product/RelatedProducts";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  // Mock cart data (replace with actual cart state management)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Apple iPhone 13",
      price: 799.99,
      quantity: 1,
      image: "https://placehold.co/300x300",
    },
  ]);
  const navigate = useNavigate();

  const handleUpdateQuantity = (id, quantity) => {
    // Update the quantity of an item in the cart
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
  };

  const handleDelete = (id) => {
    // Delete an item from the cart
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          {/* <h1 className="text-3xl font-bold mb-6 text-gray-900">
            Your Shopping Cart
          </h1> */}

          {cartItems.length === 0 ? (
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
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
          {/* <RelatedProducts /> */}
        </div>

        {/* Cart Summary Section */}
        <div className="lg:col-span-1 sticky top-4">
          <CartSummary items={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
