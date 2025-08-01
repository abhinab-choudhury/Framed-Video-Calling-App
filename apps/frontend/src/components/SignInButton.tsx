import { Link } from "react-router-dom";

export default function SignInBtn() {
  return (
    <Link
      to={"/auth"}
      className="block active:scale-95 transition-transform duration-150 ease-in-out poppins-regular text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md"
      type="button"
    >
      Sign in
    </Link>
  );
}
