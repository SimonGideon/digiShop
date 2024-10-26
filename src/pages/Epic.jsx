import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategoryAndSubcategory } from "./../redux/productsSlice";

const Epic = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(
    (state) => state.products.categoryProducts
  );
  const params = useParams();

  useEffect(() => {
    const { productName, subCategory } = params;
    dispatch(
      fetchProductsByCategoryAndSubcategory({
        category: productName,
        subcategory: subCategory,
      })
    );
  }, [dispatch, params]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {items.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <p>Brand: {product.brand}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Epic;
