import React from "react";
import { Link } from "react-router-dom";

function Navbar () {

  return (
    <nav className="flex w-full fixed top-0 px-9 bg-gray-100 shadow-lg shadow-gray-300/40 z-10">
      <div className="flex items-center justify-between w-full">
        <Link to="/framed"> 
          <div className="flex items-center">
            <img width="80" height="80" src="https://img.icons8.com/avantgarde/100/video-message.png" alt="video-message" />
            <span className="text-3xl font-bold ml-4 poppins-bold"> Framed </span>
            <img className="h-1/2 w-1/12" src="https://img.icons8.com/ios/100/vertical-line.png" alt="vertical-line" />
            <span >Crystal clear video calls.</span>
          </div>
        </Link>
        <div className="flex items-center">
          <Link to="/framed/signin" className="text-blue-700 hover:bg-blue-500 hover:text-white block border rounded-md border-blue-400 px-3 py-2" > Sign in</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;