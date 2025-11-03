import React from "react";

const ProfileCard = () => {
  return (
    <div className="bg-neutral-900 text-white rounded-lg p-6 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">Spotify Free</h2>
      </div>
      <div className="flex gap-3">
        <button className="bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-md text-sm">
          Tìm hiểu các gói
        </button>
        <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 px-4 py-2 rounded-md text-sm font-semibold">
          Dùng Premium
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
