import { useEffect } from "react";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";

const Cart = () => {
  // Mock cart data (replace with actual cart state management)
  const cartItems = [
    {
      id: 1,
      title: "Apple iPhone 13",
      price: 799.99,
      quantity: 1,
      image: "https://placehold.co/300x300",
    },
  ];

  const handleUpdateQuantity = (id, quantity) => {
    // Implement quantity update logic
    console.log("Update quantity", id, quantity);
  };

  const handleDelete = (id) => {
    // Implement delete logic
    console.log("Delete item", id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="space-y-4">
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
      </div>
      <div className="lg:col-span-1">
        <CartSummary items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
