import axios from "axios";

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const [deleting, setDeleting] = useState(null);
  const [reload, setReload] = useState(true);

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

  return (
    <div>
      <h1>order : {orders?.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>price</th>
              <th>parts name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.price}</td>
                <td>{order.partsname}</td>
                <td>
                  <label
                    onClick={() => setDeleting(order)}
                    for="delete-confirm -modal"
                    class="btn btn-xs btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleting && (
        <DeleteConfirmationModal
          deleting={deleting}
          setDeleting={setDeleting}
          //   refetch={refetch}
          setReload={setReload}
          reload={reload}
        ></DeleteConfirmationModal>
      )}
    </div>
  );
};

export default MyOrders;
