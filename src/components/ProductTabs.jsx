import { useState } from "react";
import { ProductReview, ProductDescription } from "./index";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="container mx-auto py-6 md:p-4">
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-4 py-2 font-semibold text-gray-600 focus:outline-none ${
            activeTab === "description"
              ? "border-b-4 border-orange-500 text-black"
              : ""
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-4 py-2 font-semibold text-gray-600 focus:outline-none ${
            activeTab === "reviews"
              ? "border-b-4 border-orange-500 text-black"
              : ""
          }`}
        >
          Reviews (0)
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "description" && <ProductDescription />}

        {activeTab === "reviews" && <ProductReview />}
      </div>
    </div>
  );
};

export default ProductTabs;
