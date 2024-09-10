import PropTypes from "prop-types";

const MobileCategoryCard = ({ categories }) => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 p-4">
      {categories.map((category) => (
        <div key={category.name} className="flex flex-col items-center">
          <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gray-800 text-white rounded-full">
            <div className="text-xl md:text-3xl">{category.icon}</div>
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
      name: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
    })
  ).isRequired,
};

export default MobileCategoryCard;
