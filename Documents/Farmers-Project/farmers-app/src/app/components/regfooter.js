
import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import Link from 'next/link';

const Regfooter = (props) => {
  return (
    <>
    <div className="footer flex-col max-sm:w-[111vw] max-sm:m-0 max-sm:absolute max-sm:left-0 ">
          <div className="back2top w-[98.8vw] max-sm:w-[111vw] text-center cursor-pointer bg-slate-600 text-white p-2  ">
            <Link href={"/"}>
              <div className="back hover:font-semibold">Back to top</div>
            </Link>
          </div>
          <div className="introduction flex size-24 justify-center text-white font-semibold w-[98.8vw] max-sm:w-[111vw] bg-[#232f3e]   border-b-slate-700 border-b-2">
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
    </>
  )
}

export default Regfooter;
