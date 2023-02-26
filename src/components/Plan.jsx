import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1100px] grid md:grid-cols-2 gap-4 pb-12 m-auto ">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh] px-4">
        <img className="row-span-3 object-cover w-full h-full  pb-2"
          src="https://cdn.pixabay.com/photo/2018/10/02/16/12/nature-3719233__340.jpg"
          alt=""
        />
        <img className="row-span-2 object-cover w-full h-full  p-2"
          src="https://cdn.pixabay.com/photo/2016/07/30/00/03/winding-road-1556177__340.jpg"
          alt=""
        />
        <img className="row-span-2 object-cover w-full h-full  p-2"
          src="https://cdn.pixabay.com/photo/2016/11/30/15/00/lighthouse-1872998__340.jpg"
          alt=""
        />
        <img className="row-span-3 object-cover w-full h-full  p-0"
          src="https://cdn.pixabay.com/photo/2017/06/17/18/35/beach-2413081__340.jpg"
          alt=""
        />
        <img className="row-span-2 object-cover w-full h-full  p-2"
          src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col h-full justify-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-4 text-gray-700">Plan Your Next Trip</h1>
        <h3 className="font-bold py-1 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
          quod.
        </h3>
        <p className="font-normal text-gray-500 py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iste
          pariatur totam sed vel corrupti alias fugit illo nam, sapiente illum,
          est animi ea doloribus autem repudiandae cumque, quae sunt dolore id
          accusamus a? Saepe nam eaque consequatur voluptatibus maiores.
        </p>
        <div className="py-4">
        <button className="border-black hover:shadow-xl">See More</button>
        <button className="bg-black text-white ml-4 hover:shadow-xl">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
