import { useState } from "react";
import PropTypes from "prop-types";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify's toast function
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const ImageUpload = ({ setImageArrayObj }) => {
  const [mainImage, setMainImage] = useState(null);
  const [thumbnail1, setThumbnail1] = useState(null);
  const [thumbnail2, setThumbnail2] = useState(null);

  const MAX_FILE_SIZE = 2 * 1024 * 1024;
  const ALLOWED_FORMATS = ["image/jpeg", "image/png", "image/webp"];
  const MAX_DIMENSIONS = { width: 2000, height: 2000 };

  const validateImage = (file) => {
    if (file.size > MAX_FILE_SIZE) {
      return "File is too large. Maximum size is 2MB.";
    }

    if (!ALLOWED_FORMATS.includes(file.type)) {
      return "Invalid file format. Only JPG, PNG, and WebP are allowed.";
    }

    const img = new Image();
    const promise = new Promise((resolve, reject) => {
      img.onload = () => {
        if (
          img.width > MAX_DIMENSIONS.width ||
          img.height > MAX_DIMENSIONS.height
        ) {
          reject(
            "Image dimensions are too large. Maximum allowed dimensions are 2000x2000px."
          );
        } else {
          resolve();
        }
      };
      img.onerror = () => reject("Invalid image file.");
    });

    const reader = new FileReader();
    reader.onloadend = () => {
      img.src = reader.result;
    };
    reader.readAsDataURL(file);

    return promise;
  };

  const handleImageUpload = async (e, setImage, imageType) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      await validateImage(file);

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
      reader.readAsDataURL(file);
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className="mb-4">
      <fieldset className="border border-gray-300 rounded-md p-4">
        <legend className="text-sm font-medium text-gray-700">
          Upload Images
        </legend>
        <p className="text-xs text-gray-500 mt-2">
          Maximum file size: 2MB, Allowed formats: JPG, PNG, WebP, Maximum
          dimensions: 2000x2000px
          <span className="block mt-2 text-red-500">
            *Please upload images with the recommended dimensions for better
            quality.
          </span>
        </p>
        <div className="flex flex-col md:flex-row md:space-x-4 mt-4">
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
              <div className="mt-4">
                <img
                  src={mainImage}
                  alt="Main Preview"
                  className="w-[200px] h-[200px] object-cover rounded-md shadow-md border-2 border-gray-200"
                />
              </div>
            )}
          </div>

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
              <div className="mt-4">
                <img
                  src={thumbnail1}
                  alt="Thumbnail 1 Preview"
                  className="w-[200px] h-[200px] object-cover rounded-md shadow-md border-2 border-gray-200"
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
              <div className="mt-4">
                <img
                  src={thumbnail2}
                  alt="Thumbnail 2 Preview"
                  className="w-[200px] h-[200px] object-cover rounded-md shadow-md border-2 border-gray-200"
                />
              </div>
            )}
          </div>
        </div>
      </fieldset>

      {/* Toastify Toast Container */}
      <ToastContainer />
    </div>
  );
};

ImageUpload.propTypes = {
  setImageArrayObj: PropTypes.func.isRequired,
};

export default ImageUpload;
