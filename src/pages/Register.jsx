import { FaGoogle, FaApple } from "react-icons/fa";

export default function Register() {
  return (
    <div className="bg-[#121212] min-h-screen flex flex-col items-center justify-center text-white">
      {/* Logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
        alt="Spotify"
        className="w-12 mb-8"
      />

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center leading-tight mb-8">
        Sign up to <br /> start listening
      </h1>

      {/* Form */}
      <div className="w-full max-w-sm flex flex-col gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold mb-2 text-gray-300"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="name@domain.com"
            className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-white"
          />
          <p className="text-green-500 text-sm mt-2 hover:underline cursor-pointer">
            Use phone number instead.
          </p>
        </div>

        <button className="w-full bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold py-3 rounded-full transition">
          Next
        </button>

        <div className="flex items-center gap-2 text-gray-400">
          <hr className="flex-grow border-gray-700" />
          <span>or</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        {/* Sign up options */}
        <button className="w-full flex items-center justify-center gap-3 border border-gray-500 rounded-full py-3 hover:border-white transition">
          <FaGoogle className="text-lg" />
          <span className="font-bold text-sm">Sign up with Google</span>
        </button>

        <button className="w-full flex items-center justify-center gap-3 border border-gray-500 rounded-full py-3 hover:border-white transition">
          <FaApple className="text-lg" />
          <span className="font-bold text-sm">Sign up with Apple</span>
        </button>

        <div className="text-center mt-4 text-sm text-gray-400">
          Already have an account?{" "}
          <a href="#" className="text-white font-semibold hover:underline">
            Log in
          </a>
        </div>
      </div>

      {/* Footer text */}
      <div className="text-xs text-gray-500 text-center mt-10 max-w-md">
        This site is protected by reCAPTCHA and the Google{" "}
        <a href="#" className="underline hover:text-gray-300">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="#" className="underline hover:text-gray-300">
          Terms of Service
        </a>{" "}
        apply.
      </div>
    </div>
  );
}
