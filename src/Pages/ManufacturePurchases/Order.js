import React from "react";

const Order = ({ manufacture }) => {
  const { picture, name, available_quantity, minimum_quantity, price } =
    manufacture;
  return (
    <div class="card-body items-center text-center">
      <figure class="px-10 pt-10">
        <img src={picture} alt="Shoes" class="rounded-xl" />
      </figure>
      <h2 class="card-title">{name}</h2>
      <p>{price}</p>
      <p>{available_quantity}</p>
      <p>{minimum_quantity}</p>
      <div class="card-actions justify-center">
        <button class="btn btn-info">Update</button>
        <form>
          <input
            type="number"
            placeholder="Reduce"
            class="input input-bordered "
          />
        </form>
      </div>
    </div>
  );
};

export default Order;
