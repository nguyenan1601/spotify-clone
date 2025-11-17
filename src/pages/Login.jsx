import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212] text-white">
      <div className="flex flex-col items-center w-full max-w-sm px-6">
        {/* Logo */}
        <div className="mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
            alt="Spotify logo"
            className="w-12 h-12 mx-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome back</h1>

        {/* Input */}
        <div className="w-full mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-semibold">
            Email or username
          </label>
          <input
            id="email"
            type="text"
            placeholder="Enter your email or username"
            className="w-full px-4 py-3 rounded-md bg-[#1c1c1c] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
          />
        </div>

        {/* Continue button */}
        <button
          className="w-full bg-[#1DB954] text-black font-semibold py-3 rounded-full hover:scale-105 transition"
          onClick={() => navigate("/")}
        >
          Continue
        </button>

        {/* Divider */}
        <div className="flex items-center w-full my-6">
          <div className="flex-1 h-px bg-gray-600"></div>
          <span className="px-2 text-sm text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-600"></div>
        </div>

        {/* Social buttons */}
        <div className="space-y-3 w-full">
          <button className="relative w-full flex items-center justify-center border border-gray-600 py-3 rounded-full hover:bg-[#1c1c1c] transition-all duration-200 transform hover:scale-105 text-white">
            <i className="fa-solid fa-phone text-lg absolute left-6 text-white transition-transform duration-200 group-hover:scale-110"></i>
            <span className="font-bold">Continue with phone number</span>
          </button>

          <button className="relative w-full flex items-center justify-center border border-gray-600 py-3 rounded-full hover:bg-[#1c1c1c] transition-all duration-200 transform hover:scale-105 text-white">
            <i className="fa-brands fa-google text-[#DB4437] text-lg absolute left-6 transition-transform duration-200 group-hover:scale-110"></i>
            <span className="font-bold">Continue with Google</span>
          </button>

          <button className="relative w-full flex items-center justify-center border border-gray-600 py-3 rounded-full hover:bg-[#1c1c1c] transition-all duration-200 transform hover:scale-105 text-white">
            <i className="fa-brands fa-facebook text-[#1877F2] text-lg absolute left-6 transition-transform duration-200 group-hover:scale-110"></i>
            <span className="font-bold">Continue with Facebook</span>
          </button>

          <button className="relative w-full flex items-center justify-center border border-gray-600 py-3 rounded-full hover:bg-[#1c1c1c] transition-all duration-200 transform hover:scale-105 text-white">
            <i className="fa-brands fa-apple text-lg absolute left-6 transition-transform duration-200 group-hover:scale-110"></i>
            <span className="font-bold">Continue with Apple</span>
          </button>
        </div>
        {/* Footer */}
        <div className="mt-8 w-full text-center text-gray-400 text-sm">
          <p className="mb-4">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-white hover:underline font-medium hover:text-[#1DB954] transition"
            >
              Sign up for Spotify
            </button>
          </p>

          <p className="text-xs text-gray-500 leading-relaxed">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="#"
              className="text-gray-400 hover:text-white hover:underline transition"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-gray-400 hover:text-white hover:underline transition"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
