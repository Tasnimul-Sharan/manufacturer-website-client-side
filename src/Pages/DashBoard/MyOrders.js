import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState();

  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const { data } = await axios.get(`order?email=${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setOrders(data);
    };
    getOrders();
  }, [user]);
  return (
    <div>
      <h1>order : {orders}</h1>
    </div>
  );
};

export default MyOrders;
