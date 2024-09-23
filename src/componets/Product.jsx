import { Heart, Shuffle } from "feather-icons-react";
import { useDispatch } from "react-redux";
import { addToWishlist } from "./../redux/wishlistSlice";
import { addToCompare } from "./../redux/compareSlice";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRedirect = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      className="border p-4 flex flex-col bg-white cursor-pointer"
      onClick={() => handleRedirect(product.id)}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover mb-2"
      />
      <div className="flex flex-col w-full">
        <div className="text-sm truncate-lines font-semibold text-left mb-1 px-4">
          {product.title}
        </div>
        <div className="flex flex-col px-4 mb-2">
          <div className="flex items-center justify-between">
            <div className="text-sm text-[#ff823a] font-bold bg-slate-200 p-1 px-2 rounded-[5px] whitespace-nowrap">
              Ksh {product.price.toLocaleString()}
            </div>
            <div className="text-sm text-green-500">↓ 24%</div>
          </div>
          <div className="flex mt-2">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={`${
                  i < Math.floor(product.rating.rate)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex space-x-2 justify-end items-center text-gray-400 w-full px-4">
        <Heart
          aria-label="Add to wishlist"
          className="hover:text-navbg cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToWishlist(product));
          }}
        />
        <Shuffle
          aria-label="Add to compare"
          className="hover:text-navbg cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToCompare(product));
          }}
        />
      </div>
    </div>
  );
};
import PropTypes from "prop-types";

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Product;
