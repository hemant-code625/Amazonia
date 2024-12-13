import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="bg-white p-8 text-center">
      <img
        src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
        alt="Empty Cart"
        className="mx-auto w-72"
      />
      <h2 className="text-xl font-medium mt-4">Your Amazon Cart is empty</h2>
      <p className="text-blue-600 hover:text-blue-800 hover:underline mt-2">
        <Link to="/">Shop today&apos;s deals</Link>
      </p>
      <div className="mt-4 space-x-4">
        <Link
          to="/signin"
          className="inline-block bg-amazon-yellow hover:bg-yellow-400 text-sm font-semibold py-2 px-6 rounded"
        >
          Sign in to your account
        </Link>
        <Link
          to="/signup"
          className="inline-block border border-gray-300 hover:bg-gray-100 text-sm font-semibold py-2 px-6 rounded"
        >
          Sign up now
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
