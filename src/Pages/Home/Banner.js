import React from "react";
import banner from "../../images/banner.png";

const Banner = () => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} class="max-w-sm rounded-lg shadow-2xl" alt="banner" />
        <div>
          <h1 class="text-5xl font-bold">Get best Laptop parts from here</h1>
          <p class="py-6 text-xl">
            Great Savings and Free Delivery! worldc class products Sign Up For
            News. Multiple Payment Options. Track An Order.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
