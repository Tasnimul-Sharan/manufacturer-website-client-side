import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Review = ({ review }) => {
  const { name, image, description, ratings } = review;
  return (
    <div class="card lg:max-w-lg  bg-slate-900 text-white shadow-xl">
      <div class="card-body items-center text-center">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src={image} alt="review" />
          </div>
        </div>
        <h2 class="card-title">{name}</h2>
        <h1 className="text-amber-500">
          {" "}
          <span className="text-xl text-white">{ratings}</span>
          <br />
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Review;
