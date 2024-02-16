import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Trending from "./components/Trending/Trending";
import TokenTables from "./components/TokenTables/TokenTables";
import Collections from "./components/Collections/Collections";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Trending />
      <TokenTables />
      <Collections title="Notable collections" />
      <Collections title="Top Collector Buys Today" />
      <Collections title="Black History Month Spotlight" />
      <Collections title="Trending in Art" />
      <Collections title="Trending in Gaming" />
      <Collections title="Trending in Memberships" />
      <Collections title="Trending in Music" />
      <Collections title="Trending in PFPs" />
      <Collections title="Trending in Photography" />
      <Collections title="NFT 101" />
      <Collections title="Explore Categories" />

      <Footer />
    </div>
  );
};

export default App;
