import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fontsource/sora";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import { ProductProvider } from "./context/productContext";
import { CartProvider } from "./context/cartContext";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//  <React.StrictMode>
//      <App />
//    </React.StrictMode>
// // );

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
