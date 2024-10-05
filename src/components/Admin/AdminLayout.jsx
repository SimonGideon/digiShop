import { useState } from "react";
import { Search, Bell, Menu } from "feather-icons-react";
import adminAvatar from "./../../assets/images/admin-avatar.jpg";
import { Sidebar, UserProfileDropdown } from "./../../components";
import { Outlet } from "react-router-dom";
import "./../../assets/Styles/AdminLayout.css";

const AdminLayout = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="flex min-h-screen">
      <div className="fixed top-0 left-0 z-50 p-2 bg-gray-100 md:hidden">
        <Menu onClick={toggleMobileMenu} />
      </div>

      <Sidebar
        className="side-menu"
        showMobileMenu={showMobileMenu}
        toggleMobileMenu={toggleMobileMenu}
      />
      <div className="admin-header flex-grow bg-gray-100 p-8 overflow-auto">
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
          <div className="flex md:hidden">
            <UserProfileDropdown adminAvatar={adminAvatar} />
          </div>

          <div className="md:flex items-center space-x-4 hidden ">
            <Bell />
            <div className="relative">
              <img
                src={adminAvatar}
                className="rounded-full w-8 h-8"
                alt="User"
              />
              <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border-2 border-white"></span>
            </div>
            <span>Admin</span>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
