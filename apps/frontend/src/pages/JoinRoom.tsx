import { Params, useNavigate, useParams } from "react-router-dom";
import { Mic, MicOff, Video, VideoOff, Phone } from "lucide-react";
import { useState } from "react";
import {
  LocalAudioTrack,
  LocalVideoTrack,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
} from "agora-rtc-react";

function JoinRoom() {
  const navigate = useNavigate();
  const { roomId: channelName }: Readonly<Params<string>> = useParams();

  const [micOn, setMicOn] = useState<boolean>(true);
  const [camOn, setCamOn] = useState<boolean>(true);

  const { localCameraTrack } = useLocalCameraTrack();
  const { localMicrophoneTrack } = useLocalMicrophoneTrack();

  const StartCallHandler = () => {
    navigate(`/c/${channelName}`);
  };

  return (
    <div className="w-full h-[90vh] bg-blue-500/30 flex flex-col md:flex-row">
      {/* Video area */}
      <div className="md:max-w-[65%] w-full h-full p-5">
        <div className="bg-black border rounded-md h-full">
          {camOn && (
            <LocalVideoTrack
              track={localCameraTrack}
              play={camOn}
              reversed={true}
            />
          )}
          {micOn && (
            <LocalAudioTrack track={localMicrophoneTrack} play={micOn} />
          )}

          <div className="absolute top-25 left-8 flex gap-1 p-2">
            {camOn || (
              <span className="bg-white text-black w-fit rounded-md p-2 flex justify-center items-center">
                No Video
              </span>
            )}
            {micOn || (
              <span className="bg-white text-black w-fit rounded-md p-2 flex justify-center items-center">
                No Audio
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="md:max-w-[35%] w-full h-full p-5 flex flex-col justify-between">
        <div>
          <h3 className="scroll-m-20 text-2xl poppins-regular font-semibold tracking-tight text-blue-700">
            Meet ID
          </h3>
          <code className="bg-blue-100 relative rounded px-[0.4rem] py-[0.3rem] font-mono text-sm font-normal mb-6 text-blue-700">
            {channelName}
          </code>
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
            onClick={StartCallHandler}
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 border border-blue-800 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition"
          >
            <Phone className="w-4 h-4" />
            Start Call
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinRoom;
