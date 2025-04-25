import React, { useState } from "react";
import Hero from "../components/Hero";
import PhonesContainer from "../components/PhonesContainer";
import { useLoaderData } from "react-router";
import { Helmet } from "react-helmet-async";

const Home = () => {
  // data receive from routes.jsx
  const data = useLoaderData();
  // console.log(data);
  const [phones, setPhones] = useState(data);

  const handleSearch = (e, text) => {
    e.preventDefault();

    if (text === "") return setPhones(data);

    const searchedPhones = data.filter(
      (phone) =>
        phone?.name?.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        phone?.brand?.toLowerCase().split(" ").includes(text.toLowerCase())
    );
    // console.log(text)
    // console.log(searchedPhones);
    setPhones(searchedPhones);
  };
  return (
    <>
    <Helmet>
      <title>flagship | home</title>
    </Helmet>
      <Hero handleSearch={handleSearch} />
      <PhonesContainer phones={phones} />
    </>
  );
};

export default Home;
