"use client"
import React,{useEffect,useState, useRef } from 'react'
import capture from "../../../public/assests/Capture.png"
import Image from 'next/image'
import reset from "../../../public/assests/reset.png"
import { IoRefresh } from "react-icons/io5";
import { GrSplit } from "react-icons/gr";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { FaRegSquareFull } from "react-icons/fa6";
import { hairColor } from '../components/hairstyleData'
import { hairstyleDataFemale } from '../components/hairstyleData'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from 'next/navigation'
import Link from 'next/link'
const Page = () => {
  const LINK = "https://www.ailabapi.com/api/portrait/effects/hairstyle-editor-pro"
  const url = 'https://coilycue-api.onrender.com'
  const [Hair, SetHair] = useState([]);
  const [State, SetState] = useState([]);
  const [view, setView] = useState("hair");
  const [labell, SetLabel] = useState("");
  const [display, setdisplay] = useState(
    {
      first : "",
      second : ""
    });
  const [upload, setupload] = useState(false);
  const [options, setoptions] = useState(false);
  const [style, setstyle] = useState(false);
  const [compare, setcompare] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hairstyle, setHairStyle] = useState('');
  const [hairColour, setHairColour] = useState('blonde');
  const [file22, setFile22] = useState();
  const [value22, setvalue22] = useState({});
  const [upload22, setupload22] = useState(false);
  const [Erro22, setErro22] = useState("");
  const [data22, setdata22] = useState("");
  const [sucess, setsucess] = useState(false);


  let response
  const submit = async (e) => {
    e.preventDefault();
    if (!file22) return;
    const myHeaders = new Headers();
    myHeaders.append("ailabapi-api-key" ,"pmsnJu43qmu1vQgfaNLVKI3eGjJYoBCxddsxZHEkOOKMFSk68FfCMW7tPvnBI9HY");
    const formdata = new FormData();
    formdata.append("task_type", "async");
    formdata.append("image", file22, "file");
    console.log(file22)
    formdata.append("hair_style", hairstyle);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    fetch(LINK, requestOptions)
      .then(response => response.text())
      .then(result => {  response = JSON.parse(result)
        console.log(response)
         setvalue22(response.task_id)
         setupload22(true)
        console.log(value22)
      })
      .catch(error => console.log('error', error));
  };

  const getData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("ailabapi-api-key","pmsnJu43qmu1vQgfaNLVKI3eGjJYoBCxddsxZHEkOOKMFSk68FfCMW7tPvnBI9HY");
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch(`https://www.ailabapi.com/api/common/query-async-task-result?task_id=${value22}`, requestOptions)
      .then(response => response.text())
      .then(message => {const res = JSON.parse(message)
        console.log(res)
  setErro22(res.error_msg)
  setdata22(res.data)
  setsucess(true)
      }
      )
      .catch(error => console.log('error', error))
          }

  const hairstyleSelect = (e) => {
    setHairStyle(e.target.value);
     setstyle(e.target.innerText);
  };
  const haircolour = (e) => {
    setHairColour(e.target.value);
  };
    useEffect(() => {
        getHair()
      }, []);

      useEffect(() => {
        let timer
        if (upload22) {
         timer = setTimeout(()=>{
            getData()
          },4000)
        }
        return() => clearTimeout(timer)
      },[upload22]);

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
  setupload(true),
  setoptions(true)
  }
function handleClick5() {
  setupload(false),
  setoptions(false)
  }
  const handleMove = (event) => {
    event.preventDefault();
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };
  // creating a hairstyle option select//
  //creating an array of hairstyle//
  // const [hairstyle, setHairStyle] = useState('');
  // const [hairColour, setHairColour] = useState('');
  // const hairstyleSelect = (e) => {
  //   setHairStyle(e.target.value);
  //    setstyle(e.target.innerText);
  // };
  // const haircolour = (e) => {
  //   setHairColour(e.target.value);
  // };
