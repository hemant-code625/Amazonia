import { useEffect } from "react";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
// import RelatedProducts from "../components/product/RelatedProducts";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  console.log("Items from cart: ", items);

  const handleRemoveItem = (id) => {
    dispatch({
      type: "cart/removeItem",
      payload: id,
    });
  };

  // const handleClearCart = () => {
  //   dispatch({
  //     type: "cart/clearCart",
  //   });
  // };

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
            <div className="bg-white p-4 ">
              <p className="text-2xl font-semibold mb-3">Your Cart is empty.</p>
              Your shopping cart is waiting. Give it purpose – fill it with
              groceries, clothing, household supplies, electronics and more.
              Continue shopping on the{" "}
              <a href="/" className="text-blue-600">
                Amazonia homepage
              </a>{" "}
              , learn about{" "}
              <a href="/gp" className="text-blue-600">
                today&apos;s deals
              </a>
              , or visit your{" "}
              <a href="/whishlist" className="text-blue-600">
                Wish List
              </a>
              .
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onDelete={handleRemoveItem}
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
