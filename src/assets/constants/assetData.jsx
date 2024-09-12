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
const cartegory = [
  {
    name: "Hot Deals",
    icon: <FontAwesomeIcon icon={faFire} className="text-red-600 h-8 w-8" />,
  },
  {
    name: "Smartphones",
    icon: <Smartphone className="h-8 w-8" />,
  },
  {
    name: "Phone Accessories",
    icon: <Headphones className="h-8 w-8" />,
  },
  {
    name: "TV & Home Theaters",
    icon: <Tv className="h-8 w-8" />,
  },
  {
    name: "Speakers",
    icon: <Speaker className="h-8 w-8" />,
  },
  {
    name: "Home Appliances",
    icon: <Home className="h-8 w-8" />,
  },
  {
    name: "Cameras",
    icon: <Camera className="h-8 w-8" />,
  },
  {
    name: "Computers",
    icon: <FontAwesomeIcon icon={faComputer} className="h-8 w-8" />,
  },
  {
    name: "Laptops",
    icon: <FontAwesomeIcon icon={faFireBurner} className="h-8 w-8" />,
  },
];

export { cartegory };
