"use client"
import React,{useRef, useState} from 'react'
import Image from 'next/image'
import model from "../../../public/assests/display1.png"
import { CiCamera } from "react-icons/ci";
import model2 from "../../../public/assests/display2.png"
import model3 from "../../../public/assests/display3.png"
import { IoCameraOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import { useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
const variant={
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{
      staggerChildren:0.3
    }
  }
}
const flow={
  hidden:{
    opacity:0,
    x:100
  },
  show:{
    opacity:1,
    x:0,
    transition:{
      duration:1.5
    }
  }
}
const flows = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};
const Policy = () => {
  // implementing useReff hook to target for frammer maotion//
  const ref =useRef(null)
 const {scrollYProgress}= useScroll({
    target:ref,// gives the component to apply animation//
    offset:["0 0.8", "1.1 0.9"]// specifies when to start effecting animation//
  })
  useEffect(() => {
    // Initialize AOS after the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', () => {
      AOS.init();
    });
  }, []);
  const [Checked,SetChecked] = useState(false)
  function checkbox() {
SetChecked(!Checked)
  }
  const Navigate  = useRouter()
  return (
    <motion.div
    
      variants={variant}
      initial='hidden'
      animate={'show'}
      className='flex flex-col lg:flex-row items-center justify-center gap-[3rem]'>
      <motion.div
        variants={flows}
        initial={'hidden'}
        animate={'show'}>
        <Image
          src={model}
          width={375}
          height={380}
          alt='model'
        />
      </motion.div>
      <motion.div
      ref={ref}
      style={
        {scale:scrollYProgress,
          opacity:scrollYProgress
        }
      }
        variants={flow}
        initial={'hidden'}
        animate={'show'}
        className='flex flex-col justify-around items-center lg:items-start w-[90%] lg:w-[45%] gap-[2rem] '>
        <h3 className='font-Gelasio text-[20px] font-semibold text-primary3 text-center '>
          Virtual Try-On
        </h3>
        <div className='flex flex-row gap-[0.5rem] justify-center  '>
          <input
            type='checkbox'
            className='w-[100px] h-[30px] text-primary3 cursor-pointer'
            onClick={checkbox}
          />
          {console.log(Checked)}
          <h4 className='font-Lato leading-[30px] font-semibold  text-[13px] text-primary4 '>
            I consent to the scanning of my face and the processing of my image.
            When you engage with Coilycle's Try On Live or Use Photo virtual
            try-on features, you can trust that your photo data is handled with
            utmost security. It's processed and stored exclusively on your
            device, ensuring your privacy is maintained, and there's no
            transmission to external servers.
          </h4>
        </div>
        <div
          className={
            Checked === false
              ? 'flex flex-col gap-[2rem] opacity-[0.2]  z-[-1] duration-500'
              : 'duration-500 flex flex-col gap-[2rem] '
          }>
          <button
            onClick={() => Navigate.push('/ProductPage')}
            disabled={!Checked}
            className='bg-primary3 flex items-center justify-center w-[150px] lg:w-[200px] h-[50px] gap-[0.5rem] '>
            <IoCameraOutline className='text-white text-[20px] lg:text-[25px]' />
            <text className='font-Gelasio text-white text-[14px] font-semibold'>
              LIVE TRY
            </text>
          </button>
          <input
            type='file'
            className='hidden'
          />
          <div className='flex flex-row gap-[0.5rem]  cursor-pointer'>
            <Image
              src={model3}
              width={18}
              height={19}
              alt='icon'
            />
            <text className='font-Gelasio font-semibold text-[14px] text-primary3'>
              UPLOAD PHOTO
            </text>
          </div>

          <div className='flex flex-row gap-[0.5rem] cursor-pointer  '>
            <Image
              src={model2}
              width={18}
              height={19}
              alt='icon'
            />
            <text className='font-Gelasio font-semibold text-[14px] text-primary3'>
              USE MODEL
            </text>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Policy