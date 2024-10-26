import { Product, Footer, FilterAndSort } from "../components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategoryAndSubcategory } from "./../redux/productsSlice";

const ProductDetailsPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  // Get the category and subcategory from URL params
  const { productName, subCategory } = params;

  const {
    items: products,
    loading,
    error,
  } = useSelector((state) => state.products.categoryProducts);

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Price: Low to High");

  // Fetch products when the component mounts or when URL params change
  useEffect(() => {
    dispatch(
      fetchProductsByCategoryAndSubcategory({
        category: productName,
        subcategory: subCategory,
      })
    );
  }, [dispatch, productName, subCategory]);

  // Sorting products based on selected sort option
  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "Price: Low to High") {
      return a.price - b.price;
    } else if (sort === "Price: High to Low") {
      return b.price - a.price;
    }
    return 0;
  });

  // Filtering products based on selected filter option
  const filteredProducts =
    filter === "All"
      ? sortedProducts
      : sortedProducts.filter((product) => product.category_name === filter);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products: {error}</div>;

  return (
    <div>
      <FilterAndSort
        onFilterChange={setFilter}
        onSortChange={setSort}
        filters={["All", "Electronics", "Clothing", "Accessories"]}
        sortOptions={[
          "Price: Low to High",
          "Price: High to Low",
          "Newest First",
          "Best Seller",
        ]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 md:px-12">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
