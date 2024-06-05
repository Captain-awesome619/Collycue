"use client"
import React,{useEffect,useState, useRef } from 'react'
import capture from "../../../public/assests/Capture.png"
import Image from 'next/image'
import reset from "../../../public/assests/reset.png"
import { IoRefresh } from "react-icons/io5";
import { GrSplit } from "react-icons/gr";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { FaRegSquareFull } from "react-icons/fa6";

const Page = () => {
  const url = 'https://coilycue-api.onrender.com'
  const [Hair, SetHair] = useState([]);
  const [State, SetState] = useState([]);
  const [view, setView] = useState("hair");
  const [labell, SetLabel] = useState("");
  const [display, setdisplay] = useState(
    {
      first : "",
      second : ""
    }
  );
  const [upload, setupload] = useState(false);
  const [options, setoptions] = useState(false);
  const [style, setstyle] = useState(false);
  const [compare, setcompare] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
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
const fileInput = useRef(null)
const picInput = useRef(null)
const handleClick2 = event => {
  if (!style) {
    alert('PLEASE PICK AN HAIRTYLE')
  }else{
  fileInput.current.click();}
};
const handleClick3 = event => {
  if (!style) {
    alert('PLEASE PICK AN HAIRTYLE')
  }else{
  picInput.current.click();}
};
function handleClick4() {
  setupload(!upload),
  setoptions(!options)
  }
  const handleClick5 = (event) =>{
    setstyle(event.target.innerText)
  }

  const handleMove = (event) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };
  const handleMouseDown = () => {
    setIsDragging(true);
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  let option1 =display.first
  let option2= display.second

function Reset() {
setdisplay('')
setcompare(false)
}
function Reset2() {
  setdisplay({...display ,second : ""})
setcompare(false)
}
  return (
<div className='flex flex-col  lg:flex-row gap-[2rem] lg:gap-[0rem]  items-center lg:items-start  lg:justify-around mt-[2rem]'>
{ compare == true ? <div   className=" flex items-center justify-center">
<div className="lg:w-full w-screen h-full relative" onPointerUp={handleMouseUp} onMouseUp={handleMouseUp}>
      <div
        className="relative  aspect-[50/50] m-auto overflow-hidden select-none lg:w-[500px] bg-[#D9D9D9]  w-[80%] h-[350px]  lg:h-[517px]"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
onPointerDown={handleMouseDown}
onPointer={handleMove}
      >
       <div  className={ `lg:aspect-[50/80] aspect-[70/80] lg:w-[500px] lg:h-[517px]   flex `  }  style={{  backgroundImage : `url("${display.second}")`, backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',}}>
</div>

        <div
          className={"absolute top-0 left-0 right-0 w-full aspect-[50/80] lg:w-[500px] lg:h-[517px] m-auto overflow-hidden select-none"}
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
<div  className={ `   aspect-[70/80] lg:aspect-[50/80] lg:w-[500px] lg:h-[517px] flex ` }  style={{  backgroundImage : `url("${display.first}")`, backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',}}>
</div>
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className="bg-green-400 absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
        </div>
      </div>
      <div className={compare == true ? "flex absolute left-[80%] bottom-[5%] lg:left-[90%] lg:bottom-[5%] flex-col gap-[1rem] " : "hidden"}>
< IoRefresh color='white' size={30} className="cursor-pointer" onClick={()=>setdisplay({...display ,second : ""})}/>
< FaRegSquareFull  color='white' size={30} className="cursor-pointer" onClick={Reset2}/>
<a href={display.first}>< MdOutlineDownloadForOffline color='white' size={30} className="cursor-pointer"   /></a>
</div>

    </div>

</div>

:
<div  className={` w-[80%] h-[350px] aspect-[50/50] lg:w-[500px] lg:h-[517px] bg-[#D9D9D9]  flex `}  style={{  backgroundImage : `url("${display.first}")`, backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',}}>
<div className={display.first ? "flex flex-col gap-[1rem] justify-end items-end pb-[1rem] pr-[1rem] mx-auto w-full" : "hidden"}>
< GrSplit color='white' size={30} className="cursor-pointer" onClick={()=> setcompare(!compare)}/>
<a href={display.first}>< MdOutlineDownloadForOffline color='white' size={30} className="cursor-pointer"  href={display} /></a>
</div>

<div className={ display.first ? "hidden" : " w-full items-center justify-end  flex flex-col gap-[1rem] "}>

<div className={ upload == false ? "hidden" : "pl-[0.5rem] flex flex-row gap-[1rem] items-center justify-center"}>
<button  className={ style ? "flex lg:hidden font-Gelasio font-bold p-[0.5rem] bg-white rounded-lg  cursor-pointer" : "cursor-not-allowed opacity-[0.2] font-Gelasio font-bold p-[0.5rem] bg-white rounded-lg duration-500"} onClick={handleClick3}>
  Take Picture
<input type="file" accept="image/*" capture="user" className="hidden" ref={picInput}/>
</button>
<button  className={ style ? "font-Gelasio font-bold p-[0.5rem] bg-white rounded-lg  cursor-pointer" : "cursor-not-allowed opacity-[0.2] font-Gelasio font-bold p-[0.5rem] bg-white rounded-lg  duration-500"} onClick={handleClick2}>
<input type="file" ref={fileInput} className="hidden"  />
  Upload Picture
  </button>
</div>
<Image
src ={capture}
height ={60}
width ={60}
alt="model"
onClick={handleClick4}
className="cursor-pointer"
/>
</div>
</div>
}
{options == false ?
<div className="flex flex-col gap-[1rem] items-center justify-center">
<div className="w-[90%] h-[50px] lg:w-[600px] bg-primary1 flex flex-row items-center justify-center gap-[2rem]">
<h3 className={view === "hair" ?"font-Gelasio font-bold text-[18px] text-black cursor-pointer underline underline-offset-4" :"font-Gelasio font-bold text-[18px] text-black cursor-pointer"} onClick={() =>setView("hair")}>Hairstyle</h3>
<h3 className={view === "color" ?"font-Gelasio font-bold text-[18px] text-black cursor-pointer underline underline-offset-4" :"font-Gelasio font-bold text-[18px] text-black cursor-pointer"} onClick={() =>setView("color")}>Colours</h3>
</div>
{ view === "hair" ?
<div className="grid lg:grid-cols-4 grid-cols-3">
<div className=" flex items-center justify-center">
<Image
src ={reset}
height ={50}
width ={50}
alt="model"
className="cursor-pointer"
onClick={Reset}
/>
</div>
  {Object.entries(Hair).map(([label , contents],id)=>(
<div key={id} className="" onClick={()=>setdisplay({...display ,first : url.concat(contents[0].imageUrl)})}>
  <button className="flex flex-col items-center justify-center p-[1rem]" onClick={()=>handleClick(contents,label)}   >
      <img
      src ={ url.concat(contents[0].imageUrl) }
      alt="model"
      className="rounded-md cursor-pointer h-[100px] w-[100px] lg:w-[160px] lg:h-[160px]"/>
<h3 className={labell === contents[0].hairstyle ? "text-[14px] font-Lato font-bold text-black" :  " text-[14px] font-Lato font-bold text-gray-400"}>{contents[0].hairstyle}</h3>
</button>
</div>
)
  )}
</div>
:
 <div className="grid grid-cols-3 lg:grid-cols-4">
 <div className=" flex items-center justify-center">
<Image
src ={reset}
height ={60}
width ={60}
className="cursor-pointer"
alt="model"
onClick={Reset}/>
</div>
{State.length ? State.map((con,index) => (
   <>
   { compare == false ?
  <div key={index} className="flex flex-col items-center justify-center p-[1rem]"onClick={()=>setdisplay({...display ,first : url.concat(con.imageUrl)})}>
    <Image
      src ={url.concat(con.imageUrl)}
      height ={166}
      width ={177}
      className="rounded-md cursor-pointer"
      />
      <h3 className="text-[14px] font-Lato font-bold text-black">{con.color}</h3>
  </div>
:
<div key={index} className="flex flex-col items-center justify-center p-[1rem]" onClick={()=>setdisplay({...display ,second : url.concat(con.imageUrl)})}>
    <Image
      src ={url.concat(con.imageUrl)}
      height ={166}
      width ={177}
      className="rounded-md cursor-pointer"
      />
      <h3 className="text-[14px] font-Lato font-bold text-black">{con.color}</h3>
  </div>

}
  </>
)) :<div className="  w-full"> <h3 className="text-center text-[15px] font-Lato text-black font-bold">PLEASE PICK AN HAIRSTYLE</h3></div> }
</div>
}
</div>
:
<div className="grid gap-4 grid-cols-4">
<button  className="font-Gelasio font-bold cursor-pointer p-[0.5rem] rounded-lg bg-gray-600 text-white"onClick={handleClick5}>undercut</button>
<button className="font-Gelasio font-bold cursor-pointer p-[0.5rem] rounded-lg bg-gray-600 text-white" onClick={handleClick5}>undercut</button>
<button className="font-Gelasio font-bold cursor-pointer p-[0.5rem] rounded-lg bg-gray-600 text-white" onClick={handleClick5}>undercut</button>
<button className="font-Gelasio font-bold cursor-pointer p-[0.5rem] rounded-lg bg-gray-600 text-white" onClick={handleClick5}>undercut</button>
<button className="font-Gelasio font-bold cursor-pointer p-[0.5rem] rounded-lg bg-gray-600 text-white" onClick={handleClick5}>undercut</button>
<button className="font-Gelasio font-bold cursor-pointer p-[0.5rem] rounded-lg bg-gray-600 text-white" onClick={handleClick5}>undercut</button>
<button className="font-Gelasio font-bold cursor-pointer p-[0.5rem] rounded-lg bg-gray-600 text-white" onClick={handleClick5}>undercut</button>
<button className="font-Gelasio font-bold cursor-pointer p-[0.5rem] rounded-lg bg-gray-600 text-white" onClick={handleClick5}>undercut</button>
<button className="font-Gelasio font-bold cursor-pointer p-[0.5rem] rounded-lg bg-gray-600 text-white" onClick={handleClick5}>undercut</button>
<button className="font-Gelasio font-bold cursor-pointer p-[0.5rem] rounded-lg bg-gray-600 text-white" onClick={handleClick5}>undercut</button>
{console.log(style)}
</div>
}
    </div>
  )
}
export default Page