import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeContextProvider } from "./context/ThemeContext";
import { Header } from "./styling/Header";
import { Hero } from "./styling/Hero";

// import { Cricket, Football, MyFootball } from "../Football";
// import CountdownTimer from "./Countdowntimer";
// import { Blogs } from "./CustomHooks/Blogs";
// import { DepEffect } from "./DepEffect";
// import { Effect } from "./Effect";
// import Home from "./Home";
// import { List } from "./List";
// import { ChangePassword, ForgetPassword, Login, Register, SignUp } from "./Login";
// import { Navbar } from "./Navbar";
// import { Profile } from "./Profile";
// import { Comp1 } from "./PropsDrill";
// import { Question } from "./Question";
// import State from "./State";
// import { Weather } from "./Weather";
// import ProfileContextProvider from "./context/ProfileContext";
// // import { Users } from "./CustomHooks/Users";

// const data = [
//   { id: 1, title: "1" },
//   { id: 2, title: "2" },
//   { id: 3, title: "3" },
// ];
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Header />
      <Hero />
    </ThemeContextProvider>
    {/* <hr />
    Day 7
    <hr />
    <h2>Custom Hook </h2>
    <hr />
    <br />
    <Blogs />
    <br />
    <Users />
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
    <Weather />  */}
  </React.StrictMode>
);
