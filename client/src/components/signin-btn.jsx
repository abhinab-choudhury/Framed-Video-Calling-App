import Logo from "./../assets/logo.png";
import GoogleLogo from "./../assets/google.svg";
import GithubLogo from "./../assets/github.svg";
import VerticalLine from "./../assets/vertical-line.png";
import { useState } from "react";
import { X } from "lucide-react"; // optional: using lucide-react icons for a clean close icon

export default function SigninBtn() {
  const [toggleView, setToggleView] = useState(false);

  return (
    <>
      <button
        onClick={() => setToggleView(true)}
        className="block active:scale-95 transition-transform duration-150 ease-in-out poppins-regular text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md"
        type="button"
      >
        Sign in
      </button>

      {toggleView && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-sm transition-opacity">
          <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl p-8 w-full max-w-md mx-4 space-y-6 animate-fade-in">
            {/* Close button */}
            <button
              onClick={() => setToggleView(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Logo and header */}
            <div className="flex items-center justify-center space-x-2">
              <img src={Logo} alt="Logo" className="w-10 h-10" />
              <span className="font-bold text-xl">Framed</span>
              <img
                src={VerticalLine}
                alt="Divider"
                className="h-5 hidden md:block"
              />
              <span className="text-xs text-gray-500 hidden md:block">
                Crystal clear video calls.
              </span>
            </div>

            <h1 className="text-xl font-bold text-center poppins-bold">
              Sign In
            </h1>

            <button
              type="button"
              onClick={() => alert("Google Btn Clicked!!!")}
              className="flex items-center justify-center gap-3 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 font-medium px-5 py-2.5 rounded-lg shadow transition-all w-full"
            >
              <img src={GoogleLogo} alt="Google" className="w-5 h-5" />
              Sign in with Google
            </button>

            <button
              type="button"
              onClick={() => alert("GitHub Btn Clicked!!!")}
              className="flex items-center justify-center gap-3 bg-[#24292F] text-white hover:bg-[#1f2428] font-medium rounded-lg px-5 py-2.5 shadow transition-all w-full"
            >
              <img src={GithubLogo} alt="Github" className="w-4 h-4" />
              Sign in with GitHub
            </button>
          </div>
        </div>
      )}
    </>
  );
}
