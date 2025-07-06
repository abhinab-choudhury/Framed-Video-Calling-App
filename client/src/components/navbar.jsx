import { Link } from "react-router-dom";
import Logo from "./../assets/logo.png";
import VerticalLine from "./../assets/vertical-line.png";
import SigninBtn from "./signin-btn";

function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row w-full py-2 px-9 bg-gray-100 shadow-md shadow-gray-300/40 z-10">
      <div className="flex  mx-auto w-full max-w-7xl items-center justify-between">
        <Link to="/">
          <div className="flex items-center">
            <img width="60" height="60" src={Logo} alt="video-message" />
            <span className="text-xl font-bold ml-4 poppins-bold">Framed</span>
            <img
              className="h-1/2 w-1/12 hidden md:block"
              src={VerticalLine}
              alt="vertical-line"
            />
            <span className="text-sm hidden md:block">
              Crystal clear video calls.
            </span>
          </div>
        </Link>
        <SigninBtn />
      </div>
    </nav>
  );
}

export default Navbar;
