import { useState } from "react";
import {
  Search,
  Bell,
  BarChart2,
  ShoppingCart,
  Users,
  Settings,
} from "feather-icons-react";
import { StatCard, Sidebar } from "./../../components";

const Dashboard = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        showMobileMenu={showMobileMenu}
        toggleMobileMenu={toggleMobileMenu}
      />

      {/* Main content */}
      <div className="flex-grow bg-gray-100 p-8">
        {/* Top Navbar */}
        <div className="flex justify-between items-center">
          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded-full bg-gray-200 border-none"
            />
            <button className="absolute top-0 right-0 mt-2 mr-3">
              <Search />
            </button>
          </div>

          {/* User Info */}
          <div className="flex items-center space-x-4">
            <Bell />
            <div className="relative">
              <img
                src="https://via.placeholder.com/30"
                className="rounded-full"
                alt="User"
              />
              <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border-2 border-white"></span>
            </div>
            <span>John Quinn</span>
          </div>
        </div>

        {/* Stats Cards */}
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
            title="New StoreOpen"
            value="8,925"
            color="blue"
          />
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <StatCard
            icon={Users}
            title="Customers"
            value="14,208"
            color="orange"
          />
          <StatCard
            icon={ShoppingCart}
            title="Orders"
            value="2,314"
            color="purple"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
