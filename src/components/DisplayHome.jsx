import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from "./Footer";

const DisplayHome = () => {
  const albumsScrollRef = useRef(null);
  const songsScrollRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        ref.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="relative group">
          <div
            className="flex overflow-auto scroll-smooth"
            ref={albumsScrollRef}
          >
            {albumsData.map((item, index) => (
              <AlbumItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            ))}
          </div>
          <button
            onClick={() => scroll(albumsScrollRef, "left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(albumsScrollRef, "right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today&apos;s biggest hits</h1>
        <div className="relative group">
          <div
            className="flex overflow-auto scroll-smooth"
            ref={songsScrollRef}
          >
            {songsData.map((item, index) => (
              <SongItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            ))}
          </div>
          <button
            onClick={() => scroll(songsScrollRef, "left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(songsScrollRef, "right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DisplayHome;
