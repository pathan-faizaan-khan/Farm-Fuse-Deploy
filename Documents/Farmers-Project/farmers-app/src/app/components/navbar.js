"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import Sidebar from "./sidebar";
import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SessionProvider } from "next-auth/react";

export default function navbar() {
  const router = useRouter();
  const ref = useRef();
  const [Items, setItems] = useState([]);
  const searchJson = {
    Fruits: "/fruits",
    Vegetables: "/vegetables",
    Dairy_products: "/DairyProducts",
    Tomato: "/vegetables",
    Onion: "/vegetables",
    Potato: "/vegetables",
    Cabbage: "/vegetables",
    Carrot: "/vegetables",
    Brinjal: "/vegetables",
    Capsicum: "/vegetables",
    Cauliflower: "/vegetables",
    Corn: "/vegetables",
    Broccoli: "/vegetables",
    Beetroot: "/vegetables",
    Muli: "/vegetables",
    Apple: "/fruits",
    Grapes: "/fruits",
    Orange: "/fruits",
    Mango: "/fruits",
    Stawberry: "/fruits",
    Anar: "/fruits",
    Banana: "/fruits",
    Cherry: "/fruits",
    PineApple: "/fruits",
    Papaya: "/fruits",
    WaterMelon: "/fruits",
    Sapota: "/fruits",
    Milk: "/DairyProducts",
    Cream: "/DairyProducts",
    Butter: "/DairyProducts",
    Cheeze: "/DairyProducts",
    Curd: "/DairyProducts",
    Ghee: "/DairyProducts",
    Yogurt: "/DairyProducts",
    Kefir: "/DairyProducts",
    Feta_cheeze: "/DairyProducts",
  };
  const searchItems = Object.keys(searchJson);

  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    ref.current.className = "bg-slate-50 rounded-lg visible";
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    const capitalized = search.charAt(0).toUpperCase() + search.slice(1);
    console.log(capitalized);
    const filteredItems = searchItems.filter((item) =>
      item.includes(capitalized)
    );

    setItems(filteredItems);
  };
  const handdleBlur = () => {
    setTimeout(() => {
      ref.current.className = "hidden";
    }, 2000);
  };
  const handleClick = (items) => {
    if (items in searchJson) {
      router.push(searchJson[items]);
    }
    
  };
  const submitSearch = ()=> {
    if (search in searchJson) {
      router.push(searchJson[search]);
    }
  }
  return (
    <>
      <div className="head bg-[#fefbfb] h-[14vh] flex border-b justify-between fixed z-20 max-sm:top-0">
        <Sidebar />
        <div className="navbar ml-72 max-sm:ml-[11.5vh] w-[100w] bg-[#ffffff] h-[14vh] flex border-b justify-between fixed ">
          <img
            src="favicon.ico"
            alt="favicon"
            className=" rounded-full h-[16vh] max-sm:h-[12vh]"
          />

          <div className="searchbar flex  w-25 h-8 my-6 rounded-xl ">
            <div className="dropdown flex flex-col">
              <input
                placeholder="Search Anything"
                type="text"
                name="search"
                id="search"
                value={search}
                onChange={handleChange}
                onBlur={handdleBlur}
                className=" rounded-l-xl border-2 w-[30vh] p-2 bg-[#f9f9f9] size-14 max-sm:w-[23vh]"
              />
              <div className="item bg-slate-50 rounded-lg visible" ref={ref}>
                {Items.map((item, index) => (
                  <div
                    key={index}
                    className="faq-item flex flex-col z-10 p-1 font-semibold"
                  >
                    <h1
                      className="hover:cursor-pointer hover:bg-slate-100"
                      onClick={() => handleClick(item)}
                    >
                      {Items[index]}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={()=>submitSearch()}>
              <FaSearch className=" size-10 p-1 mr-3 cursor-pointer hover:bg-slate-200 bg-[#f9f9f9]" />
            </button>
          </div>
          <div className="mycart my-2 ml-96 cursor-pointer hover:scale-110  transition-all max-sm:ml-1">
            <Link href={"/cart"}>
              <FaShoppingCart className=" size-14 max-sm:w-9 max-sm:mt-1" />
            </Link>
          </div>
          <div className="profile my-2  cursor-pointer hover:scale-110  transition-all mr-4">
            <Link href={"/profile"}>
              <CgProfile className="size-14 max-sm:w-9 max-sm:ml-2 max-sm:mt-1" />
            </Link>
          </div>  
        </div>
      </div>
      <div className="smallNavbar w-[62.6vw] max-sm:w-[90vw] h-[7vh] rounded-b-lg bg-[#6f9f2a] max-sm:ml-[16vh] ml-72 fixed my-[14vh] max-sm:top-0  z-10">
        <ul className="max-sm:gap-6  flex justify-between font-bold ml-9 mr-9 p-1">
          <li className="flex hover:bg-[#a8d26d] rounded-xl p-1 hover:scale-110  transition-all">
            <Link href={"/vegetables"} className="flex">
              <lord-icon
                src="https://cdn.lordicon.com/evvwiruv.json"
                trigger="hover"
              ></lord-icon>
              <h3 className="max-sm:hidden">Vegetables</h3>
            </Link>
          </li>
          <li className="flex hover:bg-[#a8d26d]  rounded-xl p-1 hover:scale-110  transition-all">
            <Link href={"/fruits"} className="flex">
              <lord-icon
                src="https://cdn.lordicon.com/nuqshqha.json"
                trigger="hover"
              ></lord-icon>
              <h3 className="max-sm:hidden">Fruits</h3>
            </Link>
          </li>
          <li className="flex hover:bg-[#a8d26d] rounded-xl p-1 hover:scale-110  transition-all">
            <Link href={"/DairyProducts"} className="flex">
              <lord-icon
                src="https://cdn.lordicon.com/sxrnyajs.json"
                trigger="hover"
              ></lord-icon>
              <h3 className="max-sm:hidden">Dairy Products</h3>
            </Link>
          </li>
          <Link href={"/maps"}>
            <li className="flex hover:bg-[#a8d26d]  rounded-xl p-1 hover:scale-110  transition-all">
              <a href="#" className="flex">
                <lord-icon
                  src="https://cdn.lordicon.com/tdtlrbly.json"
                  trigger="hover"
                ></lord-icon>
                <h3 className="max-sm:hidden">Maps</h3>
              </a>
            </li>
          </Link>
          <Link href={"/FAQ"}>
            <li className="flex hover:bg-[#a8d26d]  rounded-xl p-1">
              <a href="#" className="flex hover:scale-110  transition-all">
                <lord-icon
                  src="https://cdn.lordicon.com/kiynvdns.json"
                  trigger="hover"
                ></lord-icon>
                <h3 className="max-sm:hidden">FAQ</h3>
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
