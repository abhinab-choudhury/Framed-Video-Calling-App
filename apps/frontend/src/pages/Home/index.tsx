import HeroImage from "../../assets/images/heroImage.jpg";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import {
  AgoraLogo,
  ReactLogo,
  SuperTokenLogo,
  TailwindLogo,
} from "../../assets/images";
import JoinMeetingBtn from "../../components/join-meeting";

function HomePage() {
  const [roomId, setRoomId] = useState("");
  useEffect(() => {
    setRoomId(nanoid());
  }, []);

  return (
    <div className="flex flex-col mx-auto items-center max-w-7xl px-4 min-h-screen h-full">
      <section className="py-8 md:py-14">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-5xl font-bold tracking-tight">
              Welcome to <span className="text-indigo-600">Framed</span>
            </h1>
            <p className="text-xl text-gray-600">
              Connect with clarity. Professional video meetings designed for
              seamless collaboration.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                to={`/meet/${roomId}`}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-indigo-700 transition-colors"
              >
                Start a Meeting
                <ChevronRight size={20} />
              </Link>
              <JoinMeetingBtn />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 bg-indigo-100 rounded-full w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-xl opacity-70"></div>
            <img
              src={HeroImage}
              alt="Video conferencing"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="w-full p-8 md:p-10 rounded-2xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 max-w-5xl mx-auto">
            {[
              {
                name: "Agora",
                logo: AgoraLogo,
                link: "https://agora.io/",
              },
              {
                name: "SuperTokens",
                logo: SuperTokenLogo,
                link: "https://supertokens.com/",
              },
              {
                name: "React",
                logo: ReactLogo,
                link: "https://react.dev/",
              },
              {
                name: "Tailwind CSS",
                logo: TailwindLogo,
                link: "https://tailwindcss.com/",
              },
            ].map(({ name, logo, link }) => (
              <a
                href={link}
                target="_blank"
                key={name}
                className="group relative flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-24 w-24 flex items-center justify-center mb-4">
                  <div className="absolute rounded-full bg-indigo-100 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-70 group-hover:scale-110 w-full h-full"></div>
                  <img
                    src={logo}
                    alt={name}
                    className="h-20 object-contain z-10 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-sm text-gray-700 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {name}
                </h4>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
