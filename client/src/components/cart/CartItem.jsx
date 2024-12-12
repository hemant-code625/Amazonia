/* eslint-disable react/prop-types */
import { formatPrice } from "../../utils/formatters";

const CartItem = ({ item, onUpdateQuantity, onDelete }) => {
  return (
    <div className="card flex items-center space-x-4">
      <img
        src={item.image}
        alt={item.title}
        className="w-32 h-32 object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-xl font-bold mt-2">{formatPrice(item.price)}</p>
        <div className="mt-2 flex items-center space-x-2">
          <select
            value={item.quantity}
            onChange={(e) => onUpdateQuantity(item.id, Number(e.target.value))}
            className="border rounded-md p-1"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <button
            onClick={() => onDelete(item.id)}
            className="text-blue-600 hover:text-blue-800"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
