"use client"
import React,{useEffect} from 'react'
import Image from "next/image";
import Policy from './components/CheckBox';
import Carousel from './components/Carousel';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { AOS } from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
useEffect(()=>{
  document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
  });
},[])
  return (
    <main className="flex flex-col gap-[4rem] lg:gap-[7rem] overflow-x-hidden  " >
<div    className="  flex flex-col gap-[1.5rem] items-center justify-center mt-[2rem] lg:mt-[4rem]">
<h2    className="font-Gelasio font-bold text-[20px] lg:text-[30px] text-primary3 text-center w-[65%]">Transform Your Look Effortlessly: Experiment with Coilycle's Virtual Try-On Tool for Hair Style and Color!</h2>
<h4    className="font-Lato text-[13px] lg:w-[100%]  w-[90%] text-center text-primary4 font-semibold">Revamp your look with Coilycle! Explore limitless options to find the perfect hairstyle and color that truly embodies your individuality</h4>
<h4   className="font-Lato text-[16px] lg:w-[100%]  w-[90%] text-center text-primary4 font-bold">Upload your selfie, Choose a model, or Virtually try on the style of your preference</h4>
</div>
<Policy/>
<Carousel/>
<Faq/>
<Footer/>
    </main>
  );
}
