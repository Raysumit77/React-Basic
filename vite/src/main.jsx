import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./Home";
import { Login, ForgetPassword, ChangePassword } from "./Login";
import { Register, SignUp } from "./Login";
import { Football, MyFootball, Cricket } from "../Football";
import { List } from "./List";
import State from "./State";
import { Effect } from "./Effect";
import { Question } from "./Question";

const data = [
  { id: 1, title: "1" },
  { id: 2, title: "2" },
  { id: 3, title: "3" },
];
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
    <br />
    <Login username="sumitray45@gmail.com" password="1234" />
    <br />
    <ForgetPassword email="sumitray45@gmail.com" />
    <br />
    <Register />
    <br />
    <ChangePassword />
    <br />
    <SignUp />
    <br />
    <Football />
    <br />
    <MyFootball />
    <br />
    <Cricket />
    <br />
    <List blogs={data} />
    <br />
    <State />
    <br />
    <Question />
    <br />
    <Effect />
  </React.StrictMode>
);
