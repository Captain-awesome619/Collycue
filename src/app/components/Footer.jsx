import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full h-[440px] bg-primary2 gap-[2rem] flex flex-col items-center justify-center">

         <div className="flex flex-row gap-[3rem] lg:gap-[5rem] pb-[1.5rem] border-white border-b-[2px] w-[45%]  items-center justify-center  ">
         <a href= "https://www.facebook.com/coilycuehair"> <FaFacebook size={40} color='white' className="cursor-pointer lg:text-[40px] w-[30px]"/></a>
         <a href="https://www.instagram.com/coilycuehair?igsh=cG51MTNvdTdhYXhh"> <FaInstagram size={40} color='white' className="cursor-pointer lg:text-[40px] w-[30px]"  /></a>
         <a href="https://www.tiktok.com/@coilycuehair?_t=8n40gwVZkwf&_r=1">  <FaTiktok size={40} color='white' className="cursor-pointer lg:text-[40px] w-[30px]"/></a>
 </div>
 <div className="flex flex-row items-center justify-center gap-[2rem]">
 <div className="flex flex-row gap-[0.5rem] items-center justify-center">
 <BsTelephone size={30} color='white' className="cursor-pointer  lg:text-[30px] w-[25px]"/>
 <text className="font-Lato font-normal text-[16px] lg:text-[20px] text-white">+44</text>
 </div>
 <div className="flex flex-row gap-[0.3rem] items-center justify-center">
 <IoMailOutline size={30} color='white' className="cursor-pointer  lg:text-[30px] w-[25px]"/>
 <text className="font-Lato font-normal text-[16px] lg:text-[20px] text-white">@gmail.com</text>
 </div>
 </div>
        </div>
  )
}

export default Footer