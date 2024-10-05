import React from "react";
import Link from "next/link";
import { IoExit } from "react-icons/io5";

const page = () => {
  return (
    <>
    <div className="bg bg-[#fdf9f0] h-[100vh]">
    <div className="exit flex justify-between ">
        <div className="intro flex ml-10 mt-2 hover:text-[#218d8b] transition-all max-sm:justify-around max-sm:ml-2 max-sm:items-center">
          <img src="maps.gif" alt="map" className="size-11 max-sm:size-8" />
          <h1 className="text-3xl font-semibold hover:text-4xl transition-all max-sm:text-xl">Maps</h1>
        </div>
        <div className="mt-4 text-2xl max-sm:text-sm font-semibold text-red-500">**Under Development**</div>
        <Link href={"/"}>
          <div className="div flex justify-end mr-10 max-sm:mr-2 max-sm:text-5xl text-6xl hover:scale-110 transition-all hover:translate-x-5 cursor-pointer">
            <IoExit />
          </div>
        </Link>
      </div>

      <div className="map flex max-sm:flex-col">
        <div className="maps m-10 max-sm:m-4">
          <h1 className="font-bold text-3xl max-sm:text-center max-sm:text-xl max-sm: w-[100%] max-sm:h[20vh] text-green-600">
            Check out Our farmers Location
          </h1>
          <div className="body h-[70vh] w-full max-sm:h-[20vh] border-2  rounded-lg mt-6 hover:border-green-500 p-2">
            <h1 className="text-center opacity-50 mt-56 max-sm:text-xl max-sm:mt-10 text-2xl">
              {" "}
              Farmers Details will Appear here
            </h1>
          </div>
        </div>
        <div className="mainMap mt-10 max-sm:mt-4 max-sm:w-[100%] max-sm:p-2">
          <iframe
            className="w-[60vw] h-[80vh] max-sm:w-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238662.07941885458!2d77.59117913571818!3d20.827870299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a94fbd81b7c5%3A0xf7273c2cca40bb85!2sFuse%20farm!5e0!3m2!1sen!2sin!4v1721301478998!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default page;
