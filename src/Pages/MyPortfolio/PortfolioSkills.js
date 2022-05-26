import React from "react";
import web from "../../images/web.jpg";

const PortfolioSkills = () => {
  return (
    <div className="my-24">
      <h1 className=" text-3xl text-sky-800 ">My Skills</h1>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-900 text-white">
            <div class="card-body">
              <ul className="text font-bold">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstap</li>
                <li>Tailwind CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Firebase</li>
                <li>Node js</li>
                <li>Express js</li>
                <li>Mongodb</li>
              </ul>
            </div>
          </div>
          <div>
            <img src={web} className="lg:max-w-lg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSkills;
