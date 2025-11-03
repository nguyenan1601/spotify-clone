import React from "react";

const Section = ({ title, items }) => {
  return (
    <div className="bg-neutral-900 rounded-lg text-white">
      <h3 className="px-6 py-3 font-semibold border-b border-neutral-800">
        {title}
      </h3>
      <ul>
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-center justify-between px-6 py-3 hover:bg-neutral-800 cursor-pointer border-b border-neutral-800 last:border-none"
          >
            <div className="flex items-center gap-3">
              <span className="text-neutral-400">▣</span>
              <span>{item}</span>
            </div>
            <span className="text-neutral-400">{">"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Section;
