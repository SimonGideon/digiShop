/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { NewCategory, Modal, NewBrand } from "./../../components";
import { PlusCircle } from "feather-icons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import {
  fetchCategories,
  fetchBrands,
  fetchTags,
} from "../../redux/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const NewProduct = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [colors, setColors] = useState([]);
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [stock, setStock] = useState(0);
  const [specifications, setSpecifications] = useState([
    { tag: "", detail: "" },
  ]);
  const [images, setImages] = useState([]);

  const showToast = (message, type) => {
    console.log("Toast Triggered:", message, type);
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    }
  };

  // ===============>  Modal Logic
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const switchModal = (status) => {
    setModalOpen(status);
  };

  const openModalFor = (component, title, e) => {
    e.preventDefault();
    setModalContent(component);
    setModalTitle(title);
    toggleModal();
  };
  // ===============>  Modal Logic Ends

  // Categories
  const dispatch = useDispatch();

  const availableCategories = useSelector(
    (state) => state.adminData.categories.data
  );

  useEffect(() => {
    if (availableCategories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, availableCategories]);

  // Brands
  const brands = useSelector((state) => state.adminData.brands.data);

  useEffect(() => {
    if (brands.length === 0) {
      dispatch(fetchBrands());
    }
  }, [dispatch, brands]);

  ////////////fecth tags
  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);
  const tagsItems = useSelector((state) => state.adminData.tags.data);

  const addSpecification = () => {
    setSpecifications([...specifications, { tag: "", detail: "" }]);
  };

  const handleFileUpload = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      productName,
      category,
      brand,
      colors,
      price,
      discountPrice,
      stock,
      specifications,
      images,
    };
    console.log(productData);
    // handle form submission here (e.g., via an API call)
  };

  // Initialize a state for tag-description sets
  const [tagDescriptionSets, setTagDescriptionSets] = useState([
    { tags: [], inputValue: "", description: "" },
  ]);

  const [filteredOptions, setFilteredOptions] = useState(
    tagsItems.map((tag) => ({
      value: tag.id,
      label: tag.name,
      description: tag.description,
    }))
  );

  useEffect(() => {
    setFilteredOptions(
      tagsItems.map((tag) => ({
        value: tag.id,
        label: tag.name,
        description: tag.description,
      }))
    );
  }, [tagsItems]);

  // Handle change for individual tag sets
  const handleTagChange = (index, selectedTags) => {
    const newSets = [...tagDescriptionSets];
    newSets[index].tags = selectedTags || [];
    setTagDescriptionSets(newSets);
  };

  // Handle change for individual description inputs
  const handleDescriptionChange = (index, value) => {
    const newSets = [...tagDescriptionSets];
    newSets[index].description = value;
    setTagDescriptionSets(newSets);
  };

  // Add new tag-description set
  const addTagDescriptionSet = () => {
    setTagDescriptionSets([
      ...tagDescriptionSets,
      { tags: [], inputValue: "", description: "" },
    ]);
  };

  // Delete tag-description set
  const deleteTagDescriptionSet = (index) => {
    if (tagDescriptionSets.length > 1) {
      const newSets = tagDescriptionSets.filter((_, i) => i !== index);
      setTagDescriptionSets(newSets);
    }
  };

  // Transform availableCategories to the format required by react-select
  const categoryOptions = availableCategories.map((cat) => ({
    value: cat.id,
    label: cat.name,
  }));

  // Transform brands to the format required by react-select
  const brandOptions = brands.map((brand) => ({
    value: brand.id,
    label: brand.name,
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4 flex gap-3">
          {/* Category */}
          <div className="flex flex-col justify-between w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <div className="flex w-full gap-5">
              <Select
                className="mt-1 w-full"
                options={categoryOptions}
                value={
                  categoryOptions.find((option) => option.value === category) ||
                  null
                }
                onChange={(selectedOption) =>
                  setCategory(selectedOption ? selectedOption.value : "")
                }
                isClearable
                placeholder="Select Category"
                required
              />
              <ToastContainer />
              <div className="flex items-center">
                <button
                  className="bg-blue-500 text-white px-3 py-2 rounded-md shadow text-nowrap flex gap-1"
                  onClick={(e) =>
                    openModalFor(
                      <NewCategory
                        showToast={showToast}
                        closeModal={(start) => switchModal(start)}
                      />,

                      "Add New Category",
                      e
                    )
                  }
                >
                  <PlusCircle className="text-white w-6 h-6" />
                  ADD
                </button>
              </div>
            </div>
          </div>

          {/* Brand */}
          <div className="flex flex-col justify-between w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Brand
            </label>
            <div className="flex w-full gap-5">
              <Select
                className="mt-1 w-full"
                options={brandOptions}
                value={
                  brandOptions.find((option) => option.value === brand) || null
                }
                onChange={(selectedOption) =>
                  setBrand(selectedOption ? selectedOption.value : "")
                }
                isClearable
                placeholder="Select Brand"
                required
              />
              <div className="flex items-center">
                <button
                  className="bg-blue-500 text-white px-3 py-2 rounded-md shadow text-nowrap flex gap-1"
                  onClick={(e) =>
                    openModalFor(
                      <NewBrand
                        showToast={showToast}
                        closeModal={(start) => switchModal(start)}
                      />,
                      "Add New Brand",
                      e
                    )
                  }
                >
                  <PlusCircle className="text-white w-6 h-6" />
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>

        <fieldset className="border border-gray-300 rounded-md p-4 mb-4">
          <legend className="text-sm font-medium text-gray-700">
            Descriptions
          </legend>
          {tagDescriptionSets.map((set, index) => (
            <div key={index} className="mb-4 flex justify-between gap-5">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  Tags
                </label>
                <CreatableSelect
                  options={filteredOptions}
                  value={set.tags}
                  onChange={(selectedTags) =>
                    handleTagChange(index, selectedTags)
                  }
                  inputValue={set.inputValue}
                  onInputChange={(inputValue) => {
                    const newSets = [...tagDescriptionSets];
                    newSets[index].inputValue = inputValue;
                    setTagDescriptionSets(newSets);
                  }}
                  className="mt-1"
                  isClearable
                  isMulti // Ensures multiple tags can be selected
                  placeholder="Select or add tags..."
                  onCreateOption={(inputValue) => {
                    if (!inputValue.trim()) return;

                    const newTag = { label: inputValue, value: inputValue };
                    setFilteredOptions((prevOptions) => [
                      ...prevOptions,
                      newTag,
                    ]); // Append new tag to options
                    handleTagChange(index, [...set.tags, newTag]); // Add new tag to selected tags
                  }}
                />
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  value={set.description}
                  onChange={(e) =>
                    handleDescriptionChange(index, e.target.value)
                  }
                  placeholder="Enter description..."
                  required
                />
              </div>

              {/* Delete button, visible if there are more than one item */}
              {tagDescriptionSets.length > 1 && (
                <button
                  type="button"
                  onClick={() => deleteTagDescriptionSet(index)}
                  className="mt-7 bg-red-500 text-white px-2 py-1 rounded-md shadow"
                >
                  <FontAwesomeIcon icon={faTrashAlt} className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            className="bg-blue-500 text-white px-3 rounded-md shadow flex gap-1 py-2"
            onClick={addTagDescriptionSet}
          >
            <PlusCircle className="text-white w-6 h-6" />
            ADD
          </button>
        </fieldset>

        {/* Price and Discount */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price (KSH)
            </label>
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Discount Price (KSH)
            </label>
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              value={discountPrice}
              onChange={(e) => setDiscountPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Stock */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Stock
          </label>
          <input
            type="number"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>

        <fieldset className="border border-gray-300 rounded-md mb-4 p-4">
          <legend className="text-sm font-medium text-gray-700">
            Specifications
          </legend>
          {specifications.map((spec, index) => (
            <div key={index} className="mb-4 flex gap-4 items-center">
              <div className="flex flex-col w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specification
                </label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  placeholder="Specification Tag"
                  value={spec.tag}
                  onChange={(e) => {
                    const newSpecs = [...specifications];
                    newSpecs[index].tag = e.target.value;
                    setSpecifications(newSpecs);
                  }}
                  required
                />
              </div>

              <div className="flex flex-col w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Details
                </label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  placeholder="Specification Detail"
                  value={spec.detail}
                  onChange={(e) => {
                    const newSpecs = [...specifications];
                    newSpecs[index].detail = e.target.value;
                    setSpecifications(newSpecs);
                  }}
                  required
                />
              </div>

              {/* Delete button, visible if there are more than one item */}
              {specifications.length > 1 && (
                <button
                  type="button"
                  className="bg-red-500 text-white px-2 mt-6 py-1 rounded-md shadow"
                  onClick={() => {
                    const newSpecs = specifications.filter(
                      (_, i) => i !== index
                    );
                    setSpecifications(newSpecs);
                  }}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              )}
            </div>
          ))}

          {/* Add Specification Button */}
          <button
            type="button"
            className="mb-4 bg-blue-500 text-white px-3 py-2 rounded-md shadow flex gap-2"
            onClick={addSpecification}
          >
            <PlusCircle className="text-white w-6 h-6" />
            ADD
          </button>
        </fieldset>

        {/* Images */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Upload Images
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            onChange={handleFileUpload}
          />
        </div>
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md shadow"
          >
            Save Product
          </button>
        </div>
      </form>

      {/* Modal */}
      {modalOpen && (
        <Modal
          closeModal={toggleModal}
          isOpen={modalOpen}
          title={modalTitle}
          content={modalContent}
        />
      )}
    </div>
  );
};

export default NewProduct;
