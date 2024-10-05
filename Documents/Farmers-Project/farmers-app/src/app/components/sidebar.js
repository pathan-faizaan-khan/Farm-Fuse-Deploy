
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState ,useEffect} from "react";
import { IoLogOut } from "react-icons/io5";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";


const SidebarContext = createContext();

export default function Sidebar({ children }) {
  
  const { data: session } = useSession();

  const [expanded, setExpanded] = useState(false);
  const [logout, setlogout] = useState(false)
  useEffect(() => {
    const sideArrow = document.getElementById('leftArrow');
    expanded ?sideArrow.classList.add('hidden') : sideArrow.classList.remove('hidden');

    return () => {
      // expanded ?sideArrow.classList.remove('hidden') : sideArrow.classList.add('hidden');
    }
  }, [expanded])
  return (
    <aside className="h-screen z-20">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="favicon.ico"
            className={`overflow-hidden transition-all  ${
              expanded ? "w-32" : "w-0"
            }`}
            alt="img"
            
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-col justify-between flex h-full px-3 font-bold ">
            <Link href={"/profile"}>
            <li className="mt-4 flex gap-2  p-1.5 rounded-lg hover:bg-gray-100">
              <lord-icon
                src="https://cdn.lordicon.com/fmasbomy.json"
                trigger="hover"
              ></lord-icon>
              <p className={`overflow-hidden transition-all ${expanded ? "w-32":"w-0"}`}>Your Account</p>
            </li>
            </Link>
            <Link href={"/cart"}>
            <li className="mt-8 flex gap-2 p-1.5 rounded-lg  hover:bg-gray-100">
              <lord-icon
                src="https://cdn.lordicon.com/qnstsxhd.json"
                trigger="hover"
              ></lord-icon>
              <p className={`overflow-hidden transition-all ${expanded ? "w-32":"w-0"}`}>Cart</p>
            </li>
            </Link>
            <Link href={"/ourFarmers"}>
            <li className="mt-8 flex gap-2 p-1.5 rounded-lg  hover:bg-gray-100">
              <lord-icon
                src="https://cdn.lordicon.com/mebvgwrs.json"
                trigger="hover"
              ></lord-icon>
              <p className={`overflow-hidden transition-all ${expanded ? "w-32":"w-0"}`}>Our Farmers</p>
            </li>
            </Link>
            <Link href={"/feedback"}>
            <li className="mt-8 flex gap-2 p-1.5 rounded-lg  hover:bg-gray-100">
              <lord-icon
                src="https://cdn.lordicon.com/hgqdtxby.json"
                trigger="hover"
              ></lord-icon>
              <p className={`overflow-hidden transition-all ${expanded ? "w-32":"w-0"}`}>Feedback</p>
            </li>
            </Link>
            <Link href={"/favProducts"}>
           
            </Link>
            
          </ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src={session.user.image}
            alt="use Image"
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="flex justify-between gap-4">
            <div className="leading-4">
              <h4 className="font-semibold">{session.user.name}</h4>
              <span className="text-xs text-gray-600">{session.user.email}</span>
            </div>
            <div className="logout ">
            <IoLogOut className="size-10 cursor-pointer hover:scale-110 transition-all " onClick={signOut}/>

            </div>
            </div>
            
          </div>
        </div>
      </nav>
    </aside>
  );
}
