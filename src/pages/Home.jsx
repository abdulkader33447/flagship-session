import React from "react";
import Hero from "../components/Hero";
import PhonesContainer from "../components/PhonesContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  // data receive from routes.jsx
  const data = useLoaderData();
  // console.log(data);
  return (
    <>
      <Hero />
      <PhonesContainer phones={data} />
    </>
  );
};

export default Home;
