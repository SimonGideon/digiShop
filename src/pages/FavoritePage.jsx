import { X, Shuffle } from "feather-icons-react";
import { useState } from "react";
import { products } from "../assets/constants/assetData";

const FavoritePage = () => {
  const [favorites, setFavorites] = useState(products);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((product) => product.id !== id));
  };

  return (
    <div className="p-4 px-18">
      <h2 className="text-2xl font-bold mb-4 px-10">Favorites</h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 px-8 gap-4">
        {favorites.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 p-4 rounded-lg flex flex-col sm:flex-row items-center"
          >
            <button
              onClick={() => removeFavorite(product.id)}
              className="text-red-500 text-lg p-2 hover:text-red-700"
            >
              <X />
            </button>
            <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-grow px-4 text-center sm:text-left">
              <p className="text-orange-500 font-normal text-[1em]">
                {product.name}
              </p>
              <button className="mt-2 flex items-center justify-center sm:justify-start text-gray-400  px-2 py-1 rounded-md border bg-gray-100 cursor-not-allowed">
                <Shuffle className="w-4 h-4 mr-1" /> compare
              </button>
            </div>
            <div className="mt-4 sm:mt-0">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 transition text-nowrap">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
