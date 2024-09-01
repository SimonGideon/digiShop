const Navbar = () => {
  return (
    <nav className="bg-red-600 p-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="/"
            className="text-white text-lg font-bold flex items-center"
          >
            <span>AVECHI</span>
            <span className="ml-1 text-white">.COM</span>
            <svg
              className="w-6 h-6 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18l-2 10H5L3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 15h8v2H8zm2 4h4v2h-4z"
              />
            </svg>
          </a>
        </div>

        {/* Search bar */}
        <div className="flex-1 mx-4">
          <div className="relative">
            <input
              type="text"
              className="w-full p-2 pl-10 pr-4 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Search"
            />
            <select className="absolute inset-y-0 right-0 p-2 bg-white border-l rounded-r-lg focus:ring focus:ring-blue-500 focus:outline-none">
              <option>All categories</option>
              {/* Add more options as needed */}
            </select>
            <svg
              className="absolute inset-y-0 left-0 pl-3 w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6M3 10a7 7 0 1114 0 7 7 0 01-14 0z"
              />
            </svg>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white flex items-center">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 21l-8-8 8-8 8 8-8 8z"
              />
            </svg>
            <span className="ml-1 hidden md:inline">Wishlist</span>
          </a>
          <a href="#" className="text-white flex items-center">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18l-2 10H5L3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 15h8v2H8zm2 4h4v2h-4z"
              />
            </svg>
            <span className="ml-1 hidden md:inline">Compare</span>
          </a>
          <a href="#" className="text-white flex items-center">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18l-2 10H5L3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 15h8v2H8zm2 4h4v2h-4z"
              />
            </svg>
            <span className="ml-1 hidden md:inline">KSh0.00</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
