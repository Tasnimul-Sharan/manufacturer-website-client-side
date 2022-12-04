import React from "react";
import banner from "../../images/banner1.png";

const Banner = () => {
  return (
    <div class="hero min-h-screen  bg-slate-800 text-white">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          class="lg:max-w-lg rounded-lg shadow-2xl"
          alt="banner"
        />
        <div className="text-justify">
          <h1 class="text-5xl font-bold">Get best Laptop parts from here</h1>
          <p class="py-6 text-xl">
            Great Savings and Free Delivery! world class products Sign Up For
            News. Multiple Payment Options. Track An Order.
          </p>
          <button class="btn btn-accent">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
