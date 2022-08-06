import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fontsource/sora";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe/stripe";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistor } from "./store/store";

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
    <Provider store={store}>
      {" "}
      <BrowserRouter>
        {/* <PersistGate persistor={persistor}> */}{" "}
        <Elements stripe={stripePromise} >
          <App />
        </Elements>
        {/* </PersistGate> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