function Reset() {
setdisplay('')
setcompare(false)
}
function Reset2() {
  setdisplay({...display ,second : ""})
setcompare(false)
}
function ResetAll() {
setdata22("")
setErro22("")
setoptions(false)
setupload22(false)
setFile22()
setsucess(false)
setupload(false)
}

  return (
    <div className='flex flex-col  lg:flex-row gap-[rem] lg:gap-[3rem]  items-center lg:items-start  justify-center  mt-[2rem]'>
      {options == true ? (
        <FaArrowLeftLong
          size={30}
          color='green'
          className='cursor-pointer hidden lg:flex'
          onClick={handleClick5}
        />
      ) : (
        <Link href='/'>
          <FaArrowLeftLong
            size={30}
            color='green'
            className='cursor-pointer hidden lg:flex'
          />
        </Link>
      )}

      {compare == true ? (
        <div className=' flex items-center justify-center'>
          <div
            className='lg:w-full w-screen h-full relative'
            onPointerUp={handleMouseUp}
            onMouseUp={handleMouseUp}>
            <div
              className={` w-[300px] h-[250px] lg:w-[500px] lg:h-[517px] bg-[#D9D9D9]  flex `}
              style={{
                backgroundImage: `url("${display}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>
              <div
                className={
                  'absolute top-0 left-0 right-0 w-full aspect-[50/80] lg:w-[500px] lg:h-[517px] m-auto overflow-hidden select-none'
                }
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                <div
                  className={`   aspect-[70/80] lg:aspect-[50/80] lg:w-[500px] lg:h-[517px] flex `}
                  style={
                    data22
                      ? {
                          backgroundImage: `url("${data22.images[0]}")`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }
                      : {
                          backgroundImage: `url("${display.first}")`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }
                  }></div>
              </div>
              <div
                className={
                  display
                    ? 'hidden'
                    : ' w-full items-center justify-end  flex flex-col gap-[1rem] '
                }>
                <div
                  className={
                    upload == false
                      ? 'hidden'
                      : 'pl-[0.5rem] flex flex-row gap-[1rem] items-center justify-center'
                  }>
                  <form>
                    <div
                      className={
                        style
                          ? 'flex lg:hidden font-Gelasio font-bold p-[0.5rem] bg-white rounded-lg  cursor-pointer'
                          : 'cursor-not-allowed opacity-[0.2] font-Gelasio font-bold p-[0.5rem] bg-white rounded-lg duration-500'
                      }
                      // to take a picture
                      onClick={handleClick3}>
                      Take Picture
                      <input
                        type='file'
                        accept='image/*'
                        capture='user'
                        className='hidden'
                        // REF links the fucion to input i.e picInput
                        ref={picInput}
                        onChange={uploadImage}
                      />
                    </div>
                    <button
                      // type='submit'
                      className=' text-black font-bold'
                      onClick={submit}>
                      Submit
                    </button>
                  </form>
                  <button
                    // type='submit'
                    className=' text-black font-bold'
                    onClick={getData}>
                    getpics
                  </button>
                  {/* to upload a picture */}
                  <button
                    className={
                      style
                        ? 'font-Gelasio font-bold p-[0.5rem] bg-white rounded-lg  cursor-pointer'
                        : 'cursor-not-allowed opacity-[0.2] font-Gelasio font-bold p-[0.5rem] bg-white rounded-lg  duration-500'
                    }
                    onClick={handleClick2}>
                    <input
                      type='file'
                      ref={fileInput}
                      className='hidden'
                      // onChange={uploadImage}
                    />
                    Upload Picture
                  </button>
                </div>
                <Image
                  src={capture}
                  height={60}
                  width={60}
                  alt='model'
                  onClick={handleClick4}
                  className='cursor-pointer'
                />
              </div>
            </div>
            <div
              className={
                compare == true
                  ? 'flex absolute left-[80%] bottom-[5%] lg:left-[90%] lg:bottom-[5%] flex-col gap-[1rem] '
                  : 'hidden'
              }>
              <IoRefresh
                color='white'
                size={30}
                className='cursor-pointer'
                onClick={() => setdisplay({ ...display, second: '' })}
              />
              <FaRegSquareFull
                color='white'
                size={30}
                className='cursor-pointer'
                onClick={Reset2}
              />
              <a href={display.first}>
                <MdOutlineDownloadForOffline
                  color='white'
                  size={30}
                  className='cursor-pointer'
                />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-row lg:flex-col lg:items-center lg:justify-center '>
          {options == true ? (
            <FaArrowLeftLong
              size={30}
              color='green'
              className='cursor-pointer flex lg:hidden pr-[0.5rem]'
              onClick={handleClick5}
            />
          ) : (
            <Link href='/'>
              <FaArrowLeftLong
                size={30}
                color='green'
                className='cursor-pointer flex lg:hidden pr-[0.5rem]'
              />
            </Link>
          )}
          <div
            className={` w-[80%] h-[350px] aspect-[50/50] lg:w-[500px] lg:h-[517px] bg-[#D9D9D9]  flex `}
            style={
              data22
                ? {
                    backgroundImage: `url("${data22.images[0]}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }
                : {
                    backgroundImage: `url("${display.first}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }
            }>
            <div
              className={
                display.first
                  ? 'flex flex-col gap-[1rem] justify-end items-end pb-[1rem] pr-[1rem] mx-auto w-full'
                  : 'hidden'
              }>
              <GrSplit
                color='white'
                size={30}
                className={data22 ? 'hidden' : 'cursor-pointer'}
                onClick={() => setcompare(!compare)}
              />
              {data22 ? (
                <a href={data22.image}>
                  <MdOutlineDownloadForOffline
                    color='white'
                    size={30}
                    className='cursor-pointer'
                  />
                </a>
              ) : (
                <a href={display.first}>
                  <MdOutlineDownloadForOffline
                    color='white'
                    size={30}
                    className='cursor-pointer'
                  />
                </a>
              )}
            </div>
            <div
              className={
                display.first
                  ? 'hidden'
                  : data22
                  ? 'hidden'
                  : ' w-full items-center justify-end  flex flex-col gap-[1rem] '
              }>
              <div
                className={
                  upload == false
                    ? 'hidden'
                    : data22
                    ? 'hidden'
                    : 'pl-[0.5rem] flex flex-row gap-[1rem] items-center justify-center'
                }>
                <button
                  className={
                    style
                      ? 'flex lg:hidden font-Gelasio font-bold p-[0.5rem] bg-white rounded-lg  cursor-pointer'
                      : 'cursor-not-allowed opacity-[0.2] font-Gelasio font-bold p-[0.5rem] bg-white rounded-lg duration-500'
                  }
                  onClick={handleClick3}>
                  Take Picture
                  <input
                    type='file'
                    onChange={(e) => setFile22(e.target.files?.[0])}
                    accept='image/*'
                    capture='user'
                    className='hidden'
                    ref={picInput}
                  />
                </button>
                <button
                  className={
                    style
                      ? 'font-Gelasio font-bold p-[0.5rem] bg-white rounded-lg  cursor-pointer'
                      : 'cursor-not-allowed opacity-[0.2] font-Gelasio font-bold p-[0.5rem] bg-white rounded-lg  duration-500'
                  }
                  onClick={handleClick2}>
                  <input
                    type='file'
                    ref={fileInput}
                    onChange={(e) => setFile22(e.target.files?.[0])}
                    className='hidden'
                  />
                  Upload Picture
                </button>
              </div>
              {file22 ? (
                <button
                  onClick={submit}
                  className='mb-[0.5rem] duration-500  border-primary2  text-white font-Gelasio text-[14px] lg:text-[16px] font-semibold bg-primary2 w-[100px] h-[50px] lg:w-[110px] lg:h-[48px] cursor-pointer rounded-2xl'>
                  Generate Image
                </button>
              ) : (
                <Image
                  src={capture}
                  height={60}
                  width={60}
                  alt='model'
                  onClick={handleClick4}
                  className='cursor-pointer'
                />
              )}
            </div>
          </div>
        </div>
      )}
      <h3 className='font-Gelasio text-[16px] text-red-600 font-bold mb-[1rem] flex items-center justify-center'>
        {Erro22}
      </h3>
      <div className='flex flex-col items-center justify-center'></div>
      {options == false ? (
        <div className='flex flex-col gap-[1rem] items-center justify-center'>
          <div className='w-[90%] h-[50px] lg:w-[600px] bg-primary1 flex flex-row items-center justify-center gap-[2rem]'>
            <h3
              className={
                view === 'hair'
                  ? 'font-Gelasio font-bold text-[18px] text-black cursor-pointer underline underline-offset-4'
                  : 'font-Gelasio font-bold text-[18px] text-black cursor-pointer'
              }
              onClick={() => setView('hair')}>
              Hairstyle
            </h3>
            <h3
              className={
                view === 'color'
                  ? 'font-Gelasio font-bold text-[18px] text-black cursor-pointer underline underline-offset-4'
                  : 'font-Gelasio font-bold text-[18px] text-black cursor-pointer'
              }
              onClick={() => setView('color')}>
              Colours
            </h3>
          </div>
          {view === 'hair' ? (
            <div className='grid lg:grid-cols-4 grid-cols-3'>
              <div className=' flex items-center justify-center'>
                <Image
                  src={reset}
                  height={50}
                  width={50}
                  alt='model'
                  className='cursor-pointer'
                  onClick={Reset}
                />
              </div>
              {Object.entries(Hair).map(([label, contents], id) => (
                <div
                  key={id}
                  className=''
                  onClick={() =>
                    setdisplay({
                      ...display,
                      first: url.concat(contents[0].imageUrl),
                    })
                  }>
                  <button
                    className='flex flex-col items-center justify-center p-[1rem]'
                    onClick={() => handleClick(contents, label)}>
                    <img
                      src={url.concat(contents[0].imageUrl)}
                      alt='model'
                      className='rounded-md cursor-pointer h-[100px] w-[100px] lg:w-[160px] lg:h-[160px]'
                    />
                    <h3
                      className={
                        labell === contents[0].hairstyle
                          ? 'text-[14px] font-Lato font-bold text-black'
                          : ' text-[14px] font-Lato font-bold text-gray-400'
                      }>
                      {contents[0].hairstyle}
                    </h3>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className='grid grid-cols-3 lg:grid-cols-4'>
              <div className=' flex items-center justify-center'>
                <Image
                  src={reset}
                  height={60}
                  width={60}
                  className='cursor-pointer'
                  alt='model'
                  onClick={Reset}
                />
              </div>
              {State.length ? (
                State.map((con, index) => (
                  <>
                    {compare == false ? (
                      <div
                        key={index}
                        className='flex flex-col items-center justify-center p-[1rem]'
                        onClick={() =>
                          setdisplay({
                            ...display,
                            first: url.concat(con.imageUrl),
                          })
                        }>
                        <Image
                          src={url.concat(con.imageUrl)}
                          height={166}
                          width={177}
                          className='rounded-md cursor-pointer'
                        />
                        <h3 className='text-[14px] font-Lato font-bold text-black'>
                          {con.color}
                        </h3>
                      </div>
                    ) : (
                      <div
                        key={index}
                        className='flex flex-col items-center justify-center p-[1rem]'
                        onClick={() =>
                          setdisplay({
                            ...display,
                            second: url.concat(con.imageUrl),
                          })
                        }>
                        <Image
                          src={url.concat(con.imageUrl)}
                          height={166}
                          width={177}
                          className='rounded-md cursor-pointer'
                        />
                        <h3 className='text-[14px] font-Lato font-bold text-black'>
                          {con.color}
                        </h3>
                      </div>
                    )}
                  </>
                ))
              ) : (
                <div className='  w-full'>
                  {' '}
                  <h3 className='text-center text-[15px] font-Lato text-black font-bold'>
                    PLEASE PICK AN HAIRSTYLE
                  </h3>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className='lg:flex lg:flex-row grid items-center justify-around gap-[1rem]'>
          {sucess ? (
            <Image
              src={reset}
              height={80}
              width={80}
              className='cursor-pointer'
              alt='model'
              onClick={ResetAll}
            />
          ) : (
            ''
          )}
          <div className='grid gap-y-5 grid-cols cursor-pointer'>
            <div>
              <h1 className=' font-bold text-xl '>
                Select Hairstyle for Female
              </h1>
              <select
                onChange={hairstyleSelect}
                className=' w-fit border-2 border-black mt-2 font-semibold rounded-md h-10 bg-primary1 hover:bg-white transition-all duration-500 '>
                {hairstyleDataFemale.map((item) => {
                  return (
                    <option
                      className=' text-lg p-3 bg-primary1  '
                      key={item.id}>
                      {item.label}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div>
            <h1 className=' font-bold text-xl '>Select Colour</h1>
            <select
              onChange={haircolour}
              className=' w-fit border-2 border-black mt-2 font-semibold rounded-md h-10 bg-primary1  hover:bg-white transition-all duration-500'>
              {hairColor.map((item) => {
                return (
                  <option
                    className=' text-lg p-3  bg-primary1'
                    key={item.id}>
                    {item.label}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
export default Page
