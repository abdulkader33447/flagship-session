import React from "react";
import { useLoaderData, useParams } from "react-router";

const PhoneDetails = () => {
  const data = useLoaderData();
  // console.log(data)

  const { id } = useParams();
  // console.log(id);

  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  // console.log(singlePhone)

  const {
    name,
    image,
    brand,
    model,
    price,
    description,
    storage,
    camera_info,
  } = singlePhone || {};

  return (
    <div className="w-full py-12 mx-auto">
      <img
        className="w-full max-w-2/3 mx-auto rounded mb-7"
        src={image}
        alt="banner image"
      />
      <div className="flex justify-between">
        <h1 className="text-6xl font-thin mb-7">{name}</h1>
        <button className="btn">btn</button>
      </div>
    </div>
  );
};

export default PhoneDetails;
