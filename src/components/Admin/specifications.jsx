import { useState } from "react";
import PropTypes from "prop-types";
import { PlusCircle } from "feather-icons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Specifications = ({ setSpecifications }) => {
  const [specifications, setLocalSpecifications] = useState([
    { name: "", value: "" },
  ]);

  const updateSpecifications = (newSpecs) => {
    setLocalSpecifications(newSpecs);
    setSpecifications(newSpecs);
  };

  const addSpecification = () => {
    const newSpecs = [...specifications, { name: "", value: "" }];
    updateSpecifications(newSpecs);
  };

  const handleInputChange = (index, field, value) => {
    const newSpecs = [...specifications];
    newSpecs[index][field] = value;
    updateSpecifications(newSpecs);
  };

  const removeSpecification = (index) => {
    const newSpecs = specifications.filter((_, i) => i !== index);
    updateSpecifications(newSpecs);
  };

  return (
    <div>
      <fieldset className="border border-gray-300 rounded-md mb-4 p-4">
        <legend className="text-sm font-medium text-gray-700">
          Specifications
        </legend>

        {specifications.map((spec, index) => (
          <div key={index} className="mb-4 flex gap-4 items-center">
            <div className="flex flex-col w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specification Tag
              </label>
              <input
                type="text"
                placeholder="Specification Tag"
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                value={spec.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
                required
              />
            </div>

            <div className="flex flex-col w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specification Detail
              </label>
              <input
                type="text"
                placeholder="Specification Detail"
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                value={spec.value}
                onChange={(e) =>
                  handleInputChange(index, "value", e.target.value)
                }
                required
              />
            </div>

            {specifications.length > 1 && (
              <button
                type="button"
                className="bg-red-500 text-white px-2 mt-6 py-1 rounded-md shadow"
                onClick={() => removeSpecification(index)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className="mb-4 bg-blue-500 text-white px-3 py-2 rounded-md shadow flex gap-2"
          onClick={addSpecification}
        >
          <PlusCircle className="text-white w-6 h-6" />
          ADD
        </button>
      </fieldset>
    </div>
  );
};

Specifications.propTypes = {
  setSpecifications: PropTypes.func.isRequired,
};

export default Specifications;
