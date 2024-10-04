import { useState } from "react";
import { ShoppingBag, Shuffle, Heart } from "feather-icons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import CompareDrawer from "./CompareDrawer";
import { removeFromCompare } from "../redux/compareSlice";

const MobileNavbar = () => {
  const wishlistCount = useSelector((state) => state.wishlist.length);
  const compareCount = useSelector((state) => state.compare.length);
  const cartCount = useSelector((state) =>
    state.cart.reduce((acc, item) => acc + item.quantity, 0)
  );
  const dispatch = useDispatch();
  const [isCompareOpen, setCompareOpen] = useState(false);
  const handleRemove = (product) => {
    dispatch(removeFromCompare(product));
  };
  return (
    <nav className="bg-navbg px-5 md:px-14 py-4">
      <div className="">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-white text-lg font-bold flex items-center"
          >
            <p className="text-3xl">DIGI</p>
            <span className="flex flex-col items-center ml-1">
              <ShoppingBag className="w-4 h-4" />
              <p className="text-xs font-light">SHOP</p>
            </span>
          </a>

          <div className="hidden md:flex">
            <SearchBar />
          </div>

          <div className="flex items-center space-x-2 md:space-x-6">
            <a
              href="/products/favorite"
              className="text-white relative flex flex-col items-center"
            >
              <Heart className="w-6 h-6" />
              <p className="mt-1 text-sm">Wishlist</p>
              <span className="absolute -top-2 -right-0 bg-white text-black text-xs rounded-full px-1">
                {wishlistCount > 0 ? wishlistCount : 0}
              </span>
            </a>

            <button
              onClick={() => setCompareOpen(!isCompareOpen)}
              className="text-white relative flex flex-col items-center"
            >
              <div className="relative">
                <Shuffle className="w-6 h-6" />
                <span className="absolute -top-2 -right-4 bg-white text-black text-xs rounded-full px-1">
                  {compareCount > 0 ? compareCount : 0}
                </span>
              </div>
              <p className="mt-1 text-sm">Compare</p>
            </button>

            <a
              href="/products/cart"
              className="text-white relative flex flex-col items-center"
            >
              <div className="relative">
                <FontAwesomeIcon icon={faBasketShopping} className="w-7 h-7" />
                <span className="absolute -top-3 -right-1 bg-white text-black text-xs rounded-full px-1">
                  {cartCount > 0 ? cartCount : 0}
                </span>
              </div>
            </a>
          </div>
        </div>
        <CompareDrawer
          isOpen={isCompareOpen}
          onClose={() => setCompareOpen(false)}
          items={useSelector((state) => state.compare)}
          removeItem={handleRemove}
        />
        <div className="md:hidden">
          <SearchBar isMobile />
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
