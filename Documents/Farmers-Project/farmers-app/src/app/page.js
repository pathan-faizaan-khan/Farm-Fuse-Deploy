"use client"
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";
import Manager from "./components/manager";
import Navbar from "./components/navbar";
import { useEffect, useState , useRef } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";




export default function Component() {
  const { data: session ,update,status} = useSession();
  const [Wpass, setWpass] = useState(false);
  const ref = useRef();
  const showref = useRef();
  const PassRef = useRef();
  const router = useRouter();
  useEffect(() => {
    router.refresh()
    
  }, [])
  
  const [form,setForm] = useState({email : "",password: ""});

  const handleChange = (e)=> {
    showref.current.className = "visible"
    ref.current.className = "hidden"
    setForm({...form ,[e.target.name] : [e.target.value]});
  }
  const handleEye = () => {
    if (ref.current.className == "visible") {
      PassRef.current.type = "password";
      ref.current.className = "hidden";
      showref.current.className = "visible"
    }
    else {
      PassRef.current.type = "text"
      ref.current.className = "visible";
      showref.current.className = "hidden";
    }
  }
  const handleSubmit = async() => {
    await fetch('http://localhost:3100/SignUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        gmail : form.email,
        password : form.password
      })
    }).then(Response => Response.json()).then(async(data)=> {
      if (data.success || data.created) {
        signIn();
      }
      else {
        console.log("not created");
        setWpass(true);
      }
    });
  }
  
  
  if (session) {
    {
      console.log(session);
      document.body.style.backgroundImage = "none";
      console.log(status)
      fetch('http://localhost:3100/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          gmail : session.user.email,
        })
      });  
      
    }
    return (
      <>
        <div className="container ">
        <Navbar/>
        <Manager/>
        </div>
        
      </>
    );
  }
  return (
    <>
    <div class="absolute inset-0  -z-10 h-full  w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
    <div className="login flex justify-between items-center h-[100vh] max-sm:m-0">
        <div className="max-sm:hidden">
          <img src="SignIn.png" alt="" />
        </div>
        <div className="mb-44 max-sm:m-0">
          <div className="h-[40vh] max-sm:hidden">
            <img src="pngegg.png" alt=""/>
          </div>
          <div className=" h-1 max-sm:mb-36 sm:hidden">
            <img src="phoneMode.png" alt=""/>
          </div>
        <div className="max-sm:ml-8 mr-14 max-sm:mr-0 p-4 border-1 border-solid border-black h-[64vh] rounded-xl w-80 md:w-96 bg-white">
           <div className="logo_name flex justify-center">
            <img src="favicon.ico" alt="fav" className="size-32"/>
           </div>   
            <h4 className="font-semibold">Email</h4>
            <input
              onChange={handleChange}
              value={form.email}
              type="email"
              name="email"
              placeholder="example@gmail.com"
              id="email"
              className="border-2 h-7 w-[100%] rounded-lg p-4"
            />
            <h4 className="font-semibold mt-4 ">Password</h4>
            <div className=" max-sm:w-full pass flex justify-between items-center w-[25.5vw]">
            <input
              ref={PassRef}
              onChange={handleChange}
              value={form.password}
              type="password"
              name="password"
              id="password"
              className="border-2 h-7 w-[100%] rounded-lg p-4"
            />
            <span ref = {ref} className="hidden"><IoEyeOutline className="z-10 relative right-6 hover:cursor-pointer size-5" onClick={()=>{handleEye()}}/>            </span>
            <span ref = {showref} className="visible"><FaRegEyeSlash className="z-10 relative right-6 hover:cursor-pointer size-5" onClick={()=>{handleEye()}}/>            </span>
            </div>
            <div className="wpass">
              {Wpass && <h1 className="text-red-500 font-semibold">Wrong Password</h1>}
            </div>
            
            <button onClick={handleSubmit} className="text-center my-4 border-2 rounded-xl p-2 w-[100%] bg-blue-400 hover:bg-blue-300 font-bold">
              SignIn/SignUp
            </button>
          <button
            className="flex max-sm:mt-1 gap-3 border-2 rounded-2xl p-2 font-bold w-[100%] justify-center my-4 hover:bg-slate-50 "
            onClick={() => {signIn()}}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
              alt="image"
              className=" h-9"
            />
            Continue With GOOGLE
          </button>
        </div>
        </div>
        
        <div className="max-sm:hidden">
          <img src="left.png" alt="" />
        </div>
      </div>
    </div>
    </>
  );
}
