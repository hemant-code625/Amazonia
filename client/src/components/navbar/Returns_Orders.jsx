import { Link } from "react-router-dom";

const Returns_Orders = () => {
  return (
    <Link to="/" className="hover:border-2 p-1">
      <div>
        <div className="text-sm">Returns & </div>
        <div className="font-bold">Orders</div>
      </div>
    </Link>
  );
};

export default Returns_Orders;
