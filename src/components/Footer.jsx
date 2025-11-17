import { FaInstagram, FaXTwitter, FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm px-12 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between border-b border-gray-800 pb-10">
          {/* Logo + Links */}
          <div className="flex flex-col md:flex-row gap-16">
            {/* Logo */}
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                alt="Spotify"
                className="w-28 mb-6"
              />
            </div>

            {/* Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {/* Company */}
              <div>
                <h3 className="text-white font-semibold mb-3">COMPANY</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-green-500">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-500">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-500">
                      For the Record
                    </a>
                  </li>
                </ul>
              </div>

              {/* Communities */}
              <div>
                <h3 className="text-white font-semibold mb-3">COMMUNITIES</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-green-500">
                      For Artists
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-500">
                      Developers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-500">
                      Advertising
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-500">
                      Investors
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-500">
                      Vendors
                    </a>
                  </li>
                </ul>
              </div>

              {/* Useful Links */}
              <div>
                <h3 className="text-white font-semibold mb-3">USEFUL LINKS</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-green-500">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-500">
                      Web Player
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-500">
                      Free Mobile App
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-500">
                      Import your music
                    </a>
                  </li>
                </ul>
              </div>

              {/* Spotify Plans */}
              <div>
                <h3 className="text-white font-semibold mb-3">SPOTIFY PLANS</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-green-500">
                      Premium Individual
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-500">
                      Premium Student
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-500">
                      Spotify Free
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-10 md:mt-0">
            <a
              href="#"
              className="bg-[#222] w-10 h-10 hover:bg-[#333] text-white p-3 rounded-full flex items-center"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="bg-[#222] w-10 h-10 hover:bg-[#333] text-white p-3 rounded-full flex items-center"
            >
              <FaXTwitter size={16} />
            </a>
            <a
              href="#"
              className="bg-[#222] w-10 h-10 hover:bg-[#333] text-white p-3 rounded-full flex items-center"
            >
              <FaFacebookF size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 mt-6 space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#" className="hover:text-green-500">
              Legal
            </a>
            <a href="#" className="hover:text-green-500">
              Safety & Privacy Center
            </a>
            <a href="#" className="hover:text-green-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-500">
              Cookies
            </a>
            <a href="#" className="hover:text-green-500">
              About Ads
            </a>
            <a href="#" className="hover:text-green-500">
              Accessibility
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <span className="flex items-center gap-1">
              <span role="img" aria-label="globe">
                🌐
              </span>{" "}
              Vietnam (English)
            </span>
            <span>© 2025 Spotify AB</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
