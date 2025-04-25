import React, { useState } from "react";
import bannerImg from "../assets/banner.png";
import Button from "./ui/Button";

const Hero = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  // console.log(searchText);
  return (
    <div className="py-12">
      <img
        className="w-full max-w-2/3 mx-auto"
        src={bannerImg}
        alt="banner image"
      />
      <div className="text-center space-y-4">
        <h1 className="font-thin sm:text-7xl text-4xl text-gray-950">
          Browse, Search, View, Buy
        </h1>
        <p className="text-gray-500 sm:max-w-2xl mx-auto">
          Best place to browse, search, view details and purchase of top
          flagship phones of the current time - FlagshipFaceOff
        </p>
        <form
          onSubmit={(e) =>{
            handleSearch(e, searchText)
            // reset input state
            setSearchText('')
          }}
          className="flex flex-col md:flex-row items-center justify-center mb-4 md:px-24"
        >
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search Phone Name"
            className="bg-white border border-gray-300 rounded shadow-md h-12 w-2/3 px-3 mb-2 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0"
          />
          
          <Button label="Search" type="submit"/>
        </form>
      </div>
    </div>
  );
};

export default Hero;
