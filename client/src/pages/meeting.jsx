import { useParams } from "react-router-dom";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
  AudioLinesIcon,
  Videotape,
} from "lucide-react";
import { useState } from "react";

function Meet() {
  let { roomId } = useParams();

  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);

  return (
    <div className="w-full h-[90vh] bg-blue-500/30 flex flex-col md:flex-row">
      {/* Video area */}
      <div className="md:max-w-[65%] w-full h-full p-5">
        <div className="bg-white border rounded-md h-full"></div>
      </div>

      {/* Right panel */}
      <div className="md:max-w-[35%] w-full h-full p-5 flex flex-col justify-between">
        <div>
          <h3 className="scroll-m-20 text-2xl poppins-regular font-semibold tracking-tight text-blue-700">
            Meet ID
          </h3>
          <code className="bg-blue-100 relative rounded px-[0.4rem] py-[0.3rem] font-mono text-sm font-normal mb-6 text-blue-700">
            {roomId}
          </code>

          <div className="flex flex-row mt-5 mb-4 md:my-5 gap-2 md:gap-5">
            <button
              type="button"
              className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <Videotape className="mr-2" />
              Allow Video Access
            </button>
            <button
              type="button"
              className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <AudioLinesIcon className="mr-2" />
              Allow Audio Access
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => setMicOn(!micOn)}
            className="flex items-center justify-center gap-2 rounded-lg border border-blue-600 bg-blue-600/60 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition"
          >
            {micOn ? (
              <Mic className="w-4 h-4" />
            ) : (
              <MicOff className="w-4 h-4" />
            )}
            {micOn ? "Mute Mic" : "Unmute Mic"}
          </button>

          <button
            onClick={() => setCamOn(!camOn)}
            className="flex items-center justify-center gap-2 rounded-lg border border-blue-600 bg-blue-600/60 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition"
          >
            {camOn ? (
              <Video className="w-4 h-4" />
            ) : (
              <VideoOff className="w-4 h-4" />
            )}
            {camOn ? "Turn off Camera" : "Turn on Camera"}
          </button>

          <button
            onClick={() => alert("Leaving the call")}
            className="flex items-center justify-center gap-2 rounded-lg bg-red-600 border border-red-600 text-white px-4 py-2 text-sm font-medium hover:bg-red-700 transition"
          >
            <PhoneOff className="w-4 h-4" />
            Leave Call
          </button>
        </div>
      </div>
    </div>
  );
}

export default Meet;
