import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import { FaPlay } from "react-icons/fa";

const DisplayPodcast = () => {
  return (
    <div className="z-10">
      <Navbar />

      <div className="my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albumsData.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl p-4 flex flex-col items-center justify-start hover:bg-[#2a2a2a] transition duration-300 cursor-pointer h-[65vh] group overflow-hidden"
              style={{ backgroundColor: item.bgColor }}
            >
              {/* Header (giữ nguyên khi hover) */}
              <div className="w-full h-[90px] mt-5 mb-6 flex items-start justify-start z-10">
                <div className="flex items-start">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[90px] h-[90px] object-cover rounded-lg mx-3"
                  />
                </div>
                <div className="flex flex-col text-white text-xl leading-none mt-0">
                  <h2 className="text-3xl font-semibold">{item.name}</h2>
                  <div className="flex items-center text-base text-white mt-1">
                    <FaPlay className="w-3 h-3 mr-1 opacity-70" />
                    <span className="mr-1">Video •</span>
                    <span>The goat of music</span>
                  </div>
                </div>
              </div>

              {/* Phần ảnh + mô tả: sẽ dịch lên khi hover */}
              <div className="relative w-full transition-transform duration-500 ease-out group-hover:-translate-y-3 z-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover rounded-lg mb-4 transform transition-transform duration-500 group-hover:scale-[1.02]"
                />

                <div className="w-full mt-12 text-white font-sans font-semibold text-base">
                  <span>Oct 10 • 52 min 53 sec • </span>
                  <span className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam itaque commodi ea inventore praesentium ab ipsa.
                  </span>
                </div>
              </div>

              {/* Nút Play ở đáy của toàn card (xuất hiện khi hover) */}
              <div className="absolute bottom-4 right-4 z-20">
                <button className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out bg-gray-500 hover:bg-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                  <FaPlay className="w-5 h-5 ml-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayPodcast;
