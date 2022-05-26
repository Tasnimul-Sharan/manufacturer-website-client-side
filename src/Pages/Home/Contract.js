import React from "react";
import "./Contract.css";

const Contract = () => {
  return (
    // style={{ background: `url(${appointment})` }}
    // className="bg-primary px-10 py-14 "
    <div className="background">
      <div className="grid grid-cols-1 justify-items-center gap-5 my-5">
        <h1 className="text-3xl lg:text-white">Contract us</h1>
        <h1 className="text-3xl lg:text-white">Stay Connected with us</h1>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <input
                className="input w-full max-w-md"
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <input
                className="input w-full max-w-md"
                type="text"
                placeholder="Subject"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <textarea
                className="input w-full max-w-md"
                class="textarea textarea-bordered"
                placeholder="Your message"
              ></textarea>
            </div>
            <div class="form-control mt-6">
              <button class="btn ">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
