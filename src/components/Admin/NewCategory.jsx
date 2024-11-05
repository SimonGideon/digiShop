import { useState } from "react";
import Select from "react-select";
import { icons } from "../../assets/constants/GlobalIcons";
import { useDispatch } from "react-redux";
import { postCategory, fetchCategories } from "../../redux/adminSlice";
import PropTypes from "prop-types";

const NewCategory = ({ showToast, closeModal }) => {
  const dispatch = useDispatch();
  const [newCategory, setNewCategory] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);

  const iconOptions = icons.map((icon) => ({
    value: icon,
    label: icon.name,
  }));

  const handleCategorySubmission = async () => {
    const categoryData = {
      name: newCategory,
      ico: selectedIcon ? selectedIcon.value.var : "faPlug",
    };

    try {
      await dispatch(postCategory(categoryData)).unwrap();
      showToast("Category added successfully!", "success");
      dispatch(fetchCategories());
      closeModal(false);
    } catch (error) {
      const errorMessage =
        error || "Failed to add category due to an unknown error.";
      showToast(`${errorMessage}`, "error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCategorySubmission();
  };

  return (
    <form className="max-w-lg" onSubmit={handleSubmit}>
      <div>
        <div className="flex-col md:flex">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 mb-4"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Enter category name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category Icon
            </label>
            <Select
              className="mt-1 mb-4"
              options={iconOptions}
              value={selectedIcon}
              onChange={setSelectedIcon}
              placeholder="Select category icon"
              isClearable
              menuPortalTarget={document.body}
              styles={{
                menuPortal: (base) => ({ ...base, zIndex: 9999 }),
              }}
            />
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md shadow"
          >
            Add Category
          </button>
        </div>
      </div>
    </form>
  );
};

NewCategory.propTypes = {
  showToast: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default NewCategory;
