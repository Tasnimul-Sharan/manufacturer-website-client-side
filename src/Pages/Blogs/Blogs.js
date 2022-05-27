import React from "react";

const Blogs = () => {
  return (
    <div className="my-10">
      <h1 className="text-3xl text-gray-900 mb-5">Some Questions and Answer</h1>
      <div className="">
        <div
          tabindex="0"
          class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
            How will you improve the performance of a React Application?
          </div>
          <div class="collapse-content">
            <p>
              1.I will keep my component state in local where necessary <br />
              2.I will beMemoizing React components to prevent unnecessary
              re-renders. <br />
              3.I will do code-splitting in React using dynamic import() <br />
              4.I will do Windowing or list virtualization in React. <br />
              5.I will avoid Lazy loading images in React. <br />
            </p>
          </div>
        </div>
        <div
          tabindex="0"
          class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div class="collapse-content">
            <p>
              There are four main types of state need to properly manage in
              React apps: <br />
              1.Local state <br />
              2.Global state
              <br />
              3.Server state
              <br />
              4.URL state
              <br />
            </p>
          </div>
        </div>
        <div
          tabindex="0"
          class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
            How does prototypical inheritance work?
          </div>
          <div class="collapse-content">
            <p>
              Everything in Javascript is an object. Even when creating a Class
              is an Object via an Object or Constructor Function. This is how
              Javascript does class-based programming as to other traditional
              Object-Oriented Programming languages where they use the keyword
              class and inheritance. Javascript’s version of class-based
              programming and other traditional class-based programming
              languages work with the same concept but does not work exactly
              similar. There are differences in its keyword, syntax, and how it
              works. There are also debates regarding pros and cons of
              Javascript’s version of class-based programming.the core idea of
              Prototypal Inheritance is that an object can point to another
              object and inherit all its properties. The main purpose is to
              allow multiple instances of an object to share common properties.
            </p>
          </div>
        </div>
        <div
          tabindex="0"
          class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
            Why you do not set the state directly in React.
          </div>
          <div class="collapse-content">
            <p>
              I do never update the state directly because of the following
              reasons: <br />
              If i update it directly, calling the setState() afterward it just
              replace the update i made. When i directly update the state, it
              does not change this immediately.Instead, it creates a pending
              state transition, and accessing it after calling this method will
              only return the present value. You will lose control of the state
              across all components.
            </p>
          </div>
        </div>
        <div
          tabindex="0"
          class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div class="collapse-title text-xl font-medium">
            What is a unit test? Why should write unit tests?
          </div>
          <div class="collapse-content">
            <p>
              Unit testing is a software development process in which the
              smallest testable parts of an application, called units, are
              individually and independently scrutinized for proper operation{" "}
              <br />
              Unit testing ensures that all code meets quality standards before
              it's deployed. This ensures a reliable engineering environment
              where quality is paramount. Over the course of the product
              development life cycle, unit test saves time and money,and helps
              developers write better code, more efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
