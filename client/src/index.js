import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./Pages/Cart/CartHandler";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
