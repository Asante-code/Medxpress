import React from "react"
import logo from "../assets/Images/Logo.png";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { BsCart3 } from "react-icons/bs";


const Navbar = () => {
  return (
    <div className="flex justify-between pt-5 px-6">
        <div className="">
            <img src={logo} alt="Logo" className="h-11 w-auto bg-[#F5F5F0] rounded-xl px-3 py-2"/>
        </div>

        <div className="flex h-11 w-[500px] max-w-2xl items-center rounded bg-gray-100 px-4">
          <input
            type="text"
            placeholder="Search medicine, medical products"
          className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
      />
      <HiOutlineMagnifyingGlass className="text-lg text-gray-600" />
    </div>
    
    <div className="flex gap-6">
      <div className="w-30  h-11 flex text-center items-center text-sm font-semibold text-gray-500 placeholder-gray-400 hover:bg-[#F5F5F0] outline-none px-2  rounded-full ">
        Your Account
      </div>
      <div className="flex items-center text-center justify-center  gap-2  h-11 w-25  text-sm font-semibold text-gray-500 placeholder-gray-400 hover:bg-[#F5F5F0] outline-none px-2 py-2 rounded-full ">
  
          <BsCart3 /> Cart
      </div>
    </div>

    </div>

  )
}

export default Navbar