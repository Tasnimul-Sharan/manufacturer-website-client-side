import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm ";

const stripePromise = loadStripe(
  "pk_test_51L0gl9DSPmuM2wlXUsxQUunhceYL44o1t3GvH8OLKIwCl95BkfeiI9KCfWMr1jRi09KTNH0AdOTK3647RO6gHH1k00j5G0DYnK"
);

const Payment = () => {
  const { id } = useParams();
  const { data: manufacture, isLoading } = useQuery(["orders", id], () =>
    fetch(`http://localhost:5005/orders/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  console.log(manufacture);
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h1 class="card-title text-success font-sans">
              Hello {manufacture?.name}
            </h1>
            <h2 className="text-xl text-slate-900 font-serif">
              Please pay for {manufacture.partsname}
            </h2>
            <img src={manufacture.image} alt="" />
            <h2 className="text-xl text-orange-600">
              Please pay: ${manufacture.price}
            </h2>
          </div>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm manufacture={manufacture} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
