import React from "react";

const ManageRow = ({ manufacture, setDeleteParts, index }) => {
  const { name, price, picture, minimumQuantity, availableQuantity } =
    manufacture;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-24 rounded">
            <img src={picture} alt="avatar" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{availableQuantity}</td>
      <td>{minimumQuantity}</td>
      <td>
        {" "}
        <label
          onClick={() => setDeleteParts(manufacture)}
          for="delete-modal"
          class="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ManageRow;
