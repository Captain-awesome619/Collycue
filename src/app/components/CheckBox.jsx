"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import model from "../../../public/assests/display1.png"
import { CiCamera } from "react-icons/ci";
import model2 from "../../../public/assests/display2.png"
import model3 from "../../../public/assests/display3.png"
import { IoCameraOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
const Policy = () => {
  const [Checked,SetChecked] = useState(false)
  function checkbox() {
SetChecked(!Checked)
  }
  const Navigate  = useRouter()
  return (
    <motion.div
    initial={{ opacity: 0, x: -15 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay:0.5 }}
    viewport={{once: true}}
    className="flex flex-col lg:flex-row items-center justify-center gap-[3rem]">
    <Image
    src = {model}
    width = {375}
    height = {380}
    alt = "model"
    />
    <div className="flex flex-col justify-around items-center lg:items-start w-[90%] lg:w-[45%] gap-[2rem] ">
    <h3 className="font-Gelasio text-[20px] font-semibold text-primary3 text-center ">Virtual Try-On</h3>
    <div className="flex flex-row gap-[0.5rem] justify-center  ">
    <input type="checkbox" className="w-[100px] h-[30px] text-primary3 cursor-pointer" onClick={checkbox}   />
    {console.log(Checked)}
    <h4 className="font-Lato leading-[30px] font-semibold  text-[13px] text-primary4 ">I consent to the scanning of my face and the processing of my image. When you engage with Coilycue's Try On
       Live or Use Photo virtual try-on features, you can trust that your photo data is handled with utmost security.
       It's processed and stored exclusively on your device,
      ensuring your privacy is maintained, and there's no transmission to external servers.</h4>
    </div>
    <div  className= {Checked === false ? "flex flex-col gap-[2rem] opacity-[0.2]  z-[-1] duration-500" : "duration-500 flex flex-col gap-[2rem] "} >
    <button onClick={()=>Navigate.push("/ProductPage")} disabled={!Checked} className="bg-primary3 flex items-center justify-center w-[150px] lg:w-[200px] h-[50px] gap-[0.5rem] ">
    <IoCameraOutline className="text-white text-[20px] lg:text-[25px]" />
    <text className="font-Gelasio text-white text-[14px] font-semibold">LIVE TRY</text>
    </button>

    <div className="flex flex-row gap-[0.5rem]  cursor-pointer"  onClick={()=>Navigate.push("/ProductPage")}>
    <Image src={model3}
width={18}
height ={19}
alt= "icon"
    />
    <text className="font-Gelasio font-semibold text-[14px] text-primary3">UPLOAD PHOTO</text>
    </div>

    <div className="flex flex-row gap-[0.5rem] cursor-pointer  "  onClick={()=>Navigate.push("/ProductPage")} >
    <Image src={model2}
width={18}
height ={19}
alt= "icon"
    />
    <text className="font-Gelasio font-semibold text-[14px] text-primary3">USE MODEL</text>
    </div>
    </div>
    </div>
        </motion.div>
  )
}

export default Policy