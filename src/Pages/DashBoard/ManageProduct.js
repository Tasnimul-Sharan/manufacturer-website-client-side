import React, { useEffect, useState } from "react";
import DeleteManageParts from "./DeleteManageParts";
import ManageRow from "./ManageRow";

const ManageProduct = () => {
  const [deleteParts, setDeleteParts] = useState(true);
  const [reload, setReload] = useState(true);
  console.log(deleteParts);

  const [manufactures, setManufactures] = useState([]);
  useEffect(() => {
    fetch("https://pure-stream-81976.herokuapp.com/parts", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setManufactures(data));
  }, [reload]);

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th></th>
              <th>Picture</th>
              <th>Parts name</th>
              <th>price</th>
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
          manufacture={manufactures}
          reload={reload}
          setReload={setReload}
        ></DeleteManageParts>
      }
    </div>
  );
};

export default ManageProduct;
