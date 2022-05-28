import React from "react";
import picture from "../../images/Sharan.jpg.jpg";

const PortfolioBanner = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Tasnimul Alam</h1>
          <p class="py-3 text-slate-800 text-3xl">Font-End Web developer</p>
          <h5 className="text-3xl text-slate-800">
            Study:Electronics and Communication Enginering <br /> at Institute
            of Science and Tecchnology
          </h5>
          <p className="text-xl text-slate-800">
            Email: tasnimulsharan8962@gmail.com
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-neutral">
          <div class="card-body">
            <img src={picture} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
