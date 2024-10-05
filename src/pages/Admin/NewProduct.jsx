/* eslint-disable react/prop-types */
import { useState } from "react";
import { NewCategory, Modal, NewBrand } from "./../../components";
import { PlusCircle } from "feather-icons-react";
import { availableTags } from "./../../assets/constants/assetData";

import Select from "react-select";

const NewProduct = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [descriptionTags, setDescriptionTags] = useState([]);
  const [colors, setColors] = useState([]);
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [stock, setStock] = useState(0);
  const [specifications, setSpecifications] = useState([
    { tag: "", detail: "" },
  ]);

  const [images, setImages] = useState([]);

  //   ===============> Dorop down logic

  const [selectedTags, setSelectedTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (selectedOptions) => {
    setSelectedTags(selectedOptions || []);
  };

  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  };

  const handleCreate = () => {
    const newTag = { value: inputValue, label: inputValue };
    availableTags.push(newTag); // Add new tag to the available tags
    setSelectedTags((prevTags) => [...prevTags, newTag]);
    setInputValue("");
  };

  const filteredOptions = availableTags.filter((tag) =>
    tag.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  // ==================>   dropdown ends logic

  //===============>   modal logic
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const openModalFor = (component, title, e) => {
    e.preventDefault();
    setModalContent(component);
    setModalTitle(title);
    toggleModal();
  };
  // ================>  modal logic ends here

  // Categories and Brands
  const categories = [
    "Smartphone",
    "Phone Accessories",
    "TVs",
    "Audio",
    "Kitchen Appliances",
    "Home Appliances",
    "Camera and Accessories",
    "Computers Laptops",
    "TV accessories",
  ];
  const brands = ["Samsung", "Techno", "Von", "Hisense", "Infinix", "Toyota"];

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
      descriptionTags,
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

  return (
    <div className=" bg-white p-6 rounded-lg shadow-md">
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
            <div className="flex  w-full gap-5">
              <select
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Category
                </option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <div className="flex items-center">
                <button
                  className="bg-blue-500 text-white px-3 py-2 rounded-md shadow text-nowrap flex gap-1"
                  onClick={(e) =>
                    openModalFor(<NewCategory />, "Add New Category", e)
                  }
                >
                  <PlusCircle className="text-white w-6 h-6" />
                  ADD
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Brand
            </label>
            <div className="flex w-full gap-5">
              <select
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Brand
                </option>
                {brands.map((brandName) => (
                  <option key={brandName} value={brandName}>
                    {brandName}
                  </option>
                ))}
              </select>
              <div className="flex items-center">
                <button
                  className="bg-blue-500 text-white px-3 py-2 rounded-md shadow text-nowrap flex gap-1"
                  onClick={(e) =>
                    openModalFor(<NewBrand />, "Add New Brand", e)
                  }
                >
                  <PlusCircle className="text-white w-6 h-6" />
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Price and Discount Price */}
        <div className="mb-4 grid grid-cols-2 gap-5">
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
            Number of Items in Stock
          </label>
          <input
            type="number"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <fieldset className="border border-gray-300 rounded-md p-4">
            <legend className="text-lg font-semibold text-gray-700">
              Description
            </legend>

            {/* Description Tags */}
            <div className="mb-4 flex justify-between gap-5">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  Tags
                </label>
                <Select
                  options={filteredOptions}
                  value={selectedTags}
                  onChange={handleChange}
                  inputValue={inputValue}
                  onInputChange={handleInputChange}
                  className="mt-1"
                  isClearable
                  placeholder="Select or add tags..."
                  // Customizing the dropdown for adding new tags
                  components={{
                    DropdownIndicator: null,
                    Menu: (props) => (
                      <div>
                        <div
                          {...props.innerProps}
                          className="react-select__menu"
                        >
                          {props.children}
                          {filteredOptions.length === 0 && inputValue && (
                            <button
                              type="button"
                              onClick={handleCreate}
                              className="w-full text-left px-2 py-1 text-blue-600 hover:bg-gray-200"
                            >
                              Add &quot;{inputValue}&quot;
                            </button>
                          )}
                        </div>
                      </div>
                    ),
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
                  value={descriptionTags.join(", ")}
                  onChange={(e) =>
                    setDescriptionTags(e.target.value.split(","))
                  }
                />
              </div>
            </div>

            {/* Additional Description Fields */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Additional Description
              </label>
              <textarea
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                rows="3"
              />
            </div>
            {/* Add more fields as needed */}
          </fieldset>
        </div>

        {/* Colors */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Colors (Comma Separated)
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            value={colors.join(", ")}
            onChange={(e) => setColors(e.target.value.split(","))}
          />
        </div>

        {/* Product Images */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Upload Thumbnails (Max 5 MB)
          </label>
          <input
            type="file"
            multiple
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            onChange={handleFileUpload}
            accept="image/*"
          />
        </div>

        {/* Specifications */}
        <div className="mb-4">
          <h4 className="block text-sm font-medium text-gray-700">
            Specifications
          </h4>
          {specifications.map((spec, index) => (
            <div key={index} className="flex space-x-4 mb-2">
              <input
                type="text"
                placeholder="Tag"
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                value={spec.tag}
                onChange={(e) => {
                  const updatedSpecs = [...specifications];
                  updatedSpecs[index].tag = e.target.value;
                  setSpecifications(updatedSpecs);
                }}
              />
              <input
                type="text"
                placeholder="Detail"
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                value={spec.detail}
                onChange={(e) => {
                  const updatedSpecs = [...specifications];
                  updatedSpecs[index].detail = e.target.value;
                  setSpecifications(updatedSpecs);
                }}
              />
            </div>
          ))}
          <button
            type="button"
            className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md shadow"
            onClick={addSpecification}
          >
            Add Specification
          </button>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md shadow"
          >
            Add Product
          </button>
        </div>
      </form>

      {/* modal */}
      <Modal isOpen={modalOpen} closeModal={toggleModal} title={modalTitle}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default NewProduct;
