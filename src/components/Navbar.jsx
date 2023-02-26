import React from "react";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [navbar, setNavbar] = useState(true);
  const handleNavbar = () => {
    setNavbar(!navbar);
  };
  return (
    <>
      {navbar ? (
        <div className="w-full absolute flex p-4 justify-between items-center">
          <h1 className="text-white font-bold text-2xl z-20">BcoD.</h1>
          <HiMenuAlt1
            size={25}
            className="text-white z-20 cursor-pointer"
            onClick={handleNavbar}
          />
        </div>
      ) : (
        <div className="fixed w-full h-screen bg-black/80 z-10">
          <div className="w-full absolute flex p-4 justify-between items-center">
            <h1 className="text-white font-bold text-2xl">BcoD.</h1>
            <AiOutlineClose
              size={25}
              className="text-white cursor-pointer"
              onClick={handleNavbar}
            />
          </div>
          <ul
            className=" fixed w-full h-screen text-white flex flex-col items-center h-screen justify-center"
            onClick={handleNavbar}
          >
            <li className="text-2xl m-4 p-2 border rounded-full w-[200px] text-center bg-slate-500/40 hover:bg-slate-500/100">
              Home
            </li>
            <li className="text-2xl m-4 p-2 border rounded-full w-[200px] text-center bg-slate-500/40 hover:bg-slate-500/100">
              About
            </li>
            <li className="text-2xl m-4 p-2 border rounded-full w-[200px] text-center bg-slate-500/40 hover:bg-slate-500/100">
              Service
            </li>
            <li className="text-2xl m-4 p-2 border rounded-full w-[200px] text-center bg-slate-500/40 hover:bg-slate-500/100">
              Contact
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
