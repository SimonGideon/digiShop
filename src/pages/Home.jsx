import {
  CategoriesGrid,
  MobileDisplay,
  ContactDetails,
  Footer,
} from "../components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotDeals } from "./../redux/hotdealsSlice";
import { categoriesItems as categories } from "../assets/constants";

const Home = () => {
  const dispatch = useDispatch();
  const {
    items: hotDealsItems,
    loading,
    error,
  } = useSelector((state) => state.hotdeals);

  const [updatedCategories, setUpdatedCategories] = useState([]);

  useEffect(() => {
    dispatch(fetchHotDeals());
  }, [dispatch]);

  useEffect(() => {
    // Update categories when hotDealsItems change
    const categoriesWithHotDeals = categories.map((category) => {
      if (category.name === "Hot Deals") {
        return { ...category, items: hotDealsItems }; // Update items for "Hot Deals"
      }
      return category; // Return the category as is
    });

    setUpdatedCategories(categoriesWithHotDeals); // Set the updated categories
  }, [hotDealsItems]);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading hot deals: {error}</p>;

  return (
    <div>
      <div className="p-4 md:p-6">
        <div className="block md:hidden">
          <MobileDisplay categories={updatedCategories} />{" "}
          {/* Pass categories as a prop */}
        </div>
        <div className="hidden md:block">
          <CategoriesGrid categories={updatedCategories} />{" "}
          {/* Pass categories as a prop */}
        </div>
      </div>
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default Home;
