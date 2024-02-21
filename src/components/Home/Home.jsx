import React from "react";
import {Hero, TokenTables, Trending, Collections} from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Trending />
      <TokenTables />
      <Collections title="Notable collections" />
      <Collections title="Top Collector Buys Today" />
      <Collections title="Black History Month Spotlight" />
      <Collections title="Trending in Art" isCategory={true} />
      <Collections title="Trending in Gaming" isCategory={true} />
      <Collections title="Trending in Memberships" isCategory={true} />
      <Collections title="Trending in Music" isCategory={true} />
      <Collections title="Trending in PFPs" isCategory={true} />
      <Collections title="Trending in Photography" isCategory={true} />
      <Collections title="NFT 101" isCategory={true} btnTitle="Learn more" />
      <Collections title="Explore Categories" />
    </div>
  );
};

export default Home;
