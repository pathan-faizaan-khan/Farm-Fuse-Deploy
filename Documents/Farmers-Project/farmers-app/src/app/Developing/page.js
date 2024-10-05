"use client"
import React from 'react'
import RegNavbar from '../components/regNavbar'
import Regfooter from '../components/regfooter'

const page = () => {
  return (
    <>
    <RegNavbar
          teriRedirect="/DairyProducts"
          teriSrc="https://cdn.lordicon.com/sxrnyajs.json"
          teriCurrent="Dairy Products"
          secRedirect="/fruits"
          secSrc="https://cdn.lordicon.com/nuqshqha.json"
          SecCurrent="Fruits"
          current="home"
          redirect="/"
          src="https://cdn.lordicon.com/epietrpn.json"
        />
    <div className='font-semibold text-2xl h-[80vh] flex justify-center items-center'>
        Under development...
    </div>
    <div className='absolute bottom-0'>
    <Regfooter/>
    </div>
    </>
  )
}

export default page
