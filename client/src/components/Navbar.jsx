import { NavLink } from "react-router-dom";
import Logo from "./../assets/logo.png";
import VerticalLine from "./../assets/vertical-line.png";

function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row w-full py-3 px-9 bg-gray-100 shadow-sm shadow-gray-300/40 z-10">
      <div className="flex  mx-auto w-full max-w-7xl items-center justify-between">
        <NavLink to="/">
          <div className="flex items-center">
            <img width="60" height="60" src={Logo} alt="video-message" />
            <span className="text-xl font-bold ml-4 poppins-bold"> Framed </span>
            <img className="h-1/2 w-1/12 hidden md:block" src={VerticalLine} alt="vertical-line" />
            <span className="text-sm hidden md:block">Crystal clear video calls.</span>
          </div>
        </NavLink>
        <div className="flex items-center gap-4">
          <NavLink
            to="/signin"
            className="text-blue-600 border rounded-md border-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 p-2 md:px-3 md:py-2"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/signup"
            className="bg-blue-600 text-white font-medium p-2 md:px-3 md:py-2 rounded-md shadow-sm hover:bg-blue-700 transition-all duration-200 hover:shadow-md"
          >
            Sign up
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
