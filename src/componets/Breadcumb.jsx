const Breadcrumb = () => {
  return (
    <nav className="text-sm mb-4">
      <ul className="flex space-x-2">
        <li>
          <a href="#" className="text-gray-500">
            Home
          </a>
        </li>
        <li>/</li>
        <li>
          <a href="#" className="text-gray-500">
            Smartphones
          </a>
        </li>
        <li>/</li>
        <li>
          <a href="#" className="text-gray-500">
            OnePlus Ace 3
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
