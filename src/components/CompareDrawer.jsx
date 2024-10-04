import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faXmark } from "@fortawesome/free-solid-svg-icons";
import FeatherIcon from "feather-icons-react";
import "./../assets/Styles/Drawer.css";

const CompareDrawer = ({ isOpen, onClose, items, removeItem }) => {
  const handleCompareClick = () => {
    if (items.length > 0) {
      window.location.href = "/products/compare";
    }
  };

  return (
    <CSSTransition in={isOpen} timeout={300} classNames="drawer" unmountOnExit>
      <div className="fixed inset-y-0 right-0 bg-white shadow-lg z-50 transform w-full sm:w-96">
        <div className="p-4 bg-white flex justify-between items-center text-orange-500 shadow-lg">
          <h2 className="text-lg font-bold">Compare items</h2>
          <button onClick={onClose} aria-label="Close drawer">
            <FontAwesomeIcon icon={faXmark} className="h-6 w-6 text-black" />
          </button>
        </div>
        <div className="p-4 space-y-4 overflow-y-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center border rounded-lg p-2 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 object-cover rounded-md"
              />
              <div className="ml-3 flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-green-600">{item.price}</p>
              </div>
              <button
                onClick={() => removeItem(item)}
                className="ml-2"
                aria-label={`Remove ${item.name}`}
              >
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="h-5 w-5 text-red-500"
                />
              </button>
            </div>
          ))}
          {items.length === 0 && (
            <p className="text-center text-gray-500">No items to compare</p>
          )}
        </div>
        <div className="bg-gray-100 flex justify-center mt-10">
          <button
            onClick={handleCompareClick}
            className="w-4/5 bg-green-500 text-white px-6 py-2 rounded-[20px] flex items-center justify-center disabled:bg-gray-300"
            disabled={items.length < 2}
          >
            <span className="mr-3">COMPARE</span>
            <FeatherIcon icon="arrow-right-circle" />
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

// PropTypes validation
CompareDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      image: PropTypes.string,
    })
  ).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CompareDrawer;
