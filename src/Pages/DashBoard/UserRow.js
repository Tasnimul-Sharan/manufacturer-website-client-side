import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch, index }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(
      `https://manufacturer-website-server-side.vercel.app/user/admin/${email}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403) {
          toast.error("Faild to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("You have added an admin");
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
