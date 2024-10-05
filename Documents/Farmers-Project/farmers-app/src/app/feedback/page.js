"use client";
import React from "react";
import { Style } from "react-style-tag";
import { useState } from "react";
import Link from "next/link";

const page = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };
  return (
    <>
      <div className="feedback bg-slate-100 p-10 flex justify-between ">
        <div className="max-sm:w-[100%] max-sm:p-2 max-sm:mt-10 Lside flex-col w-[40vw] h-[100vh] border-2 hover:border-green-400 rounded-lg p-10">
          <h1 className=" text-center text-2xl font-bold first-letter:text-4xl mb-4">
            Feedback Form
          </h1>
          <form action="#" className="">
            <label
              htmlFor="Describe Feedback"
              className="text-green-600 font-semibold"
            >
              Describe Feedback
            </label>
            <br />
            <textarea
              name="paragraph_text"
              cols="50"
              rows="10"
              className="h-[15vh] w-full mb-6"
            ></textarea>
            <label
              htmlFor="Experience"
              className="text-green-600 font-semibold"
            >
              Experience With Website
            </label>
            <br />
            <select
              name="experience"
              id="exp"
              className="w-full text-xl font-medium p-2 rounded-lg bg-green-50 mb-6"
            >
              <option value="Smooth">Smooth</option>
              <option value="Average">Average</option>
              <option value="Bad UI">Bad UI</option>
              <option value="Worst Experience">Worst Experience</option>
            </select>
            <label htmlFor="Rating" className="text-green-600 font-semibold">
              Rating
            </label>
            <div className="star-rating flex flex-row-reverse justify-center space-x-2 space-x-reverse text-2xl">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <label key={index} className="size-12">
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      className="hidden"
                      onClick={() => handleRating(ratingValue)}
                    />
                    <span
                      className={`cursor-pointer ${
                        ratingValue >= rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    >
                      &#9733;
                    </span>
                  </label>
                );
              })}
            </div>
            <label htmlFor="Name" className="text-green-600 font-semibold">
              Name
            </label>
            <br />
            <input type="text" className="w-full rounded-md h-[5vh] mb-6" placeholder="Your name"/>
            <label htmlFor="Email" className="text-green-600 font-semibold">
              Email
            </label>
            <input type="email" className="w-full h-[5vh]" placeholder="example@gmail.com" />
            <button className="w-full mt-12 font-medium bg-[#6e9f2ad9] hover:bg-[#78a934d9] rounded-md h-[6vh] text-xl active:scale-110 transition-all">Submit Feedback</button>
          </form>
        </div>
        <div className="home">
      <Link href={"/"}>
          <div className="max-sm:absolute max-sm:top-0 max-sm:justify-center max-sm:flex max-md:items-center max-sm:left-0  font-bold text-3xl max-sm:text-xl p-2 m-2 ml-8 hover:bg-slate-50 flex gap-2 cursor-pointer w-fit border rounded-xl">
            <img src="house.gif" alt="home" className=" h-12 max-sm:h-7"/>
            <h1 className="text-green-500 mt-2 ">Home</h1>
          </div>
          </Link>
          <div className="img h-[20vh] mt-10 mr-4 max-sm:hidden">
          <img src="https://img.freepik.com/free-vector/hand-drawn-india-lifestyle-illustration_23-2149659961.jpg?w=1800&t=st=1720190510~exp=1720191110~hmac=d3f317d6411825b88d61b281b33b8750db5be3cd27ac4ae70600bd809977159d" className="h-[60vh] rounded-xl" />

          </div>
      </div>
      </div>
      
    </>
  );
};

export default page;
