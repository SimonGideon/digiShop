import { Category } from ".";
import PropTypes from "prop-types";
import { cartegory } from "../assets/constants/assetData";

const CategoriesGrid = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
      {categories.map((category) => (
        <Category
          key={cartegory.id}
          id={category.id}
          icon={category.icon}
          title={category.name}
          items={category.items}
        />
      ))}
    </div>
  );
};
CategoriesGrid.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired,
    })
  ).isRequired,
};

export default CategoriesGrid;
