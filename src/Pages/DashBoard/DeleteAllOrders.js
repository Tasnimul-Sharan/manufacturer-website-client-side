import React from "react";
import { toast } from "react-toastify";

const DeleteAllOrders = ({
  deleteOrders,
  setDeleteOrders,
  reload,
  setReload,
}) => {
  const { _id } = deleteOrders;
  console.log(deleteOrders);

  const handleDelete = (id) => {
    fetch(`http://localhost:5005/allOrders/${id}`, {
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
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
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
