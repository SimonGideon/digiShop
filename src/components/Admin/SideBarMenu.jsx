import {
  BarChart2,
  Box,
  Tag,
  ShoppingCart,
  Users,
  Settings,
  MapPin,
} from "feather-icons-react";
const SidebarMenu = () => {
  return (
    <ul className="space-y-4">
      <li className="flex items-center">
        <BarChart2 className="mr-2" /> Dashboard
      </li>
      <li className="flex items-center">
        <Box className="mr-2" /> Products
      </li>
      <li className="flex items-center">
        <Tag className="mr-2" /> Categories
      </li>
      <li className="flex items-center">
        <ShoppingCart className="mr-2" /> Orders
      </li>
      <li className="flex items-center">
        <Users className="mr-2" /> Customers
      </li>
      <li className="flex items-center">
        <Users className="mr-2" /> Sales Promotion
      </li>
      <li className="flex items-center">
        <Settings className="mr-2" /> Accounts
      </li>
      <li className="flex items-center">
        <MapPin className="mr-2" /> Store Locator
      </li>
    </ul>
  );
};

export default SidebarMenu;
