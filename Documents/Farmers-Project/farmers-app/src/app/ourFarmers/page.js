"use client"
import React from 'react'
import Regfooter from '../components/regfooter';
import RegNavbar from '../components/regNavbar';
import Link from 'next/link';

const farmer = () => {
  return (
   <>
   <div className="navbar top-0 absolute">
   <RegNavbar teriRedirect ="/DairyProducts"
           teriSrc = "https://cdn.lordicon.com/sxrnyajs.json"
          teriCurrent = "Dairy Products"

          secRedirect ="/fruits"
          secSrc = "https://cdn.lordicon.com/nuqshqha.json"
          SecCurrent = "Fruits"
          current="home"
          redirect="/"
          src="https://cdn.lordicon.com/epietrpn.json"
         
        />
   </div>
   
   <div className="farmers flex-col justify-between  mt-44"> 
    <div className="farmer m-10 flex w-[90vw] max-sm:flex-col border-2 p-2 hover:border-green-400 rounded-md hover:bg-slate-50">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMxjBhxqzkpC-qOQFCFgFfETnMvHlvhovGg&s" alt="img" className='rounded-lg' />
        <div className="detais text-xl ml-2 mt-6 flex justify-between w-full">
            <h1><b>Mukesh kumar</b> <br /><b>Age:</b> 42 <br /><b>Experience:</b> Excellence <br /><b>Sell:</b> vegetables & Fruits <br /></h1>
            <div className="buttons gap-2 mt-4">
            <Link href={"/Developing"}>
            <button className='bg-[#6e9f2ad9] hover:bg-[#6f9f2a] mt-4 active:scale-110 transition-all rounded-xl  p-2 mr-6'>View Reviews</button>
            <button className='bg-[#4a97abd9] hover:bg-[#1a799f] mt-4 rounded-xl font-semibold p-2'>Add to Favourite</button>
            </Link>
      
            </div>
        </div>
    </div>
    
    </div>
   <Regfooter redirect="/ourFarmers"/>
   </>
  )
}

export default farmer;
