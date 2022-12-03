import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const imageApiKey = "bb01b12cb224b0091676d6f4e7cd5bca";

const AddReview = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageApiKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("image", result);
        if (result.success) {
          const picture = result.data.url;
          console.log(picture);
          axios.post("http://localhost:5005/ reviews", data).then((res) => {
            const { data } = res;
            console.log(data);
            if (data) {
              toast.success("Thanks for adding a review");
            }
          });
        }
      });
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-xl text-orange-800">Write a Review Here</h1>
      <div className="flex justify-center items-center h-screen">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Your Name"
                class="input input-bordered w-full max-w-xs my-3"
                {...register("name")}
              />
              <textarea
                class="input input-bordered w-full max-w-xs my-3"
                type="text"
                placeholder="Write a review"
                {...register("description")}
              />
              <input
                type="file"
                placeholder="Your Image"
                class="input input-bordered w-full max-w-xs my-3"
                {...register("image")}
              />
              <input
                class="input input-bordered w-full max-w-xs my-3"
                type="number"
                placeholder="Ratings"
                {...register("ratings", { min: 1, max: 5 })}
              />
              <input
                class="input input-bordered w-full max-w-xs btn btn-active"
                type="submit"
                value="Add review"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
