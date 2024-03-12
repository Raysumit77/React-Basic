import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./Home";
import { Login, ForgetPassword } from "./Login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
    <br />
    <Login />
    <br />
    <ForgetPassword />
  </React.StrictMode>
);
