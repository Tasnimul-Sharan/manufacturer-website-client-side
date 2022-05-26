import React from "react";
import Service from "../../Service/Service";
import Manufactures from "../Manufacture/Manufactures";

import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BussinessSummery from "./BussinessSummery";
import Contract from "./Contract";
// import Contract from "./Contract";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Manufactures />
      <Reviews />
      <BussinessSummery />
      <Service />
      <Contract />
      <Footer />
    </div>
  );
};

export default Home;
