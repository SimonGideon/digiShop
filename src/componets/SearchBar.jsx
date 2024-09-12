import PropTypes from "prop-types";
import { Search } from "feather-icons-react";

const SearchBar = ({ isMobile }) => {
  return (
    <div
      className={`flex items-center bg-white rounded-[100px] h-[2.375rem]  md:w-[50vw] overflow-hidden ${
        isMobile ? "mt-2" : "flex-grow mx-4"
      }`}
    >
      <input
        type="text"
        className="w-full p-1 pl-4 text-gray-700 focus:outline-none"
        placeholder="Search"
      />
      <select className="bg-white text-gray-700 p-2 border-l focus:outline-none">
        <option>All categories</option>
      </select>
      <button className="p-3 bg-red-600 md:bg-white text-white md:text-slate-500">
        <Search />
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  isMobile: PropTypes.bool,
};

export default SearchBar;
