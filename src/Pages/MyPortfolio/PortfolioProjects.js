import React from "react";

const PortfolioProjects = () => {
  return (
    <section>
      <h1 className="text-5xl mb-5">My projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div class="card w-96 bg-neutral text-white shadow-xl">
          <figure class="px-10 pt-10">
            <h1 className="text-2xl">Rapid Learner</h1>
          </figure>
          <div class="card-body items-center text-center">
            <div class="card-actions">
              <a
                target="_blank"
                href="https://independent-service-prov-ba570.web.app/"
              >
                <button class="btn btn-success"> Website link</button>
              </a>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-neutral text-white shadow-xl">
          <figure class="px-10 pt-10">
            <h1 className="text-2xl">The gadget zone</h1>
          </figure>
          <div class="card-body items-center text-center">
            {/* <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p> */}
            <div class="card-actions">
              <a
                target="_blank"
                href="https://warehouse-management-264df.web.app/"
              >
                <button class="btn btn-success"> Website link</button>
              </a>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-neutral text-white shadow-xl">
          <figure class="px-10 pt-10">
            <h1 className="text-2xl">Space Electronics</h1>
          </figure>
          <div class="card-body items-center text-center">
            {/* <h2></h2> */}
            <div class="card-actions">
              <a
                target="_blank"
                href="https://manufacturer-website-c6d47.web.app/"
              >
                <button class="btn btn-success"> Website link</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects;
