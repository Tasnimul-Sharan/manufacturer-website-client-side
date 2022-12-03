import React from "react";

const UseOrderRow = ({
  order,
  index,
  setDeleteOrders,
  setShipped,
  shipped,
  setReload,
  reload,
}) => {
  const { image, price, partsname, _id } = order;

  const handleShipped = () => {
    fetch(`http://localhost:5005/ payments/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (order?.paid) {
          setShipped("shipped");
          setReload(!reload);
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-24 rounded">
            <img src={image} alt="orders" />
          </div>
        </div>
      </td>
      <td>{partsname}</td>
      <td>${price}</td>
      <td>
        <label
          onClick={() => setDeleteOrders(order)}
          for="delete-all-order-modal"
          class="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
      <td>
        {order.price && !order.paid && (
          <div>
            <p>
              {" "}
              <span className="text-error">unpaid</span>
            </p>
          </div>
        )}
        {order.price && order.paid && (
          <div>
            <p>
              {" "}
              <button
                onClick={() => handleShipped(shipped)}
                className="btn btn-success"
              >
                {order?.status ? "shipped" : order?.paid ? "pending" : "unpaid"}
              </button>
            </p>
          </div>
        )}
      </td>
    </tr>
  );
};

export default UseOrderRow;
