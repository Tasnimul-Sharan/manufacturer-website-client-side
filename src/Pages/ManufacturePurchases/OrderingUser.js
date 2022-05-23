import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const OrderingUser = ({ refetch, setOrder, order }) => {
  const [user, loading, error] = useAuthState(auth);
  const { name, price } = order;
  const handleOrder = (e) => {
    e.preventDefault();
    //   console.log(e)

    const ordering = {
      order: name,
      //   picture,
      price,
      user: user.email,
      userName: user.displayName,
    };
    axios.post("http://localhost:5005/orders", ordering).then((res) => {
      const { data } = res;
      console.log(data);
      if (data.success) {
        toast.success("Your order has placed");
      }
      refetch();
      setOrder(null);
    });
  };

  if (loading) {
    return <loading />;
  }
  refetch();

  return (
    // <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div>
      {/* <div class="card-body"> */}
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form onSubmit={handleOrder}>
        <select class="select select-bordered w-full max-w-xs">
          <option disabled selected>
            About User
          </option>
          <option>{user.email}</option>
          <option>{user.displayName}</option>
        </select>
        <input type="submit" value="Place the order" />
      </form>
      {/* <div class="form-control w-full max-w-xs">
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
              </div> */}
      {/* </form> */}
    </div>
    // </div>
  );
};

export default OrderingUser;
