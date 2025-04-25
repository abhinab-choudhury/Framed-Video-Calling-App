import HeroImage from "./../assets/Hero-Image.jpg";
import AgoraLogo from "./../assets/Agora_Logo.png";
import AppwriteLogo from "./../assets/Appwrite_Logo.svg";
import ReactLogo from "./../assets/React_Logo.svg";
import TailwindcssLogo from "./../assets/Tailwindcss_Logo.svg";
import { ChevronRight } from "lucide-react";

function HomePage() {
  return (
    <div className="flex flex-col mx-auto items-center max-w-7xl px-4 min-h-screen h-full">
      <section className="py-8 md:py-14">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-5xl font-bold tracking-tight">
              Welcome to <span className="text-indigo-600">Framed</span>
            </h1>
            <p className="text-xl text-gray-600">
              Connect with clarity. Professional video meetings designed for seamless collaboration.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-indigo-700 transition-colors">
                Start a Meeting
                <ChevronRight size={20} />
              </button>
              <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors">
                Join Meeting
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 bg-indigo-100 rounded-full w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-xl opacity-70"></div>
            <img src={HeroImage} alt="Video conferencing" className="w-full rounded-lg" />
          </div>
        </div>
      </section>

      <section className="w-full p-8 md:p-10 rounded-2xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 max-w-5xl mx-auto">
            <div className="group">
              <div className="relative flex flex-col items-center">
                <div className="h-16 w-full mb-6 relative flex justify-center">
                  <img
                    src={AgoraLogo}
                    alt="Agora SDK"
                    className="grayscale hover:grayscale-0 h-full object-contain transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
            <div className="group">
              <div className="relative flex flex-col items-center">
                <div className="h-16 w-full mb-6 relative flex justify-center">
                  <img
                    src={AppwriteLogo}
                    alt="Appwrite"
                    className="grayscale hover:grayscale-0 h-full object-contain transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
            <div className="group">
              <div className="relative flex flex-col items-center">
                <div className="h-16 w-full mb-6 relative flex justify-center">
                  <img
                    src={ReactLogo}
                    alt="React"
                    className="grayscale hover:grayscale-0 h-full object-contain transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
            <div className="group">
              <div className="relative flex flex-col items-center">
                <div className="h-16 w-full mb-6 relative flex justify-center">
                  <img
                    src={TailwindcssLogo}
                    alt="Tailwind CSS"
                    className="grayscale hover:grayscale-0 h-full object-contain transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
