import React, { useEffect, useState } from "react";
import Manufacturer from "./Manufacturer";

const Manufactures = () => {
  const [manufactures, setManufactures] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5005/parts")
      .then((res) => res.json())
      .then((data) => setManufactures(data));
  }, []);
  return (
    <div>
      <h1>Manufacturers Parts</h1>
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
