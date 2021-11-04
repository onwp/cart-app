import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Navigate from="/" to="/products/page/1" />
        <Route path="/products" element={<App />} />
        <Route path="/products/page/:pageNumber" element={<App />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);
