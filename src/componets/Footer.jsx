import { ShoppingBag } from "feather-icons-react";

const Footer = () => {
  return (
    <footer className="bg-displaybg text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <a href="/" className="flex items-center mb-6 md:mb-0">
          <p className="text-3xl font-bold">DIGI</p>
          <span className="flex flex-col items-center ml-2">
            <ShoppingBag className="w-6 h-6" />
            <p className="text-xs font-light">SHOP</p>
          </span>
        </a>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
          <div className="flex flex-col">
            <p className="font-semibold mb-2">About DIGIShop</p>
            <a href="#" className="text-sm hover:underline">
              About us
            </a>
            <a href="#" className="text-sm hover:underline">
              Contact us
            </a>
            <a href="#" className="text-sm hover:underline">
              FAQ(s)
            </a>
            <a href="#" className="text-sm hover:underline">
              How to Shop
            </a>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold mb-2">LET US HELP YOU</p>
            <a href="#" className="text-sm hover:underline">
              Terms and Conditions
            </a>
            <a href="#" className="text-sm hover:underline">
              Shipping Policy & Delivery
            </a>
            <a href="#" className="text-sm hover:underline">
              Customer ratings and reviews
            </a>
            <a href="#" className="text-sm hover:underline">
              Payment
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} DIGIShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
