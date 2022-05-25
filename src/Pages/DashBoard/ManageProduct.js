import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteManageParts from "./DeleteManageParts";
import ManageRow from "./ManageRow";

const ManageProduct = () => {
  const [deleteParts, setDeleteParts] = useState(null);
  const [reload, setReload] = useState(true);
  console.log(deleteParts);
  //   const {
  //     data: manufactures,
  //     isLoading,
  //     refetch,
  //   } = useQuery("manufactures", () =>
  //     fetch("http://localhost:5005/parts", {
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     })
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => console.log(data[0]))
  //   );
  const [manufactures, setManufactures] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5005/parts", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setManufactures(data));
  }, [reload]);

  //   if (isLoading) {
  //     return <Loading />;
  //   }

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Picture</th>
              <th>Parts name</th>
              <th>Minimum Quantity</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {manufactures?.map((manufacture, index) => (
              <ManageRow
                key={manufacture._id}
                index={index}
                manufacture={manufacture}
                setDeleteParts={setDeleteParts}
              ></ManageRow>
            ))}
          </tbody>
        </table>
      </div>
      {
        <DeleteManageParts
          deleteParts={deleteParts}
          setDeleteParts={setDeleteParts}
          //   refetch={refetch}
          manufacture={manufactures}
          reload={reload}
          setReload={setReload}
        ></DeleteManageParts>
      }
    </div>
  );
};

export default ManageProduct;
