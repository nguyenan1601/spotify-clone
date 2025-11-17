import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import { FaPlay } from "react-icons/fa";
import Footer from "./Footer";

const DisplayPodcast = () => {
  return (
    <div className="z-10 w-full">
      <Navbar />

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
          {albumsData.map((item, index) => (
            <div
              key={index}
              className="xl:h-[500px] lg:h-[450px] sm:h-[400px] relative rounded-lg p-3 sm:p-4 flex flex-col hover:bg-[#2a2a2a] transition duration-300 cursor-pointer group overflow-hidden"
              style={{ backgroundColor: item.bgColor }}
            >
              {/* Header with thumbnail */}
              <div className="w-full mb-4 flex items-start gap-3 z-10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl font-semibold text-white truncate">
                    {item.name}
                  </h2>
                  <div className="flex items-center text-xs sm:text-sm text-gray-300 mt-1">
                    <FaPlay className="w-2.5 h-2.5 mr-1 opacity-70 flex-shrink-0" />
                    <span className="truncate">Video • The goat of music</span>
                  </div>
                </div>
              </div>

              {/* Image section */}
              <div className="relative w-full mb-3 transition-transform duration-500 ease-out group-hover:-translate-y-2 z-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 sm:h-40 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Description */}
              <div className="flex-1 w-full text-white text-xs sm:text-sm">
                <p className="font-semibold text-gray-200 mb-2">
                  Oct 10 • 52 min 53 sec
                </p>
                <p className="text-gray-400 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quibusdam itaque commodi ea. Molestiae, quas.
                </p>
              </div>

              {/* Play button */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20">
                <button className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out bg-green-500 hover:bg-green-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg">
                  <FaPlay className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DisplayPodcast;
