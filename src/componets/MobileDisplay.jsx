import { MobileCategoryCard } from "./";

import {
  Smartphone,
  Headphones,
  Tv,
  Speaker,
  Home,
  Camera,
} from "feather-icons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faFireBurner,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";
const category = [
  {
    name: "Hot Deals",
    icon: <FontAwesomeIcon icon={faFire} className="h-5 w-5" />,
  },
  {
    name: "Smartphones",
    icon: <Smartphone className="h-5 w-5" />,
  },
  {
    name: "Phone Accessories",
    icon: <Headphones className="h-5 w-5" />,
  },
  {
    name: "TV & Home Theaters",
    icon: <Tv className="h-5 w-5" />,
  },
  {
    name: "Speakers",
    icon: <Speaker className="h-5 w-5" />,
  },
  {
    name: "Home Appliances",
    icon: <Home className="h-5 w-5" />,
  },
  {
    name: "Cameras",
    icon: <Camera className="h-5 w-5" />,
  },
  {
    name: "Computers",
    icon: <FontAwesomeIcon icon={faComputer} className="h-6 w-6" />,
  },
  {
    name: "Laptops",
    icon: <FontAwesomeIcon icon={faFireBurner} className="h-6 w-6" />,
  },
];

const MovbileDisplay = () => {
  return <MobileCategoryCard categories={category} />;
};

export default MovbileDisplay;
