"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { data } from "autoprefixer";

const page = () => {
  const [add, setadd] = useState("");
  const [num, setnum] = useState("");
  const [date, setdate] = useState("");

  useEffect(() => {
    fetch("http://localhost:3100/DataFetch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gmail: session.user.email,
      }),
    })
      .then((Response) => Response.json())
      .then(async (data) => {
        setnum(data.MobNum);
        setadd(data.Address);
        setdate(data.DOB);
      });
  }, []);

  const ref = useRef();
  const addRef = useRef();
  const { data: session } = useSession();
  const handleChange = (e) => {
    setnum(e.target.value);
  };
  const handleNumClick = () => {
    ref.current.readOnly = false;
  };
  const handleBlur = () => {
    ref.current.readOnly = true;
  };
  const handleDate = (e) => {
    setdate(e.target.value);
  };
  const handleAdd = (e) => {
    setadd(e.target.value);
  };
  const handleSubmit = async () => {
    await fetch("http://localhost:3100/Profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gmail: session.user.email,
        MobNum: num,
        DOB: date,
        Address: add,
      }),
    }).then((Response)=>Response.json()).then((Data)=> {
      if(Data.updated) {
        toast.success('Updated Successfully!', {
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
      else if(Data.success) {
        toast.success('Saved Successfully!', {
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
      else {
        toast.error(Data.errorData, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    })
  };
  return (
    <>
      <div className="main bg-white h-[100vh] flex w-[98vw]">
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
        <div className="main2 max-sm:z-20">
          <Link href={"/"}>
            <div className="font-bold text-3xl max-sm:mr-20  p-2 m-2 ml-8 hover:bg-slate-50 flex gap-2 cursor-pointer w-fit border rounded-lg">
              <img src="house.gif" alt="home" className=" h-12" />
              <h1 className="text-green-500 mt-2">Home</h1>
            </div>
          </Link>
          <div className="profileDetails max-sm:w-[95%] max-sm:m-4 border-2 border-black-100 hover:border-black rounded-md flex-col w-[40vw] h-[82vh] ml-8 hover:bg-slate-50">
            <div className="flex">
              <h1 className="bg-blue-600 w-fit p-2  rounded-xl m-3 font-bold text-white mt-12">
                Name
              </h1>
              <input
                type="text"
                value={session.user.name}
                className="mt-12  border  p-1 h-10 rounded-md bg-green-50 text-xl font-semibold hover:bg-green-100 hover:border-green-500"
              />
            </div>
            <div className="flex max-sm:z-20">
              <h1 className="bg-blue-600 w-fit p-2  rounded-xl m-3 font-bold text-white mt-12">
                Email
              </h1>
              <input
                type="email"
                value={session.user.email}
                className="mt-12  border  p-1 h-10 rounded-md bg-green-50 text-xl font-semibold hover:bg-green-100 hover:border-green-500"
              />
            </div>
            <div className="flex">
              <h1 className="bg-blue-600 w-fit p-2  rounded-xl m-3 font-bold text-white mt-12">
                Mobile number
              </h1>
              <input
                ref={ref}
                type="text"
                value={num}
                max={10}
                pattern="\d{10}"
                readOnly
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="91XXXXXXX"
                className="mt-12  border max-sm:w-[30vw]  p-1 h-10 rounded-md bg-green-50 text-xl font-semibold hover:bg-green-100 hover:border-green-500"
              />

              <button
                onClick={() => handleNumClick()}
                className="ml-4  border rounded-lg bg-green-100 p-1 h-fit mt-12 hover:scale-110  transition-all hover:bg-green-200"
              >
                <FaRegEdit className="size-8" />
              </button>
            </div>
            <div className="flex">
              <h1 className="bg-blue-600 w-fit p-2  rounded-xl m-3 font-bold text-white mt-12">
                Date of birth
              </h1>
              <input
                onChange={handleDate}
                value={date}
                type="date"
                className="mt-12 border  p-1 h-10 rounded-md bg-green-50 text-xl font-semibold hover:bg-green-100 hover:border-green-500"
              />
            </div>
            <div className="flex max-sm:z-20">
              <h1 className="bg-blue-600 w-fit p-2  rounded-xl m-3 font-bold text-white mt-12">
                Address
              </h1>
              <div className="area h-20 w-[5vw]">
                <textarea
                  id="Address"
                  value={add}
                  onChange={handleAdd}
                  ref={addRef}
                  readOnly
                  name="Address"
                  rows="4"
                  cols="50"
                  className="mt-12  border w-[25vw] p-1 h-10 rounded-md bg-green-50 text-xl font-semibold hover:bg-green-100 hover:border-green-500"
                ></textarea>
              </div>

              <button
                onClick={() => {
                  addRef.current.readOnly = false;
                }}
                className=" ml-80 max-sm:ml-40   border rounded-lg bg-green-100 p-1 h-fit mt-12 hover:scale-110  transition-all hover:bg-green-200"
              >
                <FaRegEdit className="size-8" />
              </button>
            </div>
            <div className="flex sticky" onClick={() => handleSubmit()}>
              <h1 className="bg-yellow-700 w-full text-center p-2  rounded-xl m-3 font-bold hover:bg-yellow-600 hover:cursor-pointer text-white mt-12">
                Save Details
              </h1>
            </div>
          </div>
        </div>
        <div className="farmImage max-sm:absolute max-sm:top-32 max-sm:right-0 max-sm:z-0">
          <img src="image.png" alt="image" />
        </div>
        <div className="main absolute right-0 flex m-2 border p-1 rounded-lg hover:bg-slate-50 hover:cursor-pointer">
          <div className="photo mr-2">
            <img
              src={session.user.image}
              alt="profile"
              className="h-10 rounded-full bg-cover mt-3"
            />
          </div>
          <div className="name font-bold mt-4 mr-2">{session.user.name}</div>
        </div>
      </div>
    </>
  );
};

export default page;
