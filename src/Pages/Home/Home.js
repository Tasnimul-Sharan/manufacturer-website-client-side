import React from "react";
import Manufactures from "../Manufacture/Manufactures";

import Footer from "../Shared/Footer";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Manufactures />
      <Footer />
    </div>
  );
};

export default Home;
