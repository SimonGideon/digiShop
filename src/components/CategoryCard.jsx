import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons } from "@fortawesome/free-solid-svg-icons"; // Fallback icon

const Category = ({ icon, title, items }) => {
  const [loadedIcon, setLoadedIcon] = useState(null);

  useEffect(() => {
    const loadIcon = async () => {
      if (icon) {
        try {
          const { default: importedIcon } = await import(
            `@fortawesome/free-solid-svg-icons/${icon}`
          );
          setLoadedIcon(importedIcon);
        } catch (error) {
          console.error(`Icon not found: ${icon}`, error);
          setLoadedIcon(faIcons); // Fallback if icon import fails
        }
      } else {
        setLoadedIcon(faIcons); // Fallback if icon is null or undefined
      }
    };

    loadIcon();
  }, [icon]);

  return (
    <div className="border border-gray-300">
      <div className="flex items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center space-x-2">
          {/* Render the dynamically loaded icon or fallback */}
          {loadedIcon ? (
            <FontAwesomeIcon icon={loadedIcon} className="h-6 w-6" />
          ) : (
            <FontAwesomeIcon icon={faIcons} className="h-6 w-6" /> // Fallback icon
          )}
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
      <ul className="bg-displaybg text-white">
        {items.map((item) => (
          <li key={item.id} className="p-2 border-t border-gray-700">
            <a href="/products" aria-label={`Go to ${item.name}`}>
              {item.name} {/* Render the name property of each item */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

Category.propTypes = {
  icon: PropTypes.string, // Expecting the icon name as a string
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Assuming `id` is a string; update if needed
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Category;
