import React from "react";

const UseOrderRow = ({ order, index, setDeleteOrders }) => {
  const { image, price, partsname } = order;
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
      <td>{price}</td>
      <td>
        <label
          onClick={() => setDeleteOrders(order)}
          for="delete-all-order-modal"
          class="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default UseOrderRow;
