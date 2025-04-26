import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router";
import Button from "../components/ui/Button";
import { MdBookmarkAdd, MdShoppingCartCheckout } from "react-icons/md";
import { addFavorite } from "../utils";

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

  const handleFavorite = ()=>{
    addFavorite(singlePhone)
  }

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
      {/* title and btn */}
      <div className="flex justify-between">
        <h1 className=" sm:text-6xl text-2xl font-thin mb-7">{name}</h1>
        <div className="flex gap-5">
          <Button label={<MdShoppingCartCheckout />} />
          <Button onClick={handleFavorite} label={<MdBookmarkAdd />} />
        </div>
      </div>
      {/* details */}
      <div></div>
    </div>
  );
};

export default PhoneDetails;
