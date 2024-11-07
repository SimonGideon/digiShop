import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Bell, ChevronDown, LogOut } from "feather-icons-react";
import Cookies from "js-cookie";

const UserProfileDropdown = ({ adminAvatar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [username, setUsername] = useState(""); // State to hold the username
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    // Retrieve the user information from the cookie
    const storedUser = Cookies.get("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser); // Parse the JSON string
        setUsername(parsedUser); // Set the username if it exists in the cookie
      } catch (error) {
        console.error("Error parsing user data from cookie:", error);
      }
    }

    // Close the dropdown when clicking outside
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

  return (
    <div
      className="flex items-center space-x-4 relative md:hidden"
      ref={dropdownRef}
    >
      <div className="relative">
        <img src={adminAvatar} className="rounded-full w-8 h-8" alt="User" />
        <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border-2 border-white"></span>
      </div>

      <button onClick={toggleDropdown}>
        <ChevronDown className="w-5 h-5" />
      </button>

      {isDropdownOpen && (
        <div className="absolute top-4 right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
          <div className="px-4 py-2">
            <p className="text-gray-700">{username || "Admin"}</p>{" "}
            {/* Display username or "Admin" */}
          </div>
          <div className="py-2 border flex gap-1 pl-3">
            Notification
            <Bell className="w-5 h-5" />
          </div>
          <div className="border-t"></div>
          <button
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
            onClick={() => console.log("Logout clicked")}
          >
            <span>Logout</span>
            <LogOut className="ml-2 w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

UserProfileDropdown.propTypes = {
  adminAvatar: PropTypes.string.isRequired,
};

export default UserProfileDropdown;
