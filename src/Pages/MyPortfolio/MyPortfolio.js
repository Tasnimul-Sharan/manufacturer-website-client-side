import React from "react";
import PortfolioBanner from "./PortfolioBanner";
import PortfolioProjects from "./PortfolioProjects";
import PortfolioSkills from "./PortfolioSkills";
const MyPortfolio = () => {
  return (
    <div>
      <PortfolioBanner />
      <PortfolioSkills />
      <PortfolioProjects />
    </div>
  );
};

export default MyPortfolio;
