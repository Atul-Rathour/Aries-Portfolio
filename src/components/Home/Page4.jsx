import React from 'react'
import AiVid from "../../assets/video/AI demo.mp4";

const Page4 = () => {
  return (
    <div className='relative w-[100%] h-[100vh] mt-10 flex justify-center items-center'>
        <video src={AiVid} className='absolute w-[100%] h-[100%] object-cover  ' autoPlay loop muted/>

        <p className='absolute p1 text-[3.5rem] uppercase text-center'>Leading the charge in <br /> web Dev evolution.</p>
    </div>
  )
}

export default Page4