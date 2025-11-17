import { FaSpotify } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyStudent() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-black text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            className="flex items-center gap-2"
            onClick={() => navigate("/")}
          >
            <FaSpotify size={32} className="text-white" />
            <span className="text-2xl font-bold">Spotify</span>
          </button>

          <nav className="flex items-center gap-8">
            <a href="premium" className="hover:text-gray-300 transition">
              Premium
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Support
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Download
            </a>
            <div className="border-l border-gray-600 pl-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center cursor-pointer hover:border-gray-300 transition">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <button
                  className="hover:text-gray-300 transition flex items-center gap-1"
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div style={{ backgroundColor: "#C4B1D4" }} className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Verify you're a student
          </h1>
          <p className="text-gray-800 text-base font-semibold leading-relaxed">
            First, we need to check you're enrolled at an accredited college or
            university. Not sure if you're eligible?{" "}
            <a href="#" className="underline font-semibold hover:text-gray-700">
              Learn more
            </a>
            .
          </p>
        </div>
      </div>

      <div className=" px-8 py-4">
        <div className="w-full max-w-2xl mx-auto">
          {/* Sheerid Card */}
          <div className="bg-gray-100 rounded-lg px-6 py-8 mb-8">
            <div className="text-center">
              <p className="text-gray-600 text-base">Student verification by</p>
              <svg
                className="w-16 h-16 mx-auto text-gray-400"
                fill="currentColor"
                viewBox="0 0 100 100"
              >
                {/* Sheerid placeholder logo */}
                <text
                  x="50"
                  y="60"
                  textAnchor="middle"
                  fontSize="20"
                  className="fill-gray-500"
                >
                  SheerID
                </text>
              </svg>
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-end">
            <button
              onClick={() => navigate("/")}
              style={{ backgroundColor: "#C4B1D4" }}
              className="hover:opacity-80 disabled:opacity-75 text-black font-bold py-2 px-8 rounded-full transition-all duration-300 text-base"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
