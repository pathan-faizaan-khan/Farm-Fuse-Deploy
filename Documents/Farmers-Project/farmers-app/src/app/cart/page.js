"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import Link from "next/link";
import { FaMinusCircle } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const page = () => {
  const [Delete, setDelete] = useState(false);
  var counter = 0;
  useEffect(() => {
    const data = fetch("http://localhost:3100/getCartData")
      .then((Response) => Response.json())
      .then((data) => {
        setcartItem(data.Data);
        console.log(data.Data);
      });
  }, [Delete]);
  const handleRemove = (Name) => {
    console.log(Name)
    fetch("http://localhost:3100/Remove2Cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: Name,
      }),
    })
      .then((Response) => Response.json())
      .then(async (data) => {
        if (data.Deleted && Delete == false) {
          toast.success("Deleted Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setDelete(true);
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
        if (Delete == true) {
          setDelete(false);
        }
      });
  };

  const [cartItem, setcartItem] = useState([]);

  const [count, setcount] = useState(1);
  return (
    <>
    
      <div className="cards flex justify-between max-sm:flex-col h-[100vh] bg-slate-100">
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
        <div className="lcard overflow-auto  p-2 w-[40vw] h-[89vh] max-sm:w-[100%]  bg-white">
          <div className=" font-bold text-2xl text-green-500  h-fit p-1  flex justify-between w-full ">
            <div className="flex justify-between items-center">
              <lord-icon
                src="https://cdn.lordicon.com/eiekfffz.json"
                trigger="hover"
              ></lord-icon>
              <h1 className=" text-green-700">My cart</h1>
            </div>
            <div className=" rounded-lg bg-slate-100">
              <Link href={"/"}>
                <div className="font-bold  text-2xl p-2 relative hover:bg-slate-50 flex gap-2 cursor-pointer w-fit ">
                  <img src="house.gif" alt="home" className=" h-10" />
                  <h1 className="text-green-500 mt-2">Home</h1>
                </div>
              </Link>
            </div>
          </div>
          {cartItem.length > 0 ? (
            <div className="flex-col">
              {cartItem.map((item, index) => (
                <div key={index} className="mt-10">
                  <div className="card  w-full">
                    <div className="card21 size-80 bg-white p-3 rounded-lg flex">
                      <img
                        src={item.src}
                        className=" rounded-md h-56 w-[19vw] max-sm:w-[60%] max-sm:h-48"
                        alt="cabbage"
                      />
                      <div className="description w-[20vw] right-0">
                        <h1 className="text-center font-bold text-xl mr-4">
                          {item.Name}
                        </h1>
                        <p className="text-red-800 ml-4 font-semibold">
                          {item.Price}
                        </p>
                        <div className="count flex justify-between mt-5 ml-2 border-2 w-[11vw] p-2 rounded-lg hover:bg-slate-100  right-0">
                          <button
                            onClick={() => {
                              setcount(count + 1);
                            }}
                          >
                            <FaCirclePlus className="size-6" />
                          </button>
                          <div className="mr-2 ml-2 font-bold text-xl ">
                            {count}
                          </div>
                          <button
                            onClick={() => {
                              if (count > 0) {
                                setcount(count - 1);
                              }
                            }}
                          >
                            <FaMinusCircle className="size-6" />
                          </button>
                        </div>
                        <div className="detail flex gap-6">
                          <div className="puchase flex gap-6 justify-between w-24">
                            <button
                              onClick={() => {
                                handleRemove(item.Name);
                              }}
                              className="font-semibold bg-[#6e9f2ad9] p-2 mt-3 rounded-xl hover:bg-[#6f9f2a] active:scale-110  transition-all ml-2"
                            >
                              Remove Item
                            </button>
                          </div>
                          <div className="puchase  justify-between ">
                            <Link href={"/Developing"}>
                              <button className="font-semibold bg-[#2a9f99d9] p-2 mt-3 rounded-xl hover:bg-[#15868a] active:scale-110  transition-all">
                                Place Order
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          ): (<div className="text-2xl font-semibold justify-center items-center mt-48 text-center h-[10vh]">
            Cart is Empty
          </div>)}
          
        </div>
        <div className="img max-sm:hidden">
          <img
            src="https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-gardener-with-a-cart-with-vegetables-illustration-in-doodle-style-png-image_11491927.png"
            alt="img"
            className="w-[25vw] bg-cover h-fit mt-36"
          />
        </div>
        <div className=" max-sm:w-[100%]  rCard boder-2 bg-white h-[90vh] w-[30vw] mt-10 mr-10 p-6 rounded-lg flex-col">
          <h1 className="font-bold text-center text-xl">PRICE DETAILS</h1>
          <hr />
          <div className="data">
            <div className="details  h-fit ">
              
              {cartItem.map((item,index)=> (
                <div key={index} className="mt-4 mb-2">
                  <div className="flex justify-between">
                    <h1 className="font-bold">{item.Name}</h1>
                    <h1 className="text-blue-600">{item.Price}</h1>
                    
                  </div>
                
           </div>
              ))}
            </div>
            <Link href={"/Developing"}>
              <button className="font-semibold bg-[#2a9f99d9] p-2 mt-3 rounded-xl hover:bg-[#15868a] active:scale-110  transition-all w-full">
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
