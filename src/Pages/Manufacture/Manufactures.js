import React, { useEffect, useState } from "react";
import Manufacturer from "./Manufacturer";

const Manufactures = () => {
  const [manufactures, setManufactures] = useState([]);
  useEffect(() => {
    fetch("https://pure-stream-81976.herokuapp.com/parts")
      .then((res) => res.json())
      .then((data) => setManufactures(data));
  }, []);
  return (
    <div className="my-28">
      <h1 className="text-5xl text-sky-700 mb-5">Laptop Parts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {manufactures.map((manufacture) => (
          <Manufacturer
            key={manufacture._id}
            manufacture={manufacture}
          ></Manufacturer>
        ))}
      </div>
    </div>
  );
};

export default Manufactures;
