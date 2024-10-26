import PropTypes from "prop-types";

const Category = ({ icon, title, items }) => (
  <div className="border border-gray-300">
    <div className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center space-x-2">
        {icon}
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

Category.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Assuming `id` is a string; update if needed
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Category;
