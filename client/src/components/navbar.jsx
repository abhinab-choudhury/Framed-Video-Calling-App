import { Link } from "react-router-dom";
import Logo from "./../assets/logo.png";
import VerticalLine from "./../assets/vertical-line.png";

function Navbar() {
  return (
    <nav className="fixed flex flex-col md:flex-row w-full py-2 px-9 bg-gray-100 shadow-md shadow-gray-300/40 z-10">
      <div className="flex  mx-auto w-full max-w-7xl items-center justify-between">
        <Link to="/">
          <div className="flex items-center">
            <img width="60" height="60" src={Logo} alt="video-message" />
            <span className="text-xl font-bold ml-4 poppins-bold">Framed</span>
            <img className="h-1/2 w-1/12 hidden md:block" src={VerticalLine} alt="vertical-line" />
            <span className="text-sm hidden md:block">Crystal clear video calls.</span>
          </div>
        </Link>
        <Link to={"/signin"} className="relative inline-block">
          <button className="relative min-w-[70px] cursor-pointer px-3 py-1 border-0 rounded-md text-balance text-white/70 transition-all duration-700 ease-[cubic-bezier(0.15,0.83,0.66,1)] bg-blue-700 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] hover:-translate-y-[2px] hover:text-white">
            Sign In
            <span className="pointer-events-none absolute bottom-0 left-[15%] h-px w-[70%] opacity-20 transition-all duration-700 ease-[cubic-bezier(0.15,0.83,0.66,1)] bg-gradient-to-r from-transparent via-white to-transparent hover:opacity-100"></span>
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
