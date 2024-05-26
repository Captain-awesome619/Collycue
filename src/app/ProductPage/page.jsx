"use client"
import React,{useEffect,useState,useRef} from 'react'
import capture from "../assests/Capture.png"
import Image from 'next/image'
import reset from "../assests/reset.png"
const page = () => {
  const url = 'https://coilycue-api.onrender.com'
  const [Hair, SetHair] = useState([]);
  const [State, SetState] = useState([]);
  const [view, setView] = useState("hair");
  const [labell, SetLabel] = useState("");

    useEffect(() => {
        getHair()
      }, []);
    const getHair = () =>{
        fetch('https://coilycue-api.onrender.com/images/all')
        .then(response => response.json())
        .then(data => { let sample = data
          SetHair(sample) })
        .catch(error => console.error(error));
    }
function handleClick(name,name2) {
SetState(name),
SetLabel(name2)
}
  return (
    <div className="flex flex-row gap-[2rem]  justify-center mt-[2rem]">
<div className="w-[496px] h-[517px] bg-[#D9D9D9] flex justify-center items-center">
  {console.log(State)}
<Image
src ={capture}
height ={60}
width ={60}
className="top-[40%] relative cursor-pointer"
/>
</div>
<div className="flex flex-col gap-[1rem] items-center justify-center">
<div className="w-[600px] h-[50px] bg-primary1 flex flex-row items-center justify-center gap-[2rem]">
<h3 className={view === "hair" ?"font-Gelasio font-bold text-[18px] text-black cursor-pointer underline underline-offset-4" :"font-Gelasio font-bold text-[18px] text-black cursor-pointer"} onClick={() =>setView("hair")}>Hairstyle</h3>
<h3 className={view === "color" ?"font-Gelasio font-bold text-[18px] text-black cursor-pointer underline underline-offset-4" :"font-Gelasio font-bold text-[18px] text-black cursor-pointer"} onClick={() =>setView("color")}>Colours</h3>
</div>
{ view === "hair" ?
<div className="grid grid-cols-4">
<div className=" flex items-center justify-center">
<Image
src ={reset}
height ={60}
width ={60}
className="cursor-pointer"
/>
</div>
  {Object.entries(Hair).map(([label , contents])=>(
   <div className="" >

  <button className="flex flex-col items-center justify-center p-[1rem]" onClick={()=>handleClick(contents,label)}   >

      <Image
      src ={url.concat(contents[0].imageUrl)}
      height ={166}
      width ={177}
      className="rounded-md cursor-pointer"
      />
<h3 className={labell === contents[0].hairstyle ? "text-[14px] font-Lato font-bold text-black" :  " text-[14px] font-Lato font-bold text-gray-400"}>{contents[0].hairstyle}</h3>
</button>
    </div>
  ))}
</div>
:

 <div className="grid grid-cols-4">
 <div className=" flex items-center justify-center">
<Image
src ={reset}
height ={60}
width ={60}
className="cursor-pointer"
/>
</div>
{State.length ? State.map((con) => (
  <div className="flex flex-col items-center justify-center p-[1rem]">
    {console.log(con)}
    <Image
      src ={url.concat(con.imageUrl)}
      height ={166}
      width ={177}
      className="rounded-md cursor-pointer"
      />
      <h3 className="text-[14px] font-Lato font-bold text-black">{con.color}</h3>
  </div>

)) :<div className="  w-full"> <h3 className="text-center text-[15px] font-Lato text-black font-bold">PLEASE PICK AN HAIRSTYLE</h3></div> }
</div>
}
</div>
    </div>
  )
}

export default page