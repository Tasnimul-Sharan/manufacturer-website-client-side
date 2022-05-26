import React from "react";
import { Link } from "react-router-dom";

const Manufacturer = ({ manufacture }) => {
  const {
    _id,
    name,
    price,
    description,
    picture,
    availableQuantity,
    minimumQuantity,
  } = manufacture;
  return (
    // <div className="">
    <div class="card lg:max-w-lg bg-neutral text-white shadow-xl">
      <figure class="px-10 pt-10">
        <img src={picture} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>Description: {description}</p>
        <p>price: ${price}</p>
        <p>Available Quantity: {availableQuantity}</p>
        <p>Minimum Quantity: {minimumQuantity}</p>
        <div class="card-actions">
          <Link to={`/purchases/${_id}`}>
            <button class="btn btn-success">Purchase Now</button>
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Manufacturer;
