import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fontsource/sora";
import { BrowserRouter } from "react-router-dom";

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
      {" "}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
