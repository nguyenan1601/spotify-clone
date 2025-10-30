import { FaCheck } from "react-icons/fa";
import { useState } from "react";

const ComparisonTable = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      name: "Ad-free music listening",
      free: false,
      premium: true,
      desc: "Enjoy your favorite songs without interruptions from ads.",
    },
    {
      name: "Download songs",
      free: false,
      premium: true,
      desc: "Listen offline by downloading your playlists and albums.",
    },
    {
      name: "Play songs in any order",
      free: false,
      premium: true,
      desc: "Skip, shuffle, or replay any song you want anytime.",
    },
    {
      name: "High quality audio",
      free: false,
      premium: true,
      desc: "Experience music at up to 320kbps for crystal clear sound.",
    },
    {
      name: "Listen with friends in real time",
      free: false,
      premium: true,
      desc: "Sync your listening session with friends instantly.",
    },
    {
      name: "Organize listening queue",
      free: false,
      premium: true,
      desc: "Easily control the next tracks and manage your queue.",
    },
  ];

  return (
    <div className="bg-[#121212] text-white p-8 rounded-xl max-w-4xl mx-auto">
      <div className="grid grid-cols-3 border-b border-gray-700 pb-4">
        <div className="text-xl font-semibold">What you&apos;ll get</div>
        <div className="text-center text-xl font-semibold text-gray-300">
          Spotify&apos;s Free plan
        </div>
        <div className="text-center text-xl font-semibold bg-[#1F1F1F] rounded-md py-2">
          <div className="flex justify-center items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
              alt="Spotify"
              className="w-4 h-4"
            />
            <span>Spotify&apos;s Premium plans</span>
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-700">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index && (
              <div
                className="absolute -top-20 left-1/2 -translate-x-1/2 bg-[#1F1F1F] text-gray-200 text-sm 
                p-4 rounded-lg shadow-lg w-72 transition-all duration-300 ease-out z-20 border border-gray-700"
              >
                {feature.desc}
              </div>
            )}
            <div className="grid grid-cols-3 py-6 items-center text-xl hover:bg-[#1E1E1E] transition">
              <div className="text-gray-100 underline underline-offset-2 decoration-gray-500">
                {feature.name}
              </div>
              <div className="text-center text-gray-400 text-lg">—</div>
              <div className="text-center">
                {feature.premium ? (
                  <div className="flex justify-center">
                    <div className="w-5 h-5 rounded-full border border-white bg-white text-black flex items-center justify-center">
                      <FaCheck size={10} />
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-400 text-lg">—</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;
