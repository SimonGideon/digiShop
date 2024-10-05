import { useState } from "react";
import PropTypes from "prop-types";

const NewCategory = () => {
  const [newCategory, setNewCategory] = useState("");

  return (
    <div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          New Category Name
        </label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 mb-4"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Enter category name"
        />
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded-md shadow"
          >
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
};
NewCategory.propTypes = {
  categories: PropTypes.array.isRequired,
  setCategories: PropTypes.func.isRequired,
};

export default NewCategory;
