import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0  left-0 w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1626606076701-cf4ae64b2b03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        alt="/"
      />
      <div className="bg-black/60 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>All inclusive</p>
          <h1 className="text-3xl font-bold sm:text-5xl md:text-7xl drop-shadow-2xl">Private Travels & Gatways</h1>
          <p className="max-w-[600px] drop-shadow-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            officiis sint eveniet aliquid, architecto dolorum provident dolor
            saepe commodi hic!
          </p>
          <button className="bg-white text-black font-bold mt-2">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
