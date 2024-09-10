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
      {items.map((item, index) => (
        <li key={index} className="p-2 border-t border-gray-700">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

Category.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default Category;
