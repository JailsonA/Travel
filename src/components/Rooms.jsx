import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1100px] w-full grid md:grid-cols-2 gap-4 p-4 mx-auto bg-blue-200 h-[400px]'>
      <div className='relative flex flex-col h-full mt-24'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold py-4 text-gray-100'>Find Interior Rooms</h1>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, assumenda sint? Totam error obcaecati atque inventore praesentium doloribus beatae vero!</p>
      </div>
      <div className='grid grid-cols-2 grid-rows-2 h-[80vh] mt-12'>
      <img className="row-span-1 object-cover w-full h-full  pb-4"
          src="https://cdn.pixabay.com/photo/2016/07/30/00/03/winding-road-1556177__340.jpg"
          alt=""
        />
        <img className="row-span-2 object-cover w-full h-full  pl-4"
          src="https://cdn.pixabay.com/photo/2016/11/30/15/00/lighthouse-1872998__340.jpg"
          alt=""
        />
        <img className="row-span-1 object-cover w-full h-full "
          src="https://cdn.pixabay.com/photo/2017/06/17/18/35/beach-2413081__340.jpg"
          alt=""
        />
      </div>
    </div>
  )
}

export default Rooms
