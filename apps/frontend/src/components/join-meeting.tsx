import Image from "../assets/images/join-meeting.jpg";
import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function JoinMeetingBtn() {
  const [toggleView, setToggleView] = useState(false);
  const [roomId, setRoomId] = useState("");

  return (
    <>
      <button
        onClick={() => setToggleView(true)}
        className="border border-gray-300 px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors"
      >
        Join Meeting
      </button>

      {toggleView && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Joining Room: ${roomId}`);
            }}
            className="relative bg-white border border-gray-200 rounded-2xl shadow-xl p-6 md:p-8 w-full h-[45vh] max-w-2xl mx-4 space-y-6 animate-fade-in"
          >
            <button
              type="button"
              onClick={() => setToggleView(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex flex-col gap-5 w-full">
                <div>
                  <h1 className="text-2xl font-bold mb-2 poppins-bold">
                    Join a Video Call
                  </h1>

                  <label
                    className="block font-medium text-gray-700 mb-1"
                    htmlFor="code"
                  >
                    Meeting Code
                  </label>
                </div>

                <div>
                  <input
                    className="block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    id="code"
                    type="text"
                    placeholder="Enter your Room ID"
                    required
                  />

                  <Link
                    to={`/meet/${roomId}`}
                    className="mt-4 w-full inline-flex justify-center items-center bg-blue-600 text-white font-medium rounded-lg p-3 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Join
                  </Link>
                </div>
              </div>

              <img
                className="hidden md:block object-cover rounded-lg w-1/2"
                src={Image}
                alt="Join meeting illustration"
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
}
