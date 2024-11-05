import { useState } from "react";
import PropTypes from "prop-types";

const ImageUpload = ({ setImageArrayObj }) => {
  const [mainImage, setMainImage] = useState(null);
  const [thumbnail1, setThumbnail1] = useState(null);
  const [thumbnail2, setThumbnail2] = useState(null);

  const handleImageUpload = (e, setImage, imageType) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      setImageArrayObj((prevImages) => {
        const newImages = [...prevImages];
        const existingIndex = newImages.findIndex(
          (img) => img.key === imageType
        );
        if (existingIndex !== -1) {
          newImages[existingIndex] = { key: imageType, url: reader.result };
        } else {
          newImages.push({ key: imageType, url: reader.result });
        }
        return newImages;
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4">
      <fieldset className="border border-gray-300 rounded-md p-4">
        <legend className="text-sm font-medium text-gray-700">
          Upload Images
        </legend>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="main-image"
          >
            Main Image
          </label>
          <input
            id="main-image"
            type="file"
            accept="image/*"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-blue-300"
            onChange={(e) => handleImageUpload(e, setMainImage, "mainImage")}
          />
          {mainImage && (
            <div className="mt-2">
              <img
                src={mainImage}
                alt="Main Preview"
                className="w-full max-w-xs h-auto object-cover rounded-md"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="mb-4 flex-1">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="thumbnail-1"
            >
              Thumbnail 1
            </label>
            <input
              id="thumbnail-1"
              type="file"
              accept="image/*"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-blue-300"
              onChange={(e) =>
                handleImageUpload(e, setThumbnail1, "thumbnail1")
              }
            />
            {thumbnail1 && (
              <div className="mt-2">
                <img
                  src={thumbnail1}
                  alt="Thumbnail 1 Preview"
                  className="w-full max-w-xs h-auto object-cover rounded-md"
                />
              </div>
            )}
          </div>

          <div className="mb-4 flex-1">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="thumbnail-2"
            >
              Thumbnail 2
            </label>
            <input
              id="thumbnail-2"
              type="file"
              accept="image/*"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring focus:ring-blue-300"
              onChange={(e) =>
                handleImageUpload(e, setThumbnail2, "thumbnail2")
              }
            />
            {thumbnail2 && (
              <div className="mt-2">
                <img
                  src={thumbnail2}
                  alt="Thumbnail 2 Preview"
                  className="w-full max-w-xs h-auto object-cover rounded-md"
                />
              </div>
            )}
          </div>
        </div>
      </fieldset>
    </div>
  );
};

ImageUpload.propTypes = {
  setImageArrayObj: PropTypes.func.isRequired,
};

export default ImageUpload;
