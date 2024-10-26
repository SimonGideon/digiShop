import { Heart, Shuffle } from "feather-icons-react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../redux/wishlistSlice";
import { addToCompare, removeFromCompare } from "../redux/compareSlice";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlist || []);
  const compareList = useSelector((state) => state.compare || []);

  const isInWishlist = wishlist.some((item) => item.id === product.id);
  const isInCompareList = compareList.some((item) => item.id === product.id);

  const handleRedirect = (id) => {
    navigate(`/products/${id}`);
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    if (isInWishlist) {
      dispatch(removeFromWishlist(product));
      toast.success(`Product removed from wishlist!`);
    } else {
      dispatch(addToWishlist(product));
      toast.success(`Product added to wishlist!`);
    }
  };

  const handleCompareClick = (e) => {
    e.stopPropagation();
    if (isInCompareList) {
      dispatch(removeFromCompare(product));
      toast.success(`Product removed from compare list!`);
    } else {
      dispatch(addToCompare(product));
      toast.success(`Product added to compare list!`);
    }
  };

  return (
    <div
      className="border p-4 flex flex-col bg-white cursor-pointer"
      onClick={() => handleRedirect(product.id)}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-2"
      />
      <div className="flex flex-col w-full">
        <div className="text-sm truncate-lines font-semibold text-left mb-1 px-4">
          {product.name}
        </div>
        <div className="flex flex-col px-4 mb-2">
          <div className="flex items-center justify-between">
            <div className="text-sm text-[#ff823a] font-bold bg-slate-200 p-1 px-2 rounded-[5px] whitespace-nowrap">
              Ksh {product.price.toLocaleString()}
            </div>
            <div className="text-sm text-green-500">↓ {product.discount}</div>
          </div>
          <div className="flex mt-2">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={`${
                  i < Math.floor(product.rating)
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
          aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          className={`cursor-pointer ${
            isInWishlist ? "text-navbg" : "hover:text-navbg"
          } ${isInWishlist ? "fill-current text-navbg" : ""}`}
          onClick={handleWishlistClick}
        />
        <Shuffle
          aria-label={
            isInCompareList ? "Remove from compare" : "Add to compare"
          }
          className={`cursor-pointer ${
            isInCompareList ? "text-navbg" : "hover:text-navbg"
          } ${isInCompareList ? "fill-current text-navbg" : ""}`}
          onClick={handleCompareClick}
        />
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    discount: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
