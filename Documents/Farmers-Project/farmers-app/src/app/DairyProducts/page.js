"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import Sidebar from "../components/sidebar";
import RegNavbar from "../components/regNavbar";
import { FaHeart } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Regfooter from "../components/regfooter";

const page = () => {
  const [Items, setItems] = useState([])
  useEffect( () => {
    const Data = fetch("http://localhost:3100/favProducts")
      .then((Response) => Response.json())
      .then((Data) => {
        const ActualData = Data.data.dairyProducts;
        setItems(ActualData);
        
      });
  }, [])
  
  const handleSubmit = (src, Name, Price) => {
    fetch("http://localhost:3100/Add2Cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        src: src,
        Name: Name,
        Price: Price,
      }),
    })
      .then((Response) => Response.json())
      .then(async(data) => {
        if (data.exist) {
          toast.info("Item already exist in cart!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (data.Add) {
          toast.success("Added to cart", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error(data.errorData, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
    } 
  return (
    <>
      <div className="vegetables w-[98.83vw] bg-slate-100">
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
        <RegNavbar
            teriRedirect ="/vegetables"
            teriSrc = "https://cdn.lordicon.com/evvwiruv.json"
           teriCurrent = "Vegetables"
            secRedirect ="/fruits"
             secSrc = "https://cdn.lordicon.com/nuqshqha.json"
            SecCurrent = "Fruits"
          current="home"
          redirect="/"
          src="https://cdn.lordicon.com/epietrpn.json"
        />
       
        <div className="max-sm:w-[100vw] flex gap-6 bg-slate-50 overflow-scroll scrollbar-hide p-4">
        {Items.map((item,index)=> (
          <div key={index} className="flex mt-48">
            <div className="card1 size-80 bg-white hover:border-2 hover:border-green-500  p-3 rounded-lg">
            <img
              src={item.src}
              className=" rounded-md h-48"
              alt=""
            />
            <h1 className=" text-center font-bold text-xl">{item.name}</h1>
            <p className="text-red-800 ml-2 font-semibold">{item.price}</p>
            <div className="puchase flex gap-6 justify-between">
              <button onClick={()=>{handleSubmit(item.src,item.name,item.price)}} className="font-semibold bg-[#6e9f2ad9] p-2 mt-3 rounded-xl hover:bg-[#6f9f2a] active:scale-110  transition-all">
                Add to Cart
              </button>
            </div>
          </div>
          </div>
        ))}
        </div>
        <div className=" mt-14">
        <Regfooter  redirect = "/fruits"/>
        </div>
      </div>
    </>
  );
};

export default page;
