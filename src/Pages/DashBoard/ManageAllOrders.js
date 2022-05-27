import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteAllOrders from "./DeleteAllOrders";
import DeleteOrderParts from "./DeleteOrderParts";
import UseOrderRow from "./UseOrderRow";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  // const [user] = useAuthState(auth);
  const [deleteOrders, setDeleteOrders] = useState(null);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5005/allOrders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [reload]);
  // const {
  //   data: orders,
  //   isLoading,
  //   refetch,
  // );
  // console.log(orders);
  // } = useQuery("orders", () =>

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div>
      <h1>All the Orders</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Picture</th>
              <th>Parts name</th>
              <th>price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <UseOrderRow
                key={order._id}
                order={order}
                index={index}
                setDeleteOrders={setDeleteOrders}
              ></UseOrderRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrders && (
        <DeleteAllOrders
          deleteOrders={deleteOrders}
          setDeleteOrders={setDeleteOrders}
          // refetch={refetch}
          setReload={setReload}
          reload={reload}
        ></DeleteAllOrders>
      )}
    </div>
  );
};

export default ManageAllOrders;
