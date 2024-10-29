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
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-15 h-10 object-cover mb-2"
      />
      <div className="text-sm text-orange-500">{product.name}</div>
      <div className="text-xs text-orange-500">{product.brand}</div>
      <button className="mt-2 px-3 py-2 text-sm flex items-center gap-1 bg-gray-100 justify-center shadow-md rounded-[3px]">
        <Shuffle className="w-3 h-3" /> Compare
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

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
      const shuffledDeals = [...hotDealsItems].sort(() => 0.5 - Math.random());
      const dealsToDisplay = shuffledDeals.slice(0, 2);
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
        {latestDeals.map((deal) => {
          return (
            <div key={deal.id} className="mt-4 relative">
              <Link to={`/products/${deal.id}`}>
                <span className="absolute top-2 right-2 bg-navbg text-white text-xs font-bold px-2 py-1 rounded">
                  -{deal.discount}
                </span>
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-48 md:h-64 object-cover rounded-lg"
                />
                <p className="mt-2 font-bold">{deal.name}</p>
                <span className="flex-col md:flex">
                  <p className="text-gray-400 line-through">{`KSH ${(
                    deal.price /
                    (1 - parseInt(deal.discount, 10) / 100)
                  ).toFixed(2)}`}</p>
                  <p className="text-green-600 font-bold">{`KSH ${deal.price}`}</p>
                </span>
              </Link>
            </div>
          );
        })}
      </div>

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
              <ProductCard key={`${deal.id}-comparison`} product={deal} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestDeals;
