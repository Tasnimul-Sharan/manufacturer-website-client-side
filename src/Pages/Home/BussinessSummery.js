import {
  faAddressBook,
  faFaceLaugh,
  faHardDrive,
  faLaptop,
  faMoneyBill,
  faMoneyBillTransfer,
  faMoneyCheckDollar,
  faPeopleArrows,
  faRainbow,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Bussness.css";

const BussinessSummery = () => {
  return (
    <section className="my-28 container mx-auto">
      <h1 className="text-5xl text-sky-800">Millions Business Trust Us</h1>
      <h3 className="text-3xl text-slate-800 text-bold">
        Try to understand user Expectation
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div class="card w-50 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2>
              {" "}
              <FontAwesomeIcon
                className="fontawsome bg-slate-800"
                icon={faHardDrive}
              ></FontAwesomeIcon>
            </h2>
            <p className="text-5xl text-sky-800">
              1000+
              <br />
              <span className="text-slate-900">Parts</span>
            </p>
          </div>
        </div>
        <div class="card w-50 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2>
              {" "}
              <FontAwesomeIcon
                className="fontawsome bg-slate-800"
                icon={faMoneyCheckDollar}
              ></FontAwesomeIcon>
            </h2>
            <p className="text-5xl text-sky-800">
              120M
              <br />
              <span className="text-slate-900">Annual revenue</span>
            </p>
          </div>
        </div>
        <div class="card w-50 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2>
              {" "}
              <FontAwesomeIcon
                className="fontawsome bg-slate-800"
                icon={faFaceLaugh}
              ></FontAwesomeIcon>
            </h2>
            <p className="text-5xl text-sky-800">
              30K
              <br />
              <span className="text-slate-900">Reviews</span>
            </p>
          </div>
        </div>
        <div class="card w-50 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2>
              <FontAwesomeIcon
                className="fontawsome bg-slate-800"
                icon={faPeopleArrows}
              ></FontAwesomeIcon>
            </h2>
            <p className="text-5xl text-sky-800">
              5000+
              <br />
              <span className="text-slate-900">Customers</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BussinessSummery;
