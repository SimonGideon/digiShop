import { useState } from "react";
import PropTypes from "prop-types";

const FilterAndSort = ({
  onFilterChange,
  onSortChange,
  filters,
  sortOptions,
}) => {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  const handleFilterChange = (event) => {
    const newFilter = event.target.value;
    setSelectedFilter(newFilter);
    onFilterChange(newFilter);
  };

  const handleSortChange = (event) => {
    const newSort = event.target.value;
    setSelectedSort(newSort);
    onSortChange(newSort);
  };

  return (
    <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <label htmlFor="filter" className="text-sm font-medium text-gray-700">
            Filter:
          </label>
          <select
            id="filter"
            value={selectedFilter}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
          >
            {filters.map((filter) => (
              <option key={filter} value={filter}>
                {filter}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
            Sort By:
          </label>
          <select
            id="sort"
            value={selectedSort}
            onChange={handleSortChange}
            className="p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

FilterAndSort.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterAndSort;
