/* eslint-disable react/prop-types */
import { formatPrice } from "../../utils/formatters";

const CartSummary = ({ items }) => {
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal ({items.length} items):</span>
          <span className="font-bold">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span className="font-bold">FREE</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-xl font-bold">
          <span>Total:</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
      </div>
      <button className="button w-full mt-4">Proceed to Checkout</button>
    </div>
  );
};

export default CartSummary;
