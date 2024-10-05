import PropTypes from "prop-types";
import { SidebarMenu } from "../";
import { ShoppingBag } from "feather-icons-react";
const Sidebar = ({ showMobileMenu, toggleMobileMenu }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-navshade-500 z-50 transform ${
          showMobileMenu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button className="text-white mb-4" onClick={toggleMobileMenu}>
          <i className="fas fa-times"></i>
        </button>
        <SidebarMenu />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block bg-navshade-500 w-64 p-6 text-white">
        <a
          href="dashboard"
          className="text-white text-lg font-bold flex items-center md:mb-5"
        >
          <p className="text-3xl">DIGI</p>
          <span className="flex flex-col items-center ml-1">
            <ShoppingBag className="w-4 h-4" />
            <p className="text-xs font-light">SHOP</p>
          </span>
        </a>
        <SidebarMenu />
      </div>
    </>
  );
};

//   prop validations
Sidebar.propTypes = {
  showMobileMenu: PropTypes.bool.isRequired,
  toggleMobileMenu: PropTypes.func.isRequired,
};

export default Sidebar;
