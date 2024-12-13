import { Link } from "react-router-dom";

function PersonalizedRecommendations() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-xl font-bold mb-4">
          See personalized recommendations
        </h2>
        <Link to="/signin">
          <button className="bg-amazon-yellow hover:bg-yellow-400 text-sm font-semibold py-2 px-8 rounded">
            Sign in
          </button>
        </Link>
        <p className="mt-2 text-sm">
          New customer?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            Start here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default PersonalizedRecommendations;
