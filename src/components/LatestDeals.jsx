import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotDeals } from "../redux/hotdealSlice";

import { Shuffle } from "feather-icons-react";

import PropTypes from "prop-types";

function ProductCard({ product }) {
  // component code here
  return (
    <div className="flex flex-col items-center ">
      <img
        src={product.image}
        alt={product.name}
        className="w-15 h-10 object-cover mb-2"
      />
      <div className="text-sm text-orange-500 ">{product.name}</div>
      <div className="text-xs text-orange-500 ">{product.model}</div>
      <button className="mt-2 px-3 py-2 text-sm flex items-center gap-1 bg-gray-100 justify-center shadow-md rounded-[3px]">
        <Shuffle className="w-3 h-3" /> Compare
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
const products = [
  {
    id: 1,
    name: "TCL 32 Inch",
    model: "32565A",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
  },
  {
    id: 2,
    name: "TCL 43 Inch",
    model: "43D300 HD",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
  },
  {
    id: 3,
    name: "TCL 32 Inch",
    model: "325400 FHD",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
  },
  {
    id: 4,
    name: "TCL 32 Inch",
    model: "32565A",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
  },
];

const productPairs = [];
for (let i = 0; i < products.length; i += 2) {
  productPairs.push([products[i], products[i + 1]]);
}
const LatestDeals = () => {
  const dispatch = useDispatch();
  const {
    items: hotDealsItems,
    loading: loadingHotDeals,
    error: errorHotDeals,
  } = useSelector((state) => state.hotdeals);

  const [latestDeals, setLatestDeals] = useState([]);

  useEffect(() => {
    dispatch(fetchHotDeals());
  }, [dispatch]);

  useEffect(() => {
    if (hotDealsItems.length > 0) {
      const dealsToDisplay = hotDealsItems.slice(0, 2).map((deal) => ({
        id: deal.id,
        name: deal.name,
        image: deal.image,
        price: deal.price,
        discount: deal.discount,
        brand: deal.brand,
      }));
      setLatestDeals(dealsToDisplay);
    }
  }, [hotDealsItems]);

  if (loadingHotDeals) return <div>Loading Hot Deals...</div>;
  if (errorHotDeals)
    return <div>Error fetching hot deals: {errorHotDeals}</div>;

  return (
    <div className="w-full lg:w-1/4 space-y-6 mt-6 lg:mt-0">
      <div className="border border-orange-500 p-4">
        <div className="flex justify-between">
          <h4 className="text-lg text-orange-500 font-semibold">
            Latest Deals
          </h4>
          <span className="text-gray-400 flex gap-3">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="bg-gray-100 text-sm text-center rounded-full py-2 px-3"
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              className="bg-gray-100 text-sm text-center rounded-full py-2 px-3"
            />
          </span>
        </div>

        <hr className="my-2" />

        {latestDeals.map((deal) => (
          <div key={deal.id} className="mt-4 relative">
            <span className="absolute top-2 right-2 bg-navbg text-white text-xs font-bold px-2 py-1 rounded">
              -{deal.discount}%
            </span>
            <img
              src={deal.image}
              alt={deal.name}
              className="w-full rounded-lg"
            />
            <p className="mt-2 font-bold">{deal.name}</p>
            <span className="flex-col md:flex">
              <p className="text-gray-400 line-through">{`KSH ${deal.price}`}</p>
              <p className="text-green-600 font-bold">{`KSH ${
                deal.price * (1 - deal.discount / 100)
              }`}</p>
            </span>
          </div>
        ))}
      </div>

      {/* Additional comparison logic or product display goes here */}
      <div className="bg-white p-4 shadow">
        <div className="relative bg-black text-white">
          <div className="text-center py-2 relative">
            <FontAwesomeIcon icon={faChartColumn} className="text-white" />
            <div className="inline-block px-4 font-bold shadow-lg">
              COMPARE
              <div className="absolute inset-x-0 bottom-0 mx-auto w-3 h-3 bg-black rotate-45 transform translate-y-1/2"></div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          {latestDeals.map((deal, index) => (
            <div key={index} className="flex justify-between items-center mb-4">
              <ProductCard product={deal} />
              <div className="px-2 font-bold text-lg">
                <span className="bg-gray-200 rounded-full p-2">VS</span>
              </div>
              <ProductCard product={deal} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestDeals;
