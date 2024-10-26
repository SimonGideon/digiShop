import PropTypes from "prop-types";
import GlobalIcon from "./../assets/constants/GlobalIcons"; // Ensure this is your global icon component

const MobileCategoryCard = ({ categories, onCategoryClick }) => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 gap-5 p-3">
      {categories.map((category) => (
        <div
          key={category.name}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => onCategoryClick(category)}
        >
          <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-displaybg text-white rounded-full">
            <div className="text-xl md:text-3xl">
              {category.name === "Hot Deals" ? (
                <GlobalIcon icon="hotDeal" className="h-6 w-6" />
              ) : (
                <GlobalIcon
                  icon={category.icon || "defalutIcon"}
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
      name: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      items: PropTypes.array.isRequired,
    })
  ).isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

export default MobileCategoryCard;
