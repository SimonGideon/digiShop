import PropTypes from "prop-types";

const Product = ({ product }) => {
  return (
    <div className="border p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-3/4 h-50 object-cover mb-2"
      />
      <div className="text-lg font-semibold">{product.title}</div>
      <div className="text-gray-500 mb-2">Ksh {product.price}</div>
      <div className="text-yellow-400">
        {Array.from({ length: Math.floor(product.rating.rate) }, (_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
    }),
  }),
};

export default Product;
