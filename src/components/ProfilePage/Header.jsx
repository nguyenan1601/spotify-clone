import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-black text-white border-b border-neutral-800">
      <div className="flex items-center gap-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" className="w-6 h-6" />
        <span className="font-semibold">Spotify</span>
      </div>

      <nav className="flex items-center gap-6 text-sm">
        <a href="#" className="hover:text-green-500">
          Premium
        </a>
        <a href="#" className="hover:text-green-500">
          Hỗ trợ
        </a>
        <a href="#" className="hover:text-green-500">
          Tải xuống
        </a>
        <div className="w-px h-4 bg-neutral-600"></div>
        <a href="#" className="hover:text-green-500">
          Hồ sơ
        </a>
      </nav>
    </header>
  );
};

export default Header;
