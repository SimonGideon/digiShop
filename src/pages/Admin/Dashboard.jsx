import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BarChart2, ShoppingCart, Users } from "feather-icons-react";
import { StatCard, FulfilledOrders } from "../../components";
import {
  fetchCustomerCount,
  fetchStockCount,
  fetchRevenue,
  fetchCategoryCount,
} from "../../redux/adminSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const stockCount = useSelector(
    (state) => state.adminData.productsCount?.data?.count
  );
  const customerCount = useSelector(
    (state) => state.adminData.customersCount?.data?.customer_count
  );
  const categoryCount = useSelector(
    (state) => state.adminData.categoriesCount?.data?.category_count
  );

  const revenue = useSelector(
    (state) => state.adminData.revenue?.data?.total_revenue
  );

  console.log(revenue, stockCount, customerCount, categoryCount);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdminStats = async () => {
      try {
        await dispatch(fetchCustomerCount());
        await dispatch(fetchStockCount());
        await dispatch(fetchRevenue());
        await dispatch(fetchCategoryCount());
      } catch (err) {
        setError("Failed to fetch some statistics.");
        console.error(err);
      }
    };

    fetchAdminStats();
  }, [dispatch]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {error && <p className="text-red-500">{error}</p>}
        <StatCard
          icon={BarChart2}
          title="Revenue"
          value={`Ksh. ${revenue ?? 0}`}
          color="green"
        />
        <StatCard
          icon={ShoppingCart}
          title="Stock"
          value={stockCount ?? 0}
          color="red"
        />
        <StatCard
          icon={Users}
          title="Customers"
          value={customerCount}
          color="orange"
        />
        <StatCard
          icon={ShoppingCart}
          title="Categories"
          value={categoryCount ?? 0}
          color="purple"
        />
      </div>
      <FulfilledOrders />
    </div>
  );
};

export default Dashboard;
