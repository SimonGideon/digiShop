import PropTypes from "prop-types";

const FavoriteCard = ({ favorite, onRemove }) => {
  return (
    <div className="grid grid-cols-3 items-center p-4 border-b last:border-b-0">
      <span
        className="text-red-500 cursor-pointer"
        onClick={() => onRemove(favorite)}
      >
        ✖
      </span>
      <div>
        <div className="font-bold">{favorite.name}</div>
        <div className={favorite.inStock ? "text-green-500" : "text-red-500"}>
          {favorite.inStock ? "In Stock" : "Out of Stock"}
        </div>
      </div>
      <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
        {favorite.inStock ? "Add to Cart" : "Read More"}
      </button>
    </div>
  );
};

FavoriteCard.propTypes = {
  favorite: PropTypes.shape({
    name: PropTypes.string.isRequired,
    inStock: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default FavoriteCard;
