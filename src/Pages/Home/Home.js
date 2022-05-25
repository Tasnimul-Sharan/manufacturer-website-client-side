import React from "react";
import Manufactures from "../Manufacture/Manufactures";

import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BussinessSummery from "./BussinessSummery";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Manufactures />
      <Reviews />
      <BussinessSummery />
      <Footer />
    </div>
  );
};

export default Home;
