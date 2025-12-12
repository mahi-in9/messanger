import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { ChevronRight } from "@/components/ui/right";

function Home() {
  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      {/* Decorative Grid + Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
            radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
          `,
          backgroundSize: "96px 64px, 96px 64px, 100% 100%",
        }}
      />

      {/* Content Layout */}
      <div className="relative z-10 flex flex-col md:flex-row">
        {/* LEFT SECTION */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-6 md:min-h-screen">
          <p className="text-3xl font-extrabold text-black">
            Welcome to the Messer App
          </p>

          <Link
            to="/login"
            className="flex items-center gap-2 font-bold md:mt-2 hover:bg-red-700 p-2 bg-red-500 rounded-2xl border-2 text-white transition"
          >
            Get Started
            <ChevronRight />
          </Link>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center justify-center bg-white md:w-1/2 w-full p-6 md:min-h-screen">
          <div
            className="w-full h-[300px] md:w-[80%] md:h-[80%] bg-contain bg-center bg-no-repeat shadow-2xl shadow-black"
            style={{ backgroundImage: `url(${logo})` }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
