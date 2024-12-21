import Image from "next/image";
import { poster } from "@/public/assets";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="backdrop-blur-sm mx-[2rem] min-[450px]:mx-[8rem] sm:mx-[2rem] xl:mx-[20rem]"
      style={{ borderRadius: "15px" }}
    >
      <div className="flex flex-col sm:flex-row rounded-lg mt-8">
        <div className="sm:flex-1">
          <Image
            src={poster}
            className="h-full object-cover"
            alt="Cricket Poster"
            style={{ borderRadius: "5%" }}
          />
        </div>
        <div className="p-4 sm:flex-1 text-white">
          <h2 className="text-xl font-bold">Watch Live BPL 2025</h2>
          <p className="mt-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 via-orange-500 via-green-400 via-blue-500 to-cyan-500 font-semibold">
            Without Any Cost
          </p>
          {/* Button with Enhanced Tech Gradient Bar */}
          <div className="relative w-full mt-4">
            <Link
              href="/watchlive"
              className="block py-3 px-6 text-center text-lg font-bold rounded-lg bg-gray-900 text-white relative overflow-hidden"
            >
              {/* Tech-Inspired Gradient Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 via-orange-500 via-green-400 via-blue-500 to-cyan-500 z-10"></div>
              Watch Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
