import { BarChart2, ShoppingCart, Users } from "feather-icons-react";
import { StatCard } from "./../../components";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      <StatCard icon={BarChart2} title="Revenue" value="Ksh. 0" color="green" />
      <StatCard icon={ShoppingCart} title="Stock" value="825" color="red" />
      <StatCard icon={Users} title="Customers" value="14,208" color="orange" />
      <StatCard
        icon={ShoppingCart}
        title="Categories"
        value="14"
        color="purple"
      />
    </div>
  );
};

export default Dashboard;
