import { Product, NavBar, Footer, FilterAndSort } from "./../componets";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductDetailsPage = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Price: Low to High");

  const fetchData = async (filter, sort) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/electronics`
      );
      const sortedProducts = response.data.sort((a, b) => {
        if (sort === "Price: Low to High") {
          return a.price - b.price;
        } else if (sort === "Price: High to Low") {
          return b.price - a.price;
        }
        return 0;
      });

      const filteredProducts =
        filter === "All"
          ? sortedProducts
          : sortedProducts.filter((product) => product.category === filter);

      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(filter, sort);
  }, [filter, sort]);

  return (
    <div>
      <NavBar />
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
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
