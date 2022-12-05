import React from "react";
import { toast } from "react-toastify";

const DeleteManageParts = ({
  deleteParts,
  setDeleteParts,
  reload,
  setReload,
}) => {
  const { name, _id } = deleteParts;
  console.log(deleteParts);

  const handleDelete = (id) => {
    fetch(`https://manufacturer-website-server-side.vercel.app/parts/${id}`, {
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
          setDeleteParts(false);
          setReload(!reload);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-700">
            Are you sure want to delete
          </h3>
          <p class="py-4 text-bold text-red-600">{name}</p>
          <div class="modal-action">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-xs btn-error"
            >
              Delete
            </button>
            <label for="delete-modal" class="btn btn-xs">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteManageParts;
