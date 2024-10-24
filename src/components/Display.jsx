import { Category } from ".";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotDeals } from "./../redux/hotdealsSlice";
import { categoriesItems as categories } from "../assets/constants";

const CategoriesGrid = () => {
  const dispatch = useDispatch();
  const {
    items: hotDealsItems,
    loading,
    error,
  } = useSelector((state) => state.hotdeals);

  const [updatedCategories, setUpdatedCategories] = useState(categories);

  useEffect(() => {
    dispatch(fetchHotDeals());
  }, [dispatch]);

  useEffect(() => {
    // Create a new categories array to avoid direct mutation
    const updated = categories.map((category) => {
      if (category.name === "Hot Deals") {
        return { ...category, items: hotDealsItems }; // Update items for "Hot Deals"
      }
      return category; // Return the category as is
    });

    setUpdatedCategories(updated); // Set the updated categories
  }, [hotDealsItems]);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading hot deals: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
      {updatedCategories.map((category, index) => (
        <Category
          key={index}
          icon={category.icon}
          title={category.name}
          items={category.items}
        />
      ))}
    </div>
  );
};

export default CategoriesGrid;
