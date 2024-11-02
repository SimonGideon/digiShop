import { useState } from "react";
import PropTypes from "prop-types";
import { postBrand, fetchBrands } from "../../redux/adminSlice";
import { useDispatch } from "react-redux";

const NewBrand = ({ showToast, closeModal }) => {
  const [newBrand, setNewBrand] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleAddBrand = async () => {
    if (!newBrand.trim()) {
      setError("Brand name cannot be empty.");
      return;
    }

    try {
      await dispatch(postBrand({ name: newBrand.trim() })).unwrap();
      setNewBrand("");
      setError("");
      dispatch(fetchBrands());
      showToast("Brand added successfully!", "success");
      closeModal(false);
    } catch (error) {
      console.error("Error adding brand:", error);
      showToast(`Error: ${error}`, "error");
    }
  };

  return (
    <div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Brand Name
        </label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 mb-4"
          value={newBrand}
          onChange={(e) => setNewBrand(e.target.value)}
          placeholder="Enter brand name"
        />
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded-md shadow"
            onClick={handleAddBrand}
          >
            Add Brand
          </button>
        </div>
      </div>
    </div>
  );
};

NewBrand.propTypes = {
  showToast: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default NewBrand;
