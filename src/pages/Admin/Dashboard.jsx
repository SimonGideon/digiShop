import { BarChart2, ShoppingCart, Users, Settings } from "feather-icons-react";
import { StatCard } from "./../../components";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      <StatCard
        icon={BarChart2}
        title="Revenue"
        value="$18,925"
        color="green"
      />
      <StatCard
        icon={ShoppingCart}
        title="Expense"
        value="$11,024"
        color="red"
      />
      <StatCard
        icon={Users}
        title="Happy Clients"
        value="8,925"
        color="yellow"
      />
      <StatCard
        icon={Settings}
        title="New Store Open"
        value="8,925"
        color="blue"
      />
      <StatCard icon={Users} title="Customers" value="14,208" color="orange" />
      <StatCard
        icon={ShoppingCart}
        title="Orders"
        value="2,314"
        color="purple"
      />
    </div>
  );
};

export default Dashboard;
