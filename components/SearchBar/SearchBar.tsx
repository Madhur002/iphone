import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
const SearchBar = () => {
  return (
    <div className="select-none draggable-none text-white cursor-pointer shadow-lg rounded-full px-2 py-1 bg-[#ffffff5d] flex items-center gap-1 backdrop-blur-xl text-[8px]">
      <FaMagnifyingGlass />
      Search
    </div>
  );
};

export default SearchBar;
