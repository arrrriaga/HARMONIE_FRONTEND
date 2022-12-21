import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
import "./bootstrap.min.css";
import "./index.css";
import { UserProvider } from "./context/User.context";
import { ProductProvider } from "./context/Product.context";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <ProductProvider>
      <PayPalScriptProvider
        options={{
          "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PayPalScriptProvider>
    </ProductProvider>
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
