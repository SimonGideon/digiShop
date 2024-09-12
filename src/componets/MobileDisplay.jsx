import { MobileCategoryCard, Category } from "./";
import { useState, useRef, useEffect } from "react";
import { categoriesItems } from "./../assets/constants";

const MobileDisplay = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const sidebarRef = useRef(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCloseSidebar = () => {
    setSelectedCategory(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        handleCloseSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="p-4">
        <MobileCategoryCard
          categories={categoriesItems}
          onCategoryClick={handleCategoryClick}
        />
      </div>
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 w-80 bg-white border border-gray-300 h-full z-50 transform transition-transform duration-300 ease-in-out ${
          selectedCategory ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={handleCloseSidebar}
          className="absolute top-2 right-2 text-gray-600"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        {selectedCategory && (
          <Category
            icon={selectedCategory.icon}
            title={selectedCategory.name}
            items={selectedCategory.items}
          />
        )}
      </div>
    </div>
  );
};

export default MobileDisplay;
