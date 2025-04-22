import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import close_eye from "./../assets/closed-eye.png";
import open_eye from "./../assets/visible.png";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passImg, setPassImg] = useState(close_eye);

  const passwordHandler = () => {
    if (document.getElementById("password").type === "password") {
      document.getElementById("password").type = "text";
      setPassImg(open_eye);
    } else {
      document.getElementById("password").type = "password";
      setPassImg(close_eye);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex justify-center align-middle">
        <form className="border border-black rounded-md bg-white p-10 w-96">
          <h1 className="font-bold text-2xl poppins-bold ml-auto mr-auto my-0.5">Sign in</h1>
          <span className="font-thin poppins-regular">Enter you Credentials</span>
          <div className="mt-4 roboto-regular">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              onChange={e => setEmail(e.target.value)}
              value={email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="relative mt-4 roboto-regular">
            <div className="flex justify-between ">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <NavLink to="/reset-password" className="block text-blue-700 text-sm font-light mb-2 hover:underline">
                Forgot Password
              </NavLink>
            </div>
            <input
              onChange={e => setPassword(e.target.value)}
              value={password}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
            <img
              onClick={passwordHandler}
              className="cursor-pointer absolute inset-y-0 right-1 my-9 mx-1"
              width="22"
              height="22"
              src={passImg}
              alt="visible"
            />
          </div>
          <div className="mt-6 roboto-regular">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold poppins-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="flex items-center justify-center">
            <hr className="border-gray-400 w-1/2 mr-2" />
            <span className="text-gray-700 poppins-bold">OR</span>
            <hr className="border-gray-400 w-1/2 ml-2" />
          </div>
          <div>
            <p className="font-extralight">
              Don&#39;t had an account than{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                {" "}
                signup{" "}
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
