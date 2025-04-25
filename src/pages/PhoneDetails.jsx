import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router";
import Button from "../components/ui/Button";

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
    // brand,
    // model,
    // price,
    // description,
    // storage,
    // camera_info,
  } = singlePhone || {};

  return (
    <div className="w-full py-12 mx-auto">
      <Helmet>
        <title>flagship | {name}</title>
      </Helmet>
      <img
        className="sm:w-full  mx-auto rounded mb-7"
        src={image}
        alt="banner image"
      />
      <div className="flex justify-between">
        <h1 className=" sm:text-6xl text-2xl font-thin mb-7">{name}</h1>
        <div className="flex">
          
          <Button label="cart"/>
          <Button label="favorite"/>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
