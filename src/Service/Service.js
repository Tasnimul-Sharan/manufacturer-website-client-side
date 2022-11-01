import {
  faBusinessTime,
  faCalendar,
  faCalendarAlt,
  faCalendarCheck,
  faCalendarDay,
  faCalendarDays,
  faClock,
  faDollar,
  faFastForward,
  faHouseLaptop,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <section className="my-28 container mx-auto">
      <h1 className="text-5xl text-sky-800 mb-5">
        Why to Choose Space Electronics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div class="card w-50 shadow-xl">
          <div class="card-body">
            <h2>
              <FontAwesomeIcon
                className="fontawsome bg-slate-700"
                icon={faDollar}
              ></FontAwesomeIcon>
            </h2>
            <p className="text-2xl text-cyan-800">Secure Payment</p>
            <p className="font-bold text-xl">Pay with secure payment methods</p>
          </div>
        </div>
        <div class="card w-50 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2>
              <FontAwesomeIcon
                className="fontawsome bg-slate-700"
                icon={faCalendarDays}
              ></FontAwesomeIcon>
            </h2>
            <p className="text-2xl text-cyan-800">30-day Return Policy</p>
            <p className="font-bold text-xl">
              If your item is not as described or damaged,you may return it
              within 30 days upon delivery
            </p>
          </div>
        </div>
        <div class="card w-50 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2>
              <FontAwesomeIcon
                className="fontawsome bg-slate-700"
                icon={faBusinessTime}
              ></FontAwesomeIcon>
            </h2>
            <p className="text-2xl text-cyan-800">14 Years of Experience</p>
            <p className="font-bold text-xl">
              14 years experience of cross-border electtic business plants
            </p>
          </div>
        </div>
        <div class="card w-50 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2>
              <FontAwesomeIcon
                className="fontawsome bg-slate-700"
                icon={faTruckFast}
              ></FontAwesomeIcon>
            </h2>
            <p className="text-2xl text-cyan-800">Free Delivery</p>
            <p className="font-bold text-xl">
              Our Delivery System is totally free.Anyone will get products in 24
              hours.
            </p>
          </div>
        </div>
        <div class="card w-50 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2>
              <FontAwesomeIcon
                className="fontawsome bg-slate-700"
                icon={faClock}
              ></FontAwesomeIcon>
            </h2>
            <p className="text-2xl text-cyan-800">24/7 Customer Service</p>
            <p className="font-bold text-xl">
              We'll respond to you within 24 hours
            </p>
          </div>
        </div>
        <div class="card w-50 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2>
              <FontAwesomeIcon
                className="fontawsome bg-slate-700"
                icon={faHouseLaptop}
              ></FontAwesomeIcon>
            </h2>
            <p className="text-2xl text-cyan-800">Huge Parts</p>
            <p className="font-bold text-xl">
              We have a huge laptop parts with supper quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
