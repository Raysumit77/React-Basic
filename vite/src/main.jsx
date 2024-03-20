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
import CountdownTimer from "./Countdowntimer";
import { DepEffect } from "./DepEffect";
import { Weather } from "./Weather";
import { Comp1 } from "./PropsDrill";
import { Navbar } from "./Navbar";
import { Profile } from "./Profile";
import ProfileContextProvider from "./context/ProfileContext";

const data = [
  { id: 1, title: "1" },
  { id: 2, title: "2" },
  { id: 3, title: "3" },
];
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <hr />
    Day 6
    <hr />
    <h2>Props Drilling</h2>
    <br />
    <Comp1 data="Sumit" />
    <br />
    <h3> User Profile Using Context</h3>
    <br />
    <ProfileContextProvider>
      <Navbar />
      <Profile />
    </ProfileContextProvider>
    <hr />
    Day 1
    <hr />
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
    <hr />
    Day 2
    <hr />
    <br />
    <Football />
    <br />
    <MyFootball />
    <br />
    <Cricket />
    <hr />
    Day 3
    <hr />
    <br />
    <List blogs={data} />
    <br />
    <State />
    <br />
    <Question />
    <hr />
    Day 5
    <hr />
    <br />
    <Effect />
    <br />
    <DepEffect />
    <br />
    <CountdownTimer />
    <br />
    <Weather />
  </React.StrictMode>
);
