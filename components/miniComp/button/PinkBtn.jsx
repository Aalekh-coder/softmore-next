import React from "react";

const PinkBtn = ({ text }) => {
  return (
    <button className="px-3 z-30 py-3 bg-rose-400 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-500 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-lg after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-xl">
      {text ? text : "Hover Me"}
    </button>
  );
};

export default PinkBtn;
