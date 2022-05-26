// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import axios from "axios";
import { toast } from "react-toastify";
import { isDisabled } from "@testing-library/user-event/dist/utils";
// import Order from "./Order";
// import OrderingUser from "./OrderingUser";

const ManufacturePurchases = () => {
  const { maufactureId } = useParams();
  // const [order, setOrder] = useState(null);
  const [user, loading, error] = useAuthState(auth);
  // const [reload, setReload] = useState(true);
  // const [manufacture, setManufacture] = useState([]);

  const {
    data: manufacture,
    isLoading,
    refetch,
  } = useQuery(["parts", maufactureId], () =>
    fetch(`http://localhost:5005/parts/${maufactureId}`).then((res) =>
      res.json()
    )
  );

  // useEffect(() => {
  //   fetch(`http://localhost:5005/parts/${maufactureId}`)
  //     .then((res) => res.json())
  //     .then((data) => setManufacture(data));
  // }, []);

  const { register, handleSubmit } = useForm();

  // const handleOrder = (e) => {
  //   e.preventDefault();
  // const quantity = e.target.minimumQuantity.value;
  // console.log(data);

  // const data = {
  //   name: manufacture?.name,
  //   picture: manufacture?.picture,
  // };
  const onSubmit = (data) => {
    console.log(data);

    let quantity = manufacture?.minimumQuantity;

    axios.post("http://localhost:5005/orders", data).then((res) => {
      const { data } = res;
      console.log(data);
      if (
        data &&
        manufacture.minimumQuantity <= quantity &&
        manufacture.availableQuantity > quantity
      ) {
        toast.success("You order have placed");
      } else {
        toast.error("You have to purchase at least minimum quantity");
      }
      refetch();
    });
  };

  if (isLoading || loading) {
    return <Loading />;
  }

  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col  lg:flex-row-reverse ">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full max-w-xs">
                <input
                  type="email"
                  class="input input-bordered w-full max-w-xs"
                  {...register("email")}
                  value={user.email}
                />
                <input
                  type="text"
                  class="input input-bordered w-full max-w-xs"
                  {...register("name")}
                  value={user.displayName}
                />
                <input
                  type="text"
                  class="input input-bordered w-full max-w-xs"
                  {...register("partsname")}
                  value={manufacture?.name}
                />
                <input
                  type="text"
                  class="input input-bordered w-full max-w-xs"
                  {...register("image")}
                  value={manufacture?.picture}
                />
                <input
                  type="text"
                  class="input input-bordered w-full max-w-xs"
                  {...register("price")}
                  value={manufacture?.price}
                />
                <input
                  type="text"
                  placeholder="Address"
                  class="input input-bordered w-full max-w-xs"
                  {...register("address")}
                />
                <input
                  type="number"
                  placeholder="Phone number"
                  class="input input-bordered w-full max-w-xs"
                  {...register("number")}
                />
                <input
                  type="number"
                  class="input input-bordered"
                  defaultValue={manufacture?.minimumQuantity}
                />
                <input
                  type="submit"
                  className="btn  w-full max-w-xs"
                  value="Place the Order"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="card lg:max-w-lg   bg-neutral text-neutral-content">
          <div class="card-body items-center text-center">
            <figure class="px-10 pt-10">
              <img src={manufacture?.picture} alt="Shoes" class="rounded-xl" />
            </figure>
            <h2 class="card-title">{manufacture?.name}</h2>
            <p>Description: {manufacture.description}</p>
            <p>price: ${manufacture.price}</p>
            <p>Available Quantity: {manufacture?.availableQuantity}</p>
            <p>Minimum Quantity: {manufacture?.minimumQuantity}</p>
            {/* <p> */}
            {/* {manufacture?.minimumQuantity}{" "}
              {manufacture?.minimumQuantity "number"
                ? "You can't do this"
                : ""}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturePurchases;
