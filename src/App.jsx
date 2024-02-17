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
      <Collections title="Trending in Art" isCategory={true}/>
      <Collections title="Trending in Gaming" isCategory={true}/>
      <Collections title="Trending in Memberships" isCategory={true}/>
      <Collections title="Trending in Music" isCategory={true}/>
      <Collections title="Trending in PFPs" isCategory={true}/>
      <Collections title="Trending in Photography" isCategory={true}/>
      <Collections title="NFT 101" isCategory={true} btnTitle="Learn more"/>
      <Collections title="Explore Categories" />

      <Footer />
    </div>
  );
};

export default App;
