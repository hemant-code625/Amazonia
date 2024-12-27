import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const { register, handleSubmit, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const url = import.meta.env.VITE_API_URL;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      console.log("Registering user:", data);
      const res = await fetch(`${url}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await res.json();
      if (response.statusCode >= 400 && response.statusCode < 500) {
        reset();
        setLoading(false);
        toast.error(response.message);
      }
      if (response.statusCode >= 200 && response.statusCode < 300) {
        setLoading(false);
        toast.success(response.message);
        setSuccessMessage("Account created successfully 🎉");

        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Network error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-8 pb-16 px-4 ">
      {/* <Link to="/">
        <img
          src="/amazon-logo-black.png"
          alt="Amazon Logo"
          className="h-8 mb-8"
        />
      </Link> */}

      <div className="w-full max-w-[350px] bg-white p-6 border border-gray-300 rounded-lg">
        <h1 className="text-3xl font-normal mb-4">Create Account</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block font-medium mb-1">
              Your name
            </label>
            <input
              type="text"
              placeholder="First and last name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:border-amazon-orange focus:ring-1 focus:ring-amazon-orange"
              {...register("fullName", { required: "Your name is required!" })}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:border-amazon-orange focus:ring-1 focus:ring-amazon-orange"
              {...register("email", { required: "Email is required" })}
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="At least 6 characters"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:border-amazon-orange focus:ring-1 focus:ring-amazon-orange"
              {...register("password", { required: "Email is required" })}
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
            {loading ? (
              <div>
                <svg
                  aria-hidden="true"
                  className="inline w-6 h-6 animate-spin text-white fill-blue-500"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            ) : (
              "Create your account"
            )}
          </button>
          {successMessage && (
            <p className="text-green-400 text-sm mt-1">{successMessage}</p>
          )}
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
