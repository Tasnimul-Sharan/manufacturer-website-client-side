import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5005/reviews", data).then((res) => {
      const { data } = res;
      console.log(data);
      if (data) {
        toast.success("Thanks for adding a review");
      }
    });
    console.log(data);
  };
  return (
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Your Name"
            class="input input-bordered w-full max-w-xs"
            {...register("name")}
          />
          <input
            class="input input-bordered w-full max-w-xs"
            type="text"
            placeholder="Write a review"
            {...register("description")}
          />
          <input
            type="text"
            placeholder="Your Image"
            class="input input-bordered w-full max-w-xs"
            {...register("image")}
          />
          <input
            class="input input-bordered w-full max-w-xs"
            type="number"
            placeholder="Ratings"
            {...register("ratings", { min: 1, max: 5 })}
          />
          <input
            class="input input-bordered w-full max-w-xs btn"
            type="submit"
            value="Add review"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
