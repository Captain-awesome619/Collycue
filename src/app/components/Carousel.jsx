"use client"
import React,{useRef, useState} from 'react'
import { motion, useScroll } from 'framer-motion';
import CarouselData from './CarouselData'
import Image from 'next/image'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Loading from './loading';
const Carousel = () => {
  const [View,SetView] = useState(1)

function Forward() {
  // implementing useReff hook to target for frammer maotion//

  SetView((prevview) => prevview + 1);
}
function Backward() {
SetView(prevview => prevview - 1)
}
const imageLoader = ({ src, width, quality }) => {
  return <Loading/>
}
  const refs = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refs, // gives the component to apply animation//
    offset: ['0 1', '1.1 0.9'], // specifies when to start effecting animation//
  });
  return (
    <motion.div
      ref={refs}
      style={{scale:scrollYProgress, opacity:scrollYProgress }}
      className='flex flex-col gap-[2rem]'>
      <h2 className='font-Gelasio font-semibold text-[18px] lg:text-[24px]  text-primary3 text-center'>
        Try On Hair-Styles Virtually With Just 3 Easy Steps
      </h2>
      <div className='w-screen h-max  lg:pb-0'>
        {CarouselData?.map((data, id) => (
          <div
            className=''
            key={id}>
            {data.id === View ? (
              <div className=' relative left-[0%] flex flex-col lg:h-max h-[400px]  bg-primary2  items-center gap-[1rem] lg:gap-[4rem] duration-500   lg:flex-row'>
                <div
                  style={{
                    backgroundImage: `url("${data.picture}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                  className='lg:w-[600px] lg:h-[400px] h-[250px] w-screen'></div>

                <div className=' grid gap-[0.5rem] lg:gap-[2rem] w-[300px]   lg:w-[650px]'>
                  <div className='flex flex-row items-center justify-between'>
                    <h1 className='font-Gelasio font-semibold text-white text-[40px] lg:text-[100px]'>
                      {data.number}
                    </h1>
                    <div className='flex flex-row items-center justify-center gap-[1rem]'>
                      <button
                        onClick={Backward}
                        disabled={View == 1}>
                        <FaAngleLeft
                          size={20}
                          className={
                            View == 1
                              ? 'text-[#000000] cursor-not-allowed '
                              : ' cursor-pointer text-white'
                          }
                        />
                      </button>
                      <button
                        onClick={Forward}
                        disabled={View == 3}>
                        <FaAngleRight
                          size={20}
                          className={
                            View == 3
                              ? 'text-[#000000] cursor-not-allowed '
                              : ' cursor-pointer text-white'
                          }
                        />
                      </button>
                    </div>
                  </div>
                  <h3 className='font-Gelasio font-semibold text-white text-[15px] lg:text-[20px]'>
                    {data.text}
                  </h3>
                  <h4 className='font-Lato font-semibold text-white text-[12px] pb-[0.7rem] lg:text-[14px]'>
                    {data.text2}
                  </h4>
                </div>
              </div>
            ) : (
              <div className='relative left-[-40%] '></div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
export default Carousel