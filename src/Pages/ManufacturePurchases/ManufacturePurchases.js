// import React, { useEffect, useState } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import axios from "axios";
import { toast } from "react-toastify";
// import Order from "./Order";
// import OrderingUser from "./OrderingUser";

const ManufacturePurchases = () => {
  const { maufactureId } = useParams();
  // const [order, setOrder] = useState(null);
  const [user, loading, error] = useAuthState(auth);

  const {
    data: manufacture,
    isLoading,
    refetch,
  } = useQuery(["parts", maufactureId], () =>
    fetch(`http://localhost:5005/parts/${maufactureId}`).then((res) =>
      res.json()
    )
  );

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5005/orders", data).then((res) => {
      const { data } = res;
      console.log(data);
      if (data) {
        toast.success("Your order has placed");
      }
      refetch();
      // setOrder(null);
    });
  };
  // const handleOrder = (e) => {
  //   e.preventDefault();
  //   // console.log(data);
  // };

  if (isLoading) {
    return <Loading />;
  }

  // if (error) {
  //   console.log(error);
  // }

  return (
    // // <div class="card bg-neutral text-neutral-content">
    // //   <div class="card-body items-center text-center">
    // //     <div>
    // //       {order && (
    // //         <OrderingUser
    // //           setOrder={setOrder}
    // //           order={order}
    // //           refetch={refetch}
    // //         ></OrderingUser>
    // //       )}
    // //     </div>
    // //     <div>
    // //       {<Order setOrder={setOrder} manufacture={manufacture}></Order>}
    // //     </div>
    //     {/* <figure class="px-10 pt-10">
    //       <img src={manufacture?.picture} alt="Shoes" class="rounded-xl" />
    //     </figure>
    //     <h2 class="card-title">{manufacture?.name}</h2>
    //     <p>{manufacture?.price}</p>
    //     <p>{manufacture?.available_quantity}</p>
    //     <p>{manufacture?.minimum_quantity}</p>
    //     <div class="card-actions justify-center">
    //       <button class="btn btn-info">Update</button>
    //       {/* <form> */}
    //     {/* <input
    //         type="number"
    //         placeholder="Reduce"
    //         class="input input-bordered "
    //       /> */}
    //     {/* </div> */}
    //     {/* </form> */}
    //     {/* <input
    //       type="submit"
    //       className="btn btn-success  w-full max-w-xs"
    //       value="Place the Order"
    //     /> */}
    //     {/* <button className="btn btn-success">Place the order</button> */}
    //     {/* </form> */}
    //   {/* </div>
    // </div> */}

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
                  value={manufacture.name}
                />
                <input
                  type="text"
                  class="input input-bordered w-full max-w-xs"
                  {...register("image")}
                  value={manufacture.picture}
                />
                <input
                  type="text"
                  class="input input-bordered w-full max-w-xs"
                  {...register("price")}
                  value={manufacture.price}
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
                  type="submit"
                  className="btn  w-full max-w-xs"
                  value="Place the Order"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="card w-96 bg-neutral text-neutral-content">
          <div class="card-body items-center text-center">
            <figure class="px-10 pt-10">
              <img src={manufacture?.picture} alt="Shoes" class="rounded-xl" />
            </figure>
            <h2 class="card-title">{manufacture?.name}</h2>
            <p>{manufacture?.price}</p>
            <p>{manufacture?.available_quantity}</p>
            <p>{manufacture?.minimum_quantity}</p>
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
        </div>
      </div>
    </div>
  );
};

export default ManufacturePurchases;
