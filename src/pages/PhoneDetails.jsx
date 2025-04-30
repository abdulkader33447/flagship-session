import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router";
import Button from "../components/ui/Button";
import { MdBookmarkAdd, MdShoppingCartCheckout } from "react-icons/md";
import { addFavorite, addToCart, getCart } from "../utils";
import { CartContext } from "../providers/Context";

const PhoneDetails = () => {
  const { setCart } = useContext(CartContext);

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

  const handleFavorite = () => {
    addFavorite(singlePhone);
  };

  const handleCart = () => {
    // save to local storage for persistency
    addToCart(singlePhone);

    // update state for instant ui
    setCart(getCart());
  };

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
          <Button onClick={handleCart} label={<MdShoppingCartCheckout />} />
          <Button onClick={handleFavorite} label={<MdBookmarkAdd />} />
        </div>
      </div>
      {/* details */}
      <div></div>
    </div>
  );
};

export default PhoneDetails;
