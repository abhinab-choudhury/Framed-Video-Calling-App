import { NavLink } from "react-router-dom";
import Logo from "./../assets/logo.png"
import VerticalLine from "./../assets/vertical-line.png"



function Navbar() {

  return (
    <nav className="flex w-full fixed top-0 px-9 bg-gray-100 shadow-lg shadow-gray-300/40 z-10">
      <div className="flex items-center justify-between w-full">
        <NavLink to="/">
          <div className="flex items-center">
            <img width="80" height="80" src={Logo} alt="video-message" />
            <span className="text-3xl font-bold ml-4 poppins-bold"> Framed </span>
            <img className="h-1/2 w-1/12" src={VerticalLine} alt="vertical-line" />
            <span >Crystal clear video calls.</span>
          </div>
        </NavLink>
        <div className="flex items-center">
          <NavLink to="/join" className="text-blue-700 mx-5 hover:bg-blue-500 hover:text-white block hover:rounded-[30px] border-blue-400 px-3 py-2" >Join a Meeting</NavLink>
          <NavLink to="/signin" className="text-blue-700 hover:bg-blue-500 hover:text-white block border rounded-md border-blue-400 px-3 py-2" > Sign in</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;