import { Breadcrumb, LatestDeals, ProductTabs } from "../components";

const ProductItem = () => {
  return (
    <div className="p-6 lg:px-14">
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:w-3/4 p-2">
          <Breadcrumb />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
                alt="OnePlus Ace 3"
                className="rounded-lg w-full"
              />
              <div className="flex mt-4 space-x-2">
                <img
                  src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
                  alt="thumb1"
                  className="w-16 h-16 border-2 p-2 border-gray-200"
                />
                <img
                  src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
                  alt="thumb2"
                  className="w-16 h-16 border-2 p-2 border-gray-200"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">OnePlus Ace 3 12GB 256GB</h2>
              <div className="bg-green-200 text-green-800 rounded-lg p-2 mt-2 w-max">
                Expert Score: 10
              </div>

              <ul className="mt-4 space-y-2 text-gray-700">
                <li>
                  <strong>Display:</strong> 6.7&quot; AMOLED
                </li>
                <li>
                  <strong>Rear Camera:</strong> 50MP + 8MP + 2MP
                </li>
                <li>
                  <strong>Front Camera:</strong> 16MP
                </li>
                <li>
                  <strong>Processor:</strong> Snapdragon 8+ Gen 1
                </li>
                <li>
                  <strong>Battery:</strong> 5000mAh
                </li>
                <li>
                  <strong>Color(s):</strong> Black, Blue, Rose Gold
                </li>
              </ul>

              <p className="mt-4 text-2xl font-bold text-green-600">
                KSH 78,499.00
              </p>

              <button className="bg-green-500 text-white px-6 py-2 mt-4 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
          <ProductTabs />
        </div>
        <LatestDeals />
      </div>
    </div>
  );
};

export default ProductItem;
