import React from "react";
import { toast } from "react-toastify";

const DeleteOrderParts = ({ deleting, setDeleting, setReload, reload }) => {
  const { partsname, email } = deleting;
  console.log(deleting);

  const handleDelete = () => {
    fetch(`http://localhost:5005/ orders/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success(`You have deleted ${partsname}`);
          setDeleting(null);
          setReload(!reload);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="delete-confirm -modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-700">
            Are you sure want to delete
          </h3>
          <p class="py-4 font-bold text-slate-700">{partsname}</p>
          <div class="modal-action">
            <button
              onClick={() => handleDelete(email)}
              className="btn btn-xs btn-error"
            >
              Delete
            </button>
            <label for="delete-confirm -modal" class="btn btn-xs">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderParts;
