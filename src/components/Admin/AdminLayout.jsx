import { useState, useEffect, useRef } from "react";
import { Search, Bell, Menu, ChevronDown, LogOut } from "feather-icons-react";
import adminAvatar from "./../../assets/images/admin-avatar.jpg";
import { Sidebar, UserProfileDropdown } from "./../../components";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./../../assets/Styles/AdminLayout.css";
import { startTransition } from "react";

const AdminLayout = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [username, setUsername] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const storedUser = Cookies.get("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUsername(parsedUser);
      } catch (error) {
        console.error("Error parsing user data from cookie:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    startTransition(() => {
      navigate("/admin");
    });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
          <div className="md:flex items-center space-x-4 hidden relative">
            <Bell />
            <div className="relative">
              <img
                src={adminAvatar}
                className="rounded-full w-8 h-8 cursor-pointer"
                alt="User"
              />
              <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border-2 border-white"></span>
            </div>
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleDropdown}
            >
              <span>{username || "Admin"}</span>
              <ChevronDown className="w-4 h-4 ml-2" />
            </div>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-10 right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50"
              >
                <div className="border-t"></div>
                <button
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
                  onClick={handleLogout}
                >
                  <span>Logout</span>
                  <LogOut className="ml-2 w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
