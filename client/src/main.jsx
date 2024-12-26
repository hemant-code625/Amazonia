import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WishlistProvider } from "./context/WishlistContext";
import { Provider } from "react-redux";
import store from "./store/index.js";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </StrictMode>
  </Provider>
);
