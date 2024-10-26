import {
  CategoriesGrid,
  MobileDisplay,
  ContactDetails,
  Footer,
  Loader,
} from "../components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotDeals } from "../redux/hotdealsSlice";
import { fetchCategories } from "../redux/categorySlice";

const Home = () => {
  const dispatch = useDispatch();
  const {
    items: hotDealsItems,
    loading: loadingHotDeals,
    error: errorHotDeals,
  } = useSelector((state) => state.hotdeals);
  const {
    items: categoriesItems,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categorisedItems);

  const [updatedCategories, setUpdatedCategories] = useState([]);

  // Fetch hot deals and categories data
  useEffect(() => {
    dispatch(fetchHotDeals());
    dispatch(fetchCategories());
  }, [dispatch]);

  // Combine hot deals into categories once both are loaded
  useEffect(() => {
    if (categoriesItems.length) {
      // Add a new category with hot deals as subcategories
      const categoriesWithHotDeals = [
        ...categoriesItems,
        {
          id: "hot-deals", // Assign a unique id for this category
          name: "Hot Deals",
          items: hotDealsItems.slice(0, 12).map((deal) => ({
            id: deal.id,
            name: deal.name,
          })),
        },
      ];
      setUpdatedCategories(categoriesWithHotDeals);
    }
  }, [categoriesItems, hotDealsItems]);

  // Loading and error handling for both requests
  if (loadingHotDeals || loadingCategories) return <Loader />;
  if (errorHotDeals) return <p>Error loading hot deals: {errorHotDeals}</p>;
  if (errorCategories)
    return <p>Error loading categories: {errorCategories}</p>;

  return (
    <div>
      <div className="p-4 md:p-6">
        <div className="block md:hidden">
          <MobileDisplay categories={updatedCategories} />
        </div>
        <div className="hidden md:block">
          <CategoriesGrid categories={updatedCategories} />
        </div>
      </div>
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default Home;
