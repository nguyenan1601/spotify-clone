import { Outlet, useLocation, useParams } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { useEffect, useRef } from "react";
import { albumsData } from "../assets/assets";
import DisplayPodcast from "./DisplayPodcast";
import Premium from "./Premium";
import Footer from "./Footer";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const params = useParams();
  const isAlbum = Boolean(params?.id) || location.pathname.includes("/album/");
  const albumId = isAlbum
    ? params?.id ?? location.pathname.split("/").pop()
    : "";
  const bgColor = albumId ? albumsData[Number(albumId)]?.bgColor : null;

  useEffect(() => {
    if (isAlbum && bgColor) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayRef.current.style.background = "#121212";
    }
  }, [isAlbum, albumId, bgColor, location.pathname]);

  return (
    <>
      <div
        ref={displayRef}
        className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
      >
        {/* Render child route content inside the display area */}
        <Outlet />
      </div>
    </>
  );
};

export default Display;
