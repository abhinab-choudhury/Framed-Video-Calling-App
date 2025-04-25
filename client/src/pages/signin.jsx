import { Link } from "react-router-dom";
import Logo from "./../assets/logo.png";
import GoogleLogo from "./../assets/google.svg";
import VerticalLine from "./../assets/vertical-line.png";

function Signin() {
  const handleGoogleSignIn = () => {
    alert("Google SignIn");
  };
  return (
    <div className="min-h-screen -mt-10 bg-gray-100 flex items-center justify-center">
      <div className="flex justify-center align-middle">
        <form className="border border-black rounded-md bg-white p-10 w-96 flex flex-col items-center space-y-6">
          <div className="flex items-center">
            <img width="60" height="60" src={Logo} alt="video-message" />
            <span className="text-balance font-bold poppins-bold"> Framed </span>
            <img className="h-1/2 w-1/12 hidden md:block" src={VerticalLine} alt="vertical-line" />
            <span className="text-xs hidden md:block">Crystal clear video calls.</span>
          </div>
          <h1 className="font-bold text-2xl poppins-bold">Sign In</h1>
          <span className="font-thin poppins-regular">Continue with Google</span>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 font-medium px-4 py-2 rounded-md shadow-md transition duration-200 w-full"
          >
            <img src={GoogleLogo} alt="Google logo" className="w-5 h-5" />
            Sign in with Google
          </button>

          <p className="text-sm font-light text-center">
            By continuing, you agree to our{" "}
            <Link to="/terms" className="text-blue-500 hover:underline">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;
