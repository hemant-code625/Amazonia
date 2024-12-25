/* eslint-disable react/prop-types */
const CartSummary = ({ items }) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  let shipping = total > 200 ? 0 : 5.99; // Free shipping if over ₹ 200
  if (total == 0) {
    shipping = 0;
  }
  return (
    <div className="border border-gray-300 p-6 rounded-lg shadow-md bg-white sticky top-4">
      <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-700">Subtotal</span>
          <span className="text-gray-900">₹ {total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Shipping</span>
          <span className="text-gray-900">₹ {shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span className="text-xl text-gray-900">
            ₹ {(total + shipping).toFixed(2)}
          </span>
        </div>
        {total > 0 && shipping == 0 ? (
          <span className="text-green-600 text-sm font-semibold ">
            You are eligible for free shipping
          </span>
        ) : (
          <span className="text-red-600 text-sm font-semibold ">
            Free shipping on orders over ₹200
          </span>
        )}
      </div>
      <button className="w-full mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
