import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  // const [user] =
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // axios.post("http://localhost:5005/profile", data).then((res) => {
    //   const { data } = res;
    //   console.log(data);
    //   if (data) {
    //     toast.success("You have successfully add your information");
    //   }
    const id = data?._id;

    //   else {
    // fetch("http://localhost:5005/profile", {
    fetch(`http://localhost:5005/profile/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          toast.success("You have successfully save your profile");
        } else {
          toast.success("You have successfully updated your profile");
        }
      });
    //   }
    // });
  };

  if (loading) {
    return <Loading />;
  }

  //   const updateProfile = () => {
  // fetch("http://localhost:5005/profile", {
  //   method: "PUT",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     if (data) {
  //       toast("You have successfully updated your profile");
  //     }
  //   });
  //   };

  return (
    <div className="flex justify-center items-center h-screen">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <input
                type="email"
                class="input input-bordered w-full max-w-xs"
                {...register("email")}
                value={user?.email}
              />
              <input
                type="text"
                placeholder="Parts namae"
                class="input input-bordered w-full max-w-xs"
                {...register("name")}
                value={user?.displayName}
              />
              <label class="label">
                <span class="label-text">Add filds</span>
              </label>
              <input
                type="text"
                placeholder="Your Education"
                class="input input-bordered w-full max-w-xs"
                {...register("education")}
              />
              <label class="label">
                <span class="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="City/District"
                class="input input-bordered w-full max-w-xs"
                {...register("location")}
              />
              <input
                type="number"
                placeholder="Your Phone Number"
                class="input input-bordered w-full max-w-xs"
                {...register("phoneNumber")}
              />
              <input
                type="url"
                placeholder="Your Linkdin profille link"
                class="input input-bordered w-full max-w-xs"
                {...register("profileLink")}
              />
              <input
                type="submit"
                className="btn  w-full max-w-xs"
                value="save profile"
              />

              {/* <button className="btn" onClick={onSubmit}>
                Update Profile
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
