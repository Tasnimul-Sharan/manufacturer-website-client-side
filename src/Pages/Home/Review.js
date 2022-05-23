import React from "react";
// import StarIcon from "@heroicons/react/solid";

const Review = ({ review }) => {
  const { name, image, description, ratings } = review;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src={image} alt="review" />
          </div>
        </div>
        <h1>
          {ratings}
          {/* <StarIcon></StarIcon> */}
        </h1>
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Review;
