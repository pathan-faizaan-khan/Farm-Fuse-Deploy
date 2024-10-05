"use client";
import { IoChatbox } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import React from "react";
import { set } from "mongoose";

const manager = () => {
  const [chat, setchat] = useState(false);
  const handlechat = () => {
    setchat(!chat);
  };
  const [message, setmessage] = useState({"Question":"","Answer":""});
  const [messages, setmessages] = useState([]);
  const [WebSoc, setWebSoc] = useState(false);
const handleMessage = (e) => {
    setmessage({...message,[e.target.name]:[e.target.value]})
  };

  const handleSend = async() => {
    const ws = new WebSocket("ws://localhost:3100")
    ws.onopen= async() => {
      ws.send(message.Question);
      if (!messages.includes(message.Question.toString())) {
        messages.push(message.Question.toString());
      }
      setmessage({"Question":"","Answer":""});
      console.log(messages);
    }
    ws.onmessage = (e)=> {
      if (!messages.includes(e.data)) {
        messages.push(e.data);
      }
    }

  };

  const [image, setimage] = useState("one1.jpg");
  const slide = document.getElementById("slide");
  const [leftright, setleftright] = useState(true);
  const handleChange = () => {
    if (image == "one1.jpg") {
      slide.classList.add("transition");
      setimage("one2.jpg");
      setTimeout(() => {
        slide.classList.remove("transition");
      }, 2000);
    } else {
      slide.classList.add("transition");
      setimage("one1.jpg");
      setTimeout(() => {
        slide.classList.remove("transition");
      }, 2000);
    }
  };
  return (
    <>
      <div className="head2 w-[95vw] ml-12">
        <div className="slidbar ml-4 max-sm:hidden" id="slide">
          <button onClick={handleChange}>
            <FaArrowLeft
              id="leftArrow"
              className=" size-20 relative top-96 text-white left-4 hover:rounded-md hover:border-2 p-2"
            />
          </button>
          <FaArrowRight
            onClick={handleChange}
            className=" size-20 relative top-80 text-white  left-[88vw] hover:rounded-md hover:border-2 p-2"
          />
          <img src={image} alt="image" className="w-[100vw] h-[95vh]" />
        </div>
        {!chat ? (
          <div
            onClick={() => {
              handlechat();
            }}
            className="message size-14 flex justify-end animate-pulse my-96 cursor-pointer text-blue-500 fixed top-40 right-10 hover:scale-110  transition-all "
          >
            <img src="chat.gif" alt="chat" />
          </div>
        ) : (
          <div
            onBlur={handlechat}
            tabIndex={0}
            className="max-sm:w-[75vw] max-sm:right-10 fixed top-80 w-[30vw] rounded-lg right-20 h-[50vh] transition-all bg-white  hover:border-green-300 border-green-500 border-2"
          >
            <div className="flex justify-center">
              <img src="favicon.ico" alt="" className="h-24 opacity-50 fixed mt-24" />
            </div>
            <div className=" h-[41vh] w-[28vw] m-2 overflow-scroll scrollbar-hide">
              {messages.map((message,index)=> (
                <div key={index} className="">
                  <div className="">
                    {index%2==0 && <div className="bg-green-100 p-2 rounded-xl ml-44 m-2 w-[50%] h-fit">{message}</div>}
                    {index%2!=0 && <div className="bg-slate-50 p-2 rounded-xl m-2 w-[50%]">{message}</div>}
                  </div>
                </div>
              ))}
            </div>
             <form onSubmit={(event) => {
               event.preventDefault(); 
              handleSend();
                }}>
              <input
                type="text"
                value={message.Question}
                onChange={handleMessage}
                name="Question"
                placeholder="Ask me Anything"
                id="message"
                className="max-sm:w-[35vw] max-sm:hover:w-[55vw] absolute  bottom-0 h-[5vh] w-[15vw] hover:w-[25.8vw] text-center  transition-all m-2 bg-slate-50 rounded-xl"
              />
              <button
                className="absolute  bottom-0 m-2 right-0"
                onClick={() => {
                  handleSend();
                }}
              >
                <IoIosSend className="size-10 text-sky-500 scale-100 hover:scale-125 hover:text-sky-400 transition-all" />
              </button>
            </form>
          </div>
        )}

        <div  className="flex justify-between mt-20 mb-20 mx-12 max-sm:flex-col max-sm:w-[89vw] max-sm:mt-48">
        <div className="card1  bg-green-100   rounded-lg border-b-2 shadow-lg cursor-pointer active:scale-110  transition-all ">
            <Link href={"/vegetables"}>
              <img
                className="rounded-lg h-80 w-[25vw] max-sm:w-full "
                src="https://nationaltoday.com/wp-content/uploads/2022/05/Fresh-Veggies.jpg"
                alt="veg"
              />
              <h1 className="font-bold text-xl text-center">Vegetables</h1>
            </Link>
          </div>

          <div className="card2 bg-gray-50 rounded-lg border-b-2 shadow-lg cursor-pointer active:scale-110  transition-all ">
            <Link href={"/fruits"}>
              <img
                className="rounded-lg h-80 w-[25vw] max-sm:w-full "
                src="https://livelife.lk/wp-content/uploads/2021/11/fruits-1200x1080.png"
                alt="fruit"
              />
              <h1 className="font-bold text-xl text-center bg-green-100">Fruits</h1>
            </Link>
          </div>
       
         
        <div className="card4 rounded-lg bg-green-100 border-b-2 shadow-lg cursor-pointer active:scale-110  transition-all ">
            <Link href={"/DairyProducts"}>
              <img
                className="rounded-lg h-80 w-[25vw] max-sm:w-full"
                src="https://www.nutritionadvance.com/wp-content/uploads/2018/06/21-Healthy-Dairy-Products-From-Around-the-World.jpg"
                alt="fruits"
              />
              <h1 className="font-bold text-xl text-center">Dairy Products</h1>
            </Link>
          </div>
        </div>
          
        <div className="footer flex-col max-sm:w-[120vw] max-sm:m-0 max-sm:absolute max-sm:left-0 ">
          <div className="back2top w-[95vw] max-sm:w-[120vw] text-center cursor-pointer bg-slate-600 text-white p-2  ">
            <Link href={"/"}>
              <div className="back hover:font-semibold">Back to top</div>
            </Link>
          </div>
          <div className="introduction flex size-24 justify-center text-white font-semibold w-[95vw] max-sm:w-[120vw] bg-[#232f3e]   border-b-slate-700 border-b-2">
            <img src="favicon.ico" alt="favicon" className=" rounded-full" />
          </div>
          <div className="foot bg-[#232f3e] text-[#dddddd] text-center p-4 ">
            <div className="descp">
              <b>Farm Fuse</b> is a platform that connects farmers directly with
              customers, allowing them to buy fresh produce straight from the
              source without any middlemen.
            </div>
            <div className="media p-2 my-4  border-b-slate-700 border-b-2">
              <ul className="max-sm:gap-2 max-sm:ml-0 flex justify-between mr-6 ml-6 text-white ">
                <li className="flex gap-3 hover:opacity-50">
                  <FaInstagram className="mt-1" />
                  Instagram
                </li>
                <li className="flex gap-3 hover:opacity-50">
                  <FaFacebook className="mt-1" />
                  Facebook
                </li>
                <li className="flex gap-3 hover:opacity-50">
                  <FaSquareXTwitter className="mt-1" />
                  X.com
                </li>
                <li className="flex gap-3 hover:opacity-50">
                  <FaYoutube className="mt-1" />
                  Youtube
                </li>
              </ul>
            </div>
          </div>
          <div className="rights bg-[#131a22] text-[#dddddd] text-center p-4">
            <p>
              Conditions of Use Privacy Notice Consumer Health Data Privacy
              Disclosure Your Ads Privacy Choices <br />
              <b>Copyright &copy; 2024, Farm Fuse All right reserved</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default manager;
