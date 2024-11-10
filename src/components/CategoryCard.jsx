import PropTypes from "prop-types";
import GlobalIcon from "./../assets/constants/GlobalIcons";

const Category = ({ icon, title, items }) => {
  return (
    <div className="border border-gray-300">
      <div className="flex items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center space-x-2">
          <GlobalIcon icon={icon || "defaultIcon"} className="h-6 w-6" />
          <h3 className="text-lg font-semibold">{title}</h3>
          {console.log(icon, title)}
        </div>
      </div>
      <ul className="bg-displaybg text-white">
        {items.map((item) => (
          <li key={item.id} className="p-2 border-t border-gray-700">
            <a
              href={
                item.id === "hot-deals"
                  ? `products/${item.category}/`
                  : `/products/${title}/${item.name}`
              }
              aria-label={`Go to ${item.name}`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

Category.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Category;
