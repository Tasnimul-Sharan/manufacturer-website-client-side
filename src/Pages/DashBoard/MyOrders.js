import axios from "axios";

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import DeleteOrderParts from "./DeleteOrderParts";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const [deleting, setDeleting] = useState(null);
  const [reload, setReload] = useState(true);
  console.log(deleting);

  useEffect(() => {
    const getOrders = async () => {
      if (user) {
        const { data } = await axios.get(
          `http://localhost:5005/orders?email=${user?.email}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setOrders(data);
      }
    };
    getOrders();
  }, [user, reload]);

  console.log(orders);

  return (
    <div>
      <h1 className="text-2xl text-gray-900 my-5">
        Total Order : {orders?.length}
      </h1>
      <div class="overflow-x-auto grid sm:grid-cols-1">
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>price</th>
              <th>parts name</th>
              <th>Action</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>
                  <div class="avatar">
                    <div class="w-32 rounded">
                      <img src={order.image} alt="avatar" />
                    </div>
                  </div>
                </td>
                <td>${order.price}</td>
                <td>{order.partsname}</td>
                <td>
                  {!order.paid && (
                    <label
                      onClick={() => setDeleting(order)}
                      for="delete-confirm -modal"
                      class="btn btn-xs btn-error"
                    >
                      Delete
                    </label>
                  )}
                </td>
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-sm btn-success">pay</button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <div>
                      <p>
                        {" "}
                        <span className="text-success">paid</span>
                      </p>
                      <p>
                        transaction id:{" "}
                        <span className="text-success">
                          {order.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleting && (
        <DeleteOrderParts
          deleting={deleting}
          setDeleting={setDeleting}
          setReload={setReload}
          reload={reload}
        ></DeleteOrderParts>
      )}
    </div>
  );
};

export default MyOrders;
