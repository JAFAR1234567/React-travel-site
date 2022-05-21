import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import beachVid from "../assets/beachVid.mp4";
export const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        src={beachVid}
        className="object-cover h-screen w-full"
        autoPlay
        loop
        muted
      />
      <div className="absolute bg-gray-900/30 top-0 left-0 w-full h-full"></div>
      <div className="absolute top-0 text-white flex flex-col justify-center items-center h-full w-full p-4">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% Locations Worldwide</h2>
        <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md bg-gray-100/90">
          <div>
            <input
              className="bg-transparent pl-3 focus:outline-none w-[300px] sm:w-[400px] font-[Poppins] text-gray-700"
              type="text"
              name=""
              id=""
              placeholder="Search Destination"
            />
          </div>
          <div>
            <button className="search-icon" style={{ color: "#ffffff" }}>
              <AiOutlineSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
