/* eslint-disable react/prop-types */
const CartItem = ({ item, onUpdateQuantity, onDelete }) => {
  const handleQuantityChange = (newQuantity) => {
    onUpdateQuantity(item.id, newQuantity);
  };

  return (
    <>
      <div className="flex items-center border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <img
          src={item.image}
          alt={item.title}
          className="w-24 h-24 object-contain mr-4"
        />
        <div className="flex-1">
          <p className="font-semibold text-lg">{item.title}</p>
          <p className="text-gray-600 text-sm">₹ {item.price.toFixed(2)}</p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={() => handleQuantityChange(item.quantity + 1)}
          >
            +
          </button>
          <button
            className="ml-4 text-red-500 hover:text-red-600"
            onClick={() => onDelete(item.id)}
          >
            🗑️
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
