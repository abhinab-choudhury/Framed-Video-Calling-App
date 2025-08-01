import { useNavigate } from "react-router-dom";
import { getApiDomain } from "../lib/supertokens";

export default function SignOutBtn() {
  const navigate = useNavigate();

  async function callAPISignout() {
    const response = await fetch(getApiDomain() + "/auth/signout", {
      method: "POST",
      credentials: "include",
    });
    const data = await response.json();
    if (data.status == "OK") {
      navigate("/");
    }
  }

  return (
    <button
      onClick={() => callAPISignout()}
      className="block active:scale-95 transition-transform duration-150 ease-in-out poppins-regular text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md"
      type="button"
    >
      Sign Out
    </button>
  );
}
