import { Breadcrumb, LatestDeals, ProductTabs } from "../components";
import { useEffect } from "react";
import { fetchProductById } from "../redux/productsSlice";
import { addToCart, removeFromCart } from "./../redux/cartSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsInCart } from "./../redux/selectors";
import { toast } from "react-toastify";

const ProductItem = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { productId } = params;

  const {
    item: product,
    loading,
    error,
  } = useSelector((state) => state.products.individualProduct);

  // Check if the product is in the cart
  const isInCart = useSelector((state) => selectIsInCart(productId)(state));
  console.log("Is product in cart:", isInCart);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Product added to cart!");
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(productId));
    toast.success("Product removed from cart!");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching product: {error}</div>;

  return (
    <div className="p-6 lg:px-14">
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:w-3/4 p-2">
          <Breadcrumb />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg w-full max-h-96 object-cover"
              />
              <div className="flex mt-4 space-x-2">
                <img
                  src={product.image}
                  alt="thumb1"
                  className="w-16 h-16 border-2 p-2 border-gray-200"
                />
                <img
                  src={product.image}
                  alt="thumb2"
                  className="w-16 h-16 border-2 p-2 border-gray-200"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <div className="bg-green-200 text-green-800 rounded-lg p-2 mt-2 w-max">
                Expert Score: 10
              </div>

              {/* Specifications */}
              <ul className="mt-4 space-y-2 text-gray-700">
                {product.specifications &&
                  product.specifications.slice(0, 6).map((spec, index) => (
                    <li key={index}>
                      <strong>{spec.name}:</strong> {spec.value}
                    </li>
                  ))}
              </ul>

              <p className="mt-4 text-2xl font-bold text-green-600">
                KSH {product.price}
              </p>

              {isInCart ? (
                <button
                  onClick={handleRemoveFromCart}
                  className="bg-red-500 text-white px-6 py-2 mt-4 rounded-lg"
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="bg-green-500 text-white px-6 py-2 mt-4 rounded-lg"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
          <ProductTabs product={product} />
        </div>
        <LatestDeals />
      </div>
    </div>
  );
};

export default ProductItem;
