import { X, Shuffle } from "feather-icons-react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice";
import { Footer } from "../components";
import { toast } from "react-toastify";
import { addToCart, removeFromCart } from "./../redux/cartSlice";
import { selectIsInCart } from "../redux/selectors";
import { Link } from "react-router-dom";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.wishlist);

  const removeFavorite = (id) => {
    dispatch(removeFromWishlist({ id }));
    toast.success("Product removed from Wishlist!");
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Product added to cart!");
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    toast.success("Product removed from cart!");
  };

  const isInCartMap = useSelector((state) =>
    favorites.reduce((acc, product) => {
      acc[product.id] = selectIsInCart(product.id)(state);
      return acc;
    }, {})
  );

  return (
    <>
      <div className="p-4 px-18">
        <h2 className="text-2xl font-bold mb-4 px-10">Favorites</h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 px-8 gap-4">
          {favorites.map((product) => {
            const isInCart = isInCartMap[product.id];

            return (
              <div
                key={product.id}
                className="relative border border-gray-200 p-4 rounded-lg flex flex-col sm:flex-row items-center"
              >
                <button
                  onClick={() => removeFavorite(product.id)}
                  className="absolute top-2 right-0 text-red-500 text-lg p-2 hover:text-red-700 sm:static sm:top-auto sm:right-auto"
                >
                  <X />
                </button>

                {/* Link only around image and name */}
                <Link
                  to={`/products/${product.id}`}
                  className="aspect-w-1 aspect-h-1 w-full sm:w-24 flex-shrink-0 overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </Link>

                <div className="flex-grow px-4 text-center sm:text-left">
                  <Link to={`/products/${product.id}`}>
                    <p className="text-orange-500 font-normal text-[1em]">
                      {product.name}
                    </p>
                  </Link>
                  <button className="mt-2 flex items-center justify-center sm:justify-start text-gray-400 px-2 py-1 rounded-md border bg-gray-100 cursor-not-allowed">
                    <Shuffle className="w-4 h-4 mr-1" /> compare
                  </button>
                </div>

                <div className="mt-4 sm:mt-0">
                  {isInCart ? (
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600 transition text-nowrap"
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      Remove from cart
                    </button>
                  ) : (
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 transition text-nowrap"
                      onClick={() => handleAddToCart(product)}
                    >
                      ADD TO CART
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FavoritePage;
