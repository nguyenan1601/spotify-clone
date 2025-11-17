import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isPodcastPage = location.pathname.includes("/podcast");
  const isHomePage = location.pathname === "/";
  const [openDropdown, setOpenDropdown] = useState(false);

  // Đóng dropdown khi click ra ngoài
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold relative">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="back"
            onClick={() => navigate(-1)}
          />
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="forward"
            onClick={() => navigate(+1)}
          />
        </div>

        <div className="flex items-center gap-4">
          <p
            className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer"
            onClick={() => navigate("/premium")}
          >
            Explore Premium
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Install App
          </p>

          {/* Avatar + Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <p
              className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => setOpenDropdown((prev) => !prev)}
            >
              B
            </p>

            {openDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-[#282828] text-white rounded-xl shadow-lg z-50 py-2">
                <p
                  className="px-4 py-2 hover:bg-[#3a3a3a] cursor-pointer"
                  onClick={() => {
                    setOpenDropdown(false);
                    navigate("/profile");
                  }}
                >
                  Profile
                </p>
                <hr className="border-gray-700 my-1" />
                <p
                  className="px-4 py-2 hover:bg-[#3a3a3a] cursor-pointer"
                  onClick={() => {
                    setOpenDropdown(false);
                    navigate("/login"); // hoặc handleLogout()
                  }}
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center gap-2 mt-4">
        <p
          className={`px-4 py-1 rounded-2xl cursor-pointer ${
            isHomePage ? "bg-white text-black" : "bg-[#242424] text-white"
          }`}
          onClick={() => navigate("/")}
        >
          All
        </p>
        <p className="bg-[#242424] cursor-pointer px-4 py-1 rounded-2xl">
          Music
        </p>
        <p
          className={`px-4 py-1 rounded-2xl cursor-pointer ${
            isPodcastPage ? "bg-white text-black" : "bg-[#242424] text-white"
          }`}
          onClick={() => navigate("/podcasts")}
        >
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;
