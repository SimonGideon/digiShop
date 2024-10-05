import { useState } from "react";
import { Search, Bell } from "feather-icons-react";
import adminAvatar from "./../../assets/images/admin-avatar.jpg";
import { Sidebar } from "./../../components";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        showMobileMenu={showMobileMenu}
        toggleMobileMenu={toggleMobileMenu}
      />
      <div className="flex-grow bg-gray-100 p-8">
        <div className="flex justify-between items-center mb-4">
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

          <div className="flex items-center space-x-4">
            <Bell />
            <div className="relative">
              <img
                src={adminAvatar}
                className="rounded-full w-8 h-8"
                alt="User"
              />
              <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border-2 border-white"></span>
            </div>
            <span>John Quinn</span>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
