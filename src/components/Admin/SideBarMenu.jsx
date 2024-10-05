import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  BarChart2,
  Box,
  Tag,
  ShoppingCart,
  Users,
  Settings,
} from "feather-icons-react";

const SidebarMenu = ({ toggleMobileMenu }) => {
  return (
    <ul className="space-y-4">
      <li className="flex items-center">
        <Link
          to="/admin/dashboard"
          className="flex items-center"
          onClick={toggleMobileMenu}
        >
          <BarChart2 className="mr-2" /> Dashboard
        </Link>
      </li>
      <li className="flex items-center">
        <Link
          to="/admin/products"
          className="flex items-center"
          onClick={toggleMobileMenu}
        >
          <Box className="mr-2" /> Products
        </Link>
      </li>
      <li className="flex items-center">
        <Link
          to="/admin/categories"
          className="flex items-center"
          onClick={toggleMobileMenu}
        >
          <Tag className="mr-2" /> Categories
        </Link>
      </li>
      <li className="flex items-center">
        <Link
          to="/admin/orders"
          className="flex items-center"
          onClick={toggleMobileMenu}
        >
          <ShoppingCart className="mr-2" /> Orders
        </Link>
      </li>
      <li className="flex items-center">
        <Link
          to="/admin/customers"
          className="flex items-center"
          onClick={toggleMobileMenu}
        >
          <Users className="mr-2" /> Customers
        </Link>
      </li>
      <li className="flex items-center">
        <Link
          to="/admin/accounts"
          className="flex items-center"
          onClick={toggleMobileMenu}
        >
          <Settings className="mr-2" /> Accounts
        </Link>
      </li>
    </ul>
  );
};

SidebarMenu.propTypes = {
  toggleMobileMenu: PropTypes.func.isRequired,
};

export default SidebarMenu;
