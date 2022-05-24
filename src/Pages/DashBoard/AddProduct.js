import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const imageApiKey = "bb01b12cb224b0091676d6f4e7cd5bca";

  //   const onSub = async (data) => {
  //     console.log(data.image[0]);
  //     const image = data.image[0];
  //     const formData = new FormData();
  //     formData.append("image", image);

  //     fetch(`https://api.imgbb.com/1/upload?key=${imageApiKey}`, {
  //       method: "POST",
  //       body: formData,
  //     })
  //       .then((res) => res.json())
  //       .then((result) => {
  //         console.log("imagebb", result);
  //         if (result.success) {
  //           const img = result.data.url;
  //           const doctor = {
  //             name: data.name,
  //             email: data.email,
  //             specialty: data.specialty,
  //             img: img,
  //           };

  //           fetch("https://stormy-earth-10595.herokuapp.com/parts", {
  //             method: "POST",
  //             headers: {
  //               "content-type": "application/json",
  //               authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //             },
  //             body: JSON.stringify(doctor),
  //           })
  //             .then((res) => res.json())
  //             .then((inserted) => {
  //               console.log("doctor", inserted);
  //               if (inserted.insertedId) {
  //                 toast.success("Doctor added successfully");
  //               } else {
  //                 toast.error("Faild to add an doctor");
  //               }
  //             });
  //         }
  //       });
  //   };

  const onSubmit = (data) => {
    console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageApiKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("image", result);
        if (result.success) {
          const picture = result.data.url;
          console.log(picture);

          const product = {
            name: data.partsname,
            email: data.email,
            price: data.price,
            availableQuantity: data.availableQuantity,
            minimumQuantity: data.minimumQuantity,
            picture: picture,
          };
          fetch("http://localhost:5005/parts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              console.log(inserted);
              if (inserted.insertedId) {
                toast.success("You have added a product successfully");
              } else {
                toast.error("failed to add an product");
              }
            });
        }
      });
  };
  // name, price, picture, availableQuantity, minimumQuantity
  return (
    <div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <input
                type="text"
                placeholder="Parts namae"
                class="input input-bordered w-full max-w-xs"
                {...register("partsname")}
                // value={manufacture.name}
              />
              <input
                type="number"
                placeholder="Enter a price"
                class="input input-bordered w-full max-w-xs"
                {...register("price")}
                // value={manufacture.price}
              />
              <input
                type="number"
                placeholder="Enter an Available Quantity"
                class="input input-bordered w-full max-w-xs"
                {...register("availableQuantity")}
                // value={manufacture.price}
              />
              <input
                type="number"
                placeholder="Enter an Minimum Quantity"
                class="input input-bordered w-full max-w-xs"
                {...register("minimumQuantity")}
                // value={
              />

              <input
                type="file"
                placeholder="Upload an image"
                class="input input-bordered w-full max-w-xs"
                {...register("image")}
              />
              <input
                type="submit"
                className="btn  w-full max-w-xs"
                value="Add Product"
              />
            </div>
          </form>
        </div>
      </div>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input
          class="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Parts name"
          {...register("name")}
        />
        <input {...register("")} />
        <input type="number" placeholder="" {...register("price")} />
        <input
          type="number"
          placeholder=""
          {...register("availablequantity")}
        />
        <input type="number" placeholder="" {...register("minimumquantity")} />
        <input
          type="submit"
          value="Add Product"
          className="btn btn-outline btn-accent"
        />
      </form> */}
    </div>
  );
};

export default AddProduct;
