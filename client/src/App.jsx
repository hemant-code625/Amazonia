import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import PersonalizedRecommendations from "./components/recommendations/PersonalizedRecommendations";
import Footer from "./components/footer/Footer";
import SignUp from "./components/auth/SignUp";
import AllProducts from "./pages/AllProducts";
import { useDispatch } from "react-redux";
import { setCart } from "./store/slices/cartSlice";
import { useEffect } from "react";
import SignIn from "./components/auth/SignIn";
import { ToastContainer } from "react-toastify";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));

    if (cartItems) {
      dispatch(setCart({ items: cartItems }));
    }
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="pt-[104px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/signup"
                element={
                  <>
                    <SignUp />
                  </>
                }
              />
              <Route
                path="/signin"
                element={
                  <>
                    <SignIn />
                  </>
                }
              />
              <Route
                path="/all"
                element={
                  <>
                    <AllProducts />
                  </>
                }
              />
              <Route path="*" element={<>Page not Found</>} />
            </Routes>
          </main>
          <PersonalizedRecommendations />
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
