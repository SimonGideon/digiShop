import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/adminSlice";
import Select from "react-select";

const NewSubCategory = ({ showToast, closeModal }) => {
  const [category, setCategory] = useState(null);
  const [subCategoryName, setSubCategoryName] = useState("");

  const availableCategories = useSelector(
    (state) => state.adminData.categories.data
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categoryOptions = availableCategories.map((cat) => ({
    value: cat.id,
    label: cat.name,
  }));

  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption);
  };

  const handleInputChange = (event) => {
    setSubCategoryName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submission logic here, e.g., dispatch an action to add the subcategory
    console.log("Selected Category:", category);
    console.log("Subcategory Name:", subCategoryName);

    // Reset fields after submission
    setCategory(null);
    setSubCategoryName("");
  };

  return (
    <form className="max-w-lg" onSubmit={handleSubmit}>
      <div>
        <div className="flex-col md:flex">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <Select
              className="mt-1 w-full"
              options={categoryOptions}
              value={category}
              onChange={handleCategoryChange}
              isClearable
              placeholder="Select Category"
              required
              menuPortalTarget={document.body} // Render the menu in the body
              styles={{
                menuPortal: (base) => ({ ...base, zIndex: 9999 }), // Ensure zIndex is high
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sub Category
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 mb-4"
              placeholder="Enter sub category name"
              value={subCategoryName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md shadow"
          >
            Add Sub Category
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewSubCategory;
