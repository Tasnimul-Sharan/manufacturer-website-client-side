import React from "react";
import { toast } from "react-toastify";

const DeleteAllOrders = ({
  deleteOrders,
  setDeleteOrders,
  reload,
  setReload,
}) => {
  const { partsname, _id } = deleteOrders;
  console.log(deleteOrders);

  const handleDelete = (id) => {
    fetch(`https://pure-stream-81976.herokuapp.com/allOrders/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success("You have deleted the parts");
          setDeleteOrders(false);
          setReload(!reload);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="delete-all-order-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-700">
            Are you sure want to delete
          </h3>
          <p class="py-4 text-red-600 text-">{partsname}</p>
          <div class="modal-action">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-xs btn-error"
            >
              Delete
            </button>
            <label for="delete-all-order-modal" class="btn btn-xs">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAllOrders;
