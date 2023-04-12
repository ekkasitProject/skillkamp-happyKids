import React from "react";
import Header from "./HomePage/Header";
import MenuBar from "./HomePage/MenuBar";
import Banner from "./HomePage/Banner";
import NewArrivals from "./HomePage/NewArrivals";
const Home = () => {
  return (
    <div>
      <Header />
      <MenuBar />
      <Banner />
      <NewArrivals />
    </div>
  );
};

export default Home;
