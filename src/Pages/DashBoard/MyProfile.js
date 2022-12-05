import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const email = user?.email;
    fetch(
      `https://manufacturer-website-server-side.vercel.app/profile/${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          toast.success("You have successfully save your profile");
        }
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <input
                type="email"
                class="input input-bordered w-full max-w-xs my-3"
                {...register("email")}
                value={user?.email}
              />
              <input
                type="text"
                placeholder="Parts namae"
                class="input input-bordered w-full max-w-xs my-3"
                {...register("name")}
                value={user?.displayName}
              />
              <label class="label">
                <span class="label-text">Add filds</span>
              </label>
              <input
                type="text"
                placeholder="Your Education"
                class="input input-bordered w-full max-w-xs my-3"
                {...register("education")}
              />
              <label class="label">
                <span class="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="City/District"
                class="input input-bordered w-full max-w-xs my-3"
                {...register("location")}
              />
              <input
                type="number"
                placeholder="Your Phone Number"
                class="input input-bordered w-full max-w-xs my-3"
                {...register("phoneNumber")}
              />
              <input
                type="url"
                placeholder="Your Linkdin profille link"
                class="input input-bordered w-full max-w-xs my-3"
                {...register("profileLink")}
              />
              <input
                type="submit"
                className="btn  w-full max-w-xs my-3"
                value="save profile"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
