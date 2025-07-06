import { Link } from "react-router-dom";
import Logo from "./../assets/logo.png";
import GoogleLogo from "./../assets/google.svg";
import GithubLogo from "./../assets/github.svg";
import VerticalLine from "./../assets/vertical-line.png";

function Signin() {
  const handleGoogleSignIn = () => {
    alert("Google SignIn");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 w-full max-w-md space-y-6">
        <div className="flex items-center justify-center space-x-2">
          <img src={Logo} alt="Logo" className="w-12 h-12" />
          <span className="font-bold text-lg">Framed</span>
          <img
            src={VerticalLine}
            alt="Divider"
            className="h-6 hidden md:block"
          />
          <span className="text-sm text-gray-500 hidden md:block">
            Crystal clear video calls.
          </span>
        </div>

        <h1 className="text-2xl font-bold text-center poppins-bold">Sign In</h1>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-3 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 font-medium px-5 py-2.5 rounded-lg shadow transition-all w-full"
        >
          <img src={GoogleLogo} alt="Google" className="w-5 h-5" />
          Sign in with Google
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-3 bg-[#24292F] text-white hover:bg-[#1f2428] focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg px-5 py-2.5 shadow transition-all w-full"
        >
          <img src={GithubLogo} alt="Github" className="w-4 h-4" />
          Sign in with GitHub
        </button>

        <p className="text-xs text-center text-gray-500">
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
      </div>
    </div>
  );
}

export default Signin;
