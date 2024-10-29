import { useSelector, useDispatch } from "react-redux";
import { removeFromCompare } from "../redux/compareSlice";
import { Product, ProductComparison } from "../components";

const ComparePage = () => {
  const compareList = useSelector((state) => state.compare);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeFromCompare(product));
  };

  return (
    <div className="p-4 md:py-12 md:px-20">
      <h1 className="text-2xl font-bold mb-4">Compare Products</h1>
      {compareList && compareList.length === 0 ? (
        <p>No products to compare.</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {compareList.map((product) => (
              <Product
                key={product.id}
                product={product}
                onRemove={handleRemove}
              />
            ))}
          </div>
          <ProductComparison compareList={compareList} />
        </div>
      )}
    </div>
  );
};

export default ComparePage;
