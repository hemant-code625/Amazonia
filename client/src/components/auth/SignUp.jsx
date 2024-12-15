import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    password: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-8 pb-16 px-4">
      <Link to="/">
        <img
          src="/amazon-logo-black.png"
          alt="Amazon Logo"
          className="h-8 mb-8"
        />
      </Link>

      <div className="w-full max-w-[350px] bg-white p-6 border border-gray-300 rounded-lg">
        <h1 className="text-3xl font-normal mb-4">Create Account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="First and last name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:border-amazon-orange focus:ring-1 focus:ring-amazon-orange"
              required
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block font-medium mb-1">
              Mobile number
            </label>
            <div className="flex">
              <select className="px-3 py-2 border border-gray-300 rounded-l focus:border-amazon-orange focus:ring-1 focus:ring-amazon-orange">
                <option>IN +91</option>
              </select>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-r focus:border-amazon-orange focus:ring-1 focus:ring-amazon-orange"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="At least 6 characters"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:border-amazon-orange focus:ring-1 focus:ring-amazon-orange"
              required
              minLength={6}
            />
            <p className="text-xs mt-1">
              <span className="text-blue-600">i</span> Passwords must be at
              least 6 characters.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-amazon-yellow hover:bg-yellow-400 text-sm font-semibold py-2 px-4 rounded"
          >
            Verify mobile number
          </button>
        </form>

        <div className="mt-4 text-sm">
          <p>
            By creating an account or logging in, you agree to Amazon&apos;s{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Conditions of Use
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Privacy Notice
            </a>
            .
          </p>
        </div>

        <div className="mt-8 pt-4 border-t">
          <p className="text-sm">
            Buying for work?{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Create a free business account
            </a>
          </p>
        </div>

        <div className="mt-8 text-sm">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
