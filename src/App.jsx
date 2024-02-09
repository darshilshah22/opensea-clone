import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
