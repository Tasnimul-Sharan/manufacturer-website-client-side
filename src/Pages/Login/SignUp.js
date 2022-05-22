import React from "react";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (loading || updating) {
    return <Loading />;
  }

  if (user) {
    navigate("/");
  }

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl pb-5">
        <div class="card-body"></div>
        <h1 className="text-3xl font-bold text-center">SIGN UP</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs m-7">
            <input
              type="text"
              placeholder="Enter Name"
              class="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "name is required",
                },
              })}
            />
            {errors.email?.type === "required" && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="form-control w-full max-w-xs m-7">
            <input
              type="email"
              placeholder="Enter Email"
              class="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid email",
                },
              })}
            />
            {errors.email?.type === "required" && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="form-control w-full max-w-xs m-7">
            <input
              type="password"
              placeholder="Enter Password"
              class="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 6,
                  message: "Your password must be 6 character or longer",
                },
              })}
            />
            {errors.password?.type === "required" && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            {errors.password?.type === "minlength" && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>

          <input
            className="btn w-full max-w-xs"
            type="submit"
            value="Sign Up"
          />
        </form>
        <p className="m-5">
          <Link to="/login">
            <button className="btn btn-success text-white px-5">
              Login here
            </button>
          </Link>{" "}
        </p>
        <div class="divider">OR</div>
        <button>Sign In With Google</button>
      </div>
    </div>
  );
};

export default SignUp;
