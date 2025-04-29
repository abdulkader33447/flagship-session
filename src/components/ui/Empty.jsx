import React from "react";
// import bannerImg from "";
import { Link } from "react-router";
import Button from "./Button";



const Empty = () => {
  return (
    <div className="text-center space-y-4 mt-20">
      <h1 className="font-thin sm:text-7xl text-4xl text-gray-950">
        Browse, Search, View, Buy!
      </h1>
      <p className="text-gray-500 sm:max-w-2xl mx-auto">Not favorite list</p>
      <Link  to='/'>
      <Button label="Go To Home"/>
      </Link>
      {/* <Link label='home' to="/"></Link> */}
    </div>
  );
};

export default Empty;
