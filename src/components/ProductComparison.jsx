import { useState, useEffect } from "react";
import { products } from "../assets/constants/assetData";

const ProductComparison = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [maxProductsPerView, setMaxProductsPerView] = useState(4); // Default is 4 for larger screens

  useEffect(() => {
    // Update maxProductsPerView based on screen size
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setMaxProductsPerView(2); // Show 2 products on small screens
      } else {
        setMaxProductsPerView(4); // Show 4 products on larger screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(products.length / maxProductsPerView);

  const getCurrentProducts = () => {
    const start = currentPage * maxProductsPerView;
    const end = start + maxProductsPerView;
    return products.slice(start, end);
  };

  const currentProducts = getCurrentProducts();

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="p-4">
      <div className="container mx-auto">
        <div className="flex flex-col ">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold sm:text-xl">Compare Products</h1>
            <div className="">
              <div className="flex justify-between items-center mb-4 gap-2">
                <button
                  onClick={prevPage}
                  className="border border-gray-300 py-0 px-2 rounded hover:bg-gray-200 disabled:opacity-50"
                  disabled={currentPage === 0}
                >
                  &#8249;
                </button>

                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <span
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentPage ? "bg-orange-500" : "bg-gray-400"
                      }`}
                    ></span>
                  ))}
                </div>

                <button
                  onClick={nextPage}
                  className="border border-gray-300 py-0 px-2 rounded hover:bg-gray-200 disabled:opacity-50"
                  disabled={currentPage === totalPages - 1}
                >
                  &#8250;
                </button>
              </div>
            </div>
          </div>

          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead></thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2 px-4 font-semibold border-r text-sm sm:text-xs">
                  Image
                </td>
                {currentProducts.map((product) => (
                  <td key={product.id} className="py-2 px-4 border-r">
                    <div className="relative">
                      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {product.discount}
                      </span>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-24 sm:w-20 sm:h-20 object-cover mx-auto"
                      />
                      <p className="text-sm sm:text-xs">{product.name}</p>
                      <p className="text-lg font-bold text-green-500 mt-2 text-center sm:text-base">
                        {product.price}
                      </p>
                      <button className="mt-2 w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 sm:py-1">
                        ADD TO CART
                      </button>
                      <button className="mt-2 w-full border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 sm:py-1">
                        Add to wishlist
                      </button>
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 font-semibold border-r text-sm sm:text-xs">
                  Availability
                </td>
                {currentProducts.map((product) => (
                  <td
                    key={product.id}
                    className="py-2 px-4 text-center border-r text-sm sm:text-xs"
                  >
                    {product.availability}
                  </td>
                ))}
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 font-semibold border-r text-sm sm:text-xs">
                  Rating
                </td>
                {currentProducts.map((product) => (
                  <td
                    key={product.id}
                    className="py-2 px-4 text-center border-r text-sm sm:text-xs"
                  >
                    {product.rating} ⭐
                  </td>
                ))}
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 font-semibold border-r text-sm sm:text-xs">
                  Display
                </td>
                {currentProducts.map((product) => (
                  <td
                    key={product.id}
                    className="py-2 px-4 border-r text-sm sm:text-xs"
                  >
                    {product.description.display}
                  </td>
                ))}
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 font-semibold border-r text-sm sm:text-xs">
                  Rear Camera
                </td>
                {currentProducts.map((product) => (
                  <td
                    key={product.id}
                    className="py-2 px-4 border-r text-sm sm:text-xs"
                  >
                    {product.description.rearCamera}
                  </td>
                ))}
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 font-semibold border-r text-sm sm:text-xs">
                  Front Camera
                </td>
                {currentProducts.map((product) => (
                  <td
                    key={product.id}
                    className="py-2 px-4 border-r text-sm sm:text-xs"
                  >
                    {product.description.frontCamera}
                  </td>
                ))}
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 font-semibold border-r text-sm sm:text-xs">
                  Processor
                </td>
                {currentProducts.map((product) => (
                  <td
                    key={product.id}
                    className="py-2 px-4 border-r text-sm sm:text-xs"
                  >
                    {product.description.processor}
                  </td>
                ))}
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 font-semibold border-r text-sm sm:text-xs">
                  Battery
                </td>
                {currentProducts.map((product) => (
                  <td
                    key={product.id}
                    className="py-2 px-4 border-r text-sm sm:text-xs"
                  >
                    {product.description.battery}
                  </td>
                ))}
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 font-semibold border-r text-sm sm:text-xs">
                  Colors
                </td>
                {currentProducts.map((product) => (
                  <td
                    key={product.id}
                    className="py-2 px-4 border-r text-sm sm:text-xs"
                  >
                    {product.description.colors.join(", ")}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductComparison;
