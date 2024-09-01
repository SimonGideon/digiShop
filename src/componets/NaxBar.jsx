import { ShoppingBag, Shuffle, Heart, Search } from "feather-icons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

const MobileNavbar = () => {
  return (
    <nav className="bg-red-600 px-4 py-6">
      <div className="flex items-center justify-between">
        <a href="/" className="text-white text-lg font-bold flex items-center">
          <p className="text-3xl">DIGI</p>
          <span className="flex flex-col items-center ml-1">
            <ShoppingBag className="w-4 h-4" />
            <p className="text-xs font-light">SHOP</p>
          </span>
        </a>

        <div className="flex items-center space-x-2">
          <a
            href="#"
            className="text-white relative flex flex-col items-center"
          >
            <Heart className="w-5 h-5" />
            <p className="mt-1 text-sm">Wishlist</p>
          </a>

          <a
            href="#"
            className="text-white relative flex flex-col items-center"
          >
            <div className="relative">
              <Shuffle className="w-5 h-5" />
              <span className="absolute -top-2 -right-4 bg-white text-black text-xs rounded-full px-1">
                3
              </span>
            </div>
            <p className="mt-1 text-sm">Compare</p>
          </a>

          <a
            href="#"
            className="text-white relative flex flex-col items-center"
          >
            <div className="relative">
              <FontAwesomeIcon icon={faBasketShopping} className="w-7 h-7" />
              <span className="absolute -top-3 -right-1 bg-white text-black text-xs rounded-full px-1">
                5
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-3 flex items-center bg-white rounded-full overflow-hidden">
        <input
          type="text"
          className="w-full p-1 pl-4 text-gray-700 focus:outline-none"
          placeholder="Search"
        />
        <select className="bg-white text-gray-700 p-2 border-l focus:outline-none">
          <option>All categories</option>
          {/* Add more options as needed */}
        </select>
        <button className="p-3 bg-red-600 text-white">
          <Search w-5 h-5 />
        </button>
      </div>
    </nav>
  );
};

export default MobileNavbar;
