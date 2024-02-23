import React from "react";
import "./App.css";
import Card1 from "./components/Card1";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Slide from "./components/Slide";
import Text from "./components/Text";

export default function App() {
  return (
    <div className="app">
      <div>
        <Navbar />
        <Text />
        <Card1 />
      </div>
      <div>
        <Slide />
        <SignUp />
        <Footer />
      </div>
    </div>
  );
}
