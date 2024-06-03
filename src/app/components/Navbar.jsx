import React from 'react'
import { IoIosSearch } from "react-icons/io";
import Image from 'next/image';
import logo from "../../../public/assests/logo.png"
export const Navbar = () => {
  return (
    <div className="w-full flex flex-row items-center justify-around  bg-primary1 py-[1rem]" >

<div className="flex flex-row gap-2 items-center justify-center">
<IoIosSearch  className=" text-white"/>
<h3 className="font-Gelasio text-white text-[16px]">Search</h3>
</div>
<div className="flex flex-row gap-1 lg:gap-2 items-center justify-center">
<Image
src = {logo}
width = {45}
height = {40}
alt = "logo"
/>
<h2 className="font-Gelasio font-semibold text-[24px] lg:text-[35px] text-primary2">Coilycue</h2>
</div>
<button className=  "duration-500 hover:bg-transparent border-[1px] border-primary2 hover:border-white hover:text-primary2 text-white font-Gelasio text-[14px] lg:text-[16px] font-semibold bg-primary2 w-[70px] h-[35px] lg:w-[110px] lg:h-[48px] cursor-pointer rounded-2xl">Buy</button>
    </div>
  )
}
