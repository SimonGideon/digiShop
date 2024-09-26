import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice";
import { FavoriteCard } from "../componets";

const WishlistPage = () => {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  console.log(wishlist);

  const handleRemove = (favorite) => {
    dispatch(removeFromWishlist(favorite));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gray-100 p-4 font-bold text-lg">Favorites</div>
      {wishlist.map((favorite) => (
        <FavoriteCard
          key={favorite.id}
          favorite={favorite}
          onRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default WishlistPage;
