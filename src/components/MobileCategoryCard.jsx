import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons, faFire } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const MobileCategoryCard = ({ categories, onCategoryClick }) => {
  const [icons, setIcons] = useState({});

  useEffect(() => {
    const loadIcons = async () => {
      const loadedIcons = {};
      for (const category of categories) {
        if (category.name !== "Hot Deals") {
          // Check if the icon is defined
          if (category.icon) {
            try {
              const icon = await import(
                `@fortawesome/free-solid-svg-icons/${category.icon}`
              );
              loadedIcons[category.name] = icon.default;
            } catch (error) {
              console.error(`Icon not found: ${category.icon}`, error);
              loadedIcons[category.name] = faIcons; // Fallback icon
            }
          } else {
            // If icon is undefined, use a fallback icon
            loadedIcons[category.name] = faIcons;
          }
        }
      }
      setIcons(loadedIcons);
    };

    loadIcons();
  }, [categories]);

  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 gap-5 p-3">
      {categories.map((category) => (
        <div
          key={category.id} // Use a unique identifier if available
          className="flex flex-col items-center cursor-pointer"
          onClick={() => onCategoryClick(category)}
        >
          <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-displaybg text-white rounded-full">
            <div className="text-xl md:text-3xl">
              {category.name === "Hot Deals" ? (
                <FontAwesomeIcon icon={faFire} className="h-6 w-6" />
              ) : (
                <FontAwesomeIcon
                  icon={icons[category.name] || faIcons} // Use loaded icon or fallback
                  className="h-6 w-6"
                />
              )}
            </div>
          </div>
          <div className="mt-2 text-xs sm:text-sm md:text-base text-center">
            {category.name}
          </div>
        </div>
      ))}
    </div>
  );
};

MobileCategoryCard.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Ensure there's a unique identifier
      name: PropTypes.string.isRequired,
      icon: PropTypes.string, // Assuming this can be null or undefined
      items: PropTypes.array.isRequired,
    })
  ).isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

export default MobileCategoryCard;
