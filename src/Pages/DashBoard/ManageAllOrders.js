import React, { useEffect, useState } from "react";
import DeleteAllOrders from "./DeleteAllOrders";
import UseOrderRow from "./UseOrderRow";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  // const [user] = useAuthState(auth);
  const [deleteOrders, setDeleteOrders] = useState(true);
  const [reload, setReload] = useState(true);
  const [shipped, setShipped] = useState("");

  useEffect(() => {
    fetch("http://localhost:5005/ allOrders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [reload]);

  return (
    <div>
      <h1>All the Orders</h1>
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th></th>
              <th>Picture</th>
              <th>Parts name</th>
              <th>price</th>
              <th>Action</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <UseOrderRow
                key={order._id}
                order={order}
                index={index}
                setDeleteOrders={setDeleteOrders}
                setShipped={setShipped}
                shipped={shipped}
                setReload={setReload}
                reload={reload}
              ></UseOrderRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrders && (
        <DeleteAllOrders
          deleteOrders={deleteOrders}
          setDeleteOrders={setDeleteOrders}
          setReload={setReload}
          reload={reload}
        ></DeleteAllOrders>
      )}
    </div>
  );
};

export default ManageAllOrders;
