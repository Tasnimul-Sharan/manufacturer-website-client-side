import React from "react";
import Manufactures from "../Manufacture/Manufactures";

import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Manufactures />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
