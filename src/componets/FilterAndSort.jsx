import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

const SortOptions = ({ onSortChange, sortOptions }) => {
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  const handleSortChange = (event) => {
    const newSort = event.target.value;
    setSelectedSort(newSort);
    onSortChange(newSort);
  };

  return (
    <div className="pt-5 px-10">
      <div className="flex items-center justify-center lg:justify-end space-x-2 sm:space-x-4">
        <div className="relative">
          <select
            id="sort"
            value={selectedSort}
            onChange={handleSortChange}
            className="appearance-none p-1 px-3 border border-gray-300 rounded-[5px] bg-white flex items-center pr-10 focus:outline-none focus:ring-0 transition-all duration-300 ease-in-out"
          >
            {sortOptions.map((option) => (
              <option
                key={option}
                value={option}
                className="hover:bg-red-100 transition-colors duration-200 "
              >
                {option}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <FontAwesomeIcon icon={faSort} className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

SortOptions.propTypes = {
  onSortChange: PropTypes.func.isRequired,
  sortOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SortOptions;
