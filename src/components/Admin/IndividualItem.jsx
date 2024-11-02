import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../redux/productsSlice";
import { ProductDescription } from "../../components";

const IndividualItem = ({ productId }) => {
  const dispatch = useDispatch();
  const {
    item: product,
    loading,
    error,
  } = useSelector((state) => state.products.individualProduct);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, productId]);

  if (loading) return <p>Loading ..</p>;
  if (error) return <p>Error fetching product details: {error}</p>;

  return (
    <div className="p-6 lg:px-14">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <img
                src={product?.image}
                alt={product?.name}
                className="rounded-lg w-full max-h-[400px] object-cover"
              />
              <div className="flex mt-4 space-x-2">
                {/* Placeholder thumbnails - you can update these based on actual product images */}
                {product?.images?.slice(0, 2).map((thumb, index) => (
                  <img
                    key={index}
                    src={thumb}
                    alt={`thumb${index + 1}`}
                    className="w-16 h-16 border-2 p-2 border-gray-200 rounded"
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">{product?.name}</h2>
              <div className="bg-green-200 text-green-800 rounded-lg p-2 mt-2 w-max">
                Expert Score: 10
              </div>

              {/* Specifications */}
              <ul className="mt-4 space-y-2 text-gray-700">
                {product?.specifications &&
                  product.specifications.slice(0, 6).map((spec, index) => (
                    <li key={index}>
                      <strong>{spec.name}:</strong> {spec.value}
                    </li>
                  ))}
              </ul>

              <p className="mt-4 text-2xl font-bold text-green-600">
                KSH {product?.price}
              </p>
            </div>
          </div>
          <ProductDescription product={product} />
        </div>
      </div>
    </div>
  );
};

IndividualItem.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default IndividualItem;
