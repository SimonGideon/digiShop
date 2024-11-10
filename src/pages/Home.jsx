import {
  CategoriesGrid,
  MobileDisplay,
  ContactDetails,
  Footer,
  Loader,
} from "../components";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotDeals } from "../redux/hotdealSlice";
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

  useEffect(() => {
    dispatch(fetchHotDeals());
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categoriesItems.length) {
      const categoriesWithHotDeals = [
        {
          id: "hot-deals",
          name: "Hot Deals",
          icon: "hotDeal",
          items: hotDealsItems.slice(0, 12).map((deal) => ({
            id: deal.id,
            name: deal.name,
            category: deal.category,
            subCategory: deal.subcategory,
          })),
        },
        ...categoriesItems,
      ];
      setUpdatedCategories(categoriesWithHotDeals);
    }
  }, [categoriesItems, hotDealsItems]);

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
