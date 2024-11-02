// src/GlobalIcons.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import {
  faTrashAlt,
  faPlus,
  faEdit,
  faFire,
  faIcons,
  faTv,
  faDesktop,
  faMobileAlt,
  faHome,
  faCamera,
  faBlender,
  faLaptop,
  faBriefcase,
  faHeadphones,
  faTabletAlt,
  faGamepad,
  faPlug,
  faBatteryFull,
  faSdCard,
  faUsb,
  faNetworkWired,
  faWifi,
  faHeart,
  faShoppingCart,
  faUser,
  faSignOutAlt,
  faBell,
  faCreditCard,
  faMoneyBillWave,
  faHeartBroken,
  faStar,
  faStarHalfAlt,
  faCommentAlt,
  faTags,
  faPercent,
  faBadgeDollar,
  faQuestionCircle,
  faLifeRing,
  faFilter,
  faSortAmountDown,
  faSortAmountUp,
  faListAlt,
  faThLarge,
  faBars,
  faWallet,
  faMapMarkerAlt,
  faClock,
  faTruck,
  faReceipt,
  faFileInvoice,
  faBatteryHalf,
  faBatteryQuarter,
  faPowerOff,
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  trash: faTrashAlt,
  plus: faPlus,
  edit: faEdit,
  hotDeal: faFire,
  defalutIcon: faIcons,
  tv: faTv,
  computer: faDesktop,
  smartphone: faMobileAlt,
  home: faHome,
  camera: faCamera,
  kitchen: faBlender,
  laptop: faLaptop,
  office: faBriefcase,
  headphones: faHeadphones,
  tablet: faTabletAlt,
  gaming: faGamepad,
  accessories: faPlug,
  battery: faBatteryFull,
  sdCard: faSdCard,
  usb: faUsb,
  network: faNetworkWired,
  wifi: faWifi,
  wishlist: faHeart,
  cart: faShoppingCart,
  user: faUser,
  logout: faSignOutAlt,
  notifications: faBell,
  checkout: faCreditCard,
  cash: faMoneyBillWave,
  removeWishlist: faHeartBroken,
  rating: faStar,
  halfStar: faStarHalfAlt,
  reviews: faCommentAlt,
  discount: faTags,
  sale: faPercent,
  specialOffer: faBadgeDollar,
  help: faQuestionCircle,
  support: faLifeRing,
  filter: faFilter,
  sortDown: faSortAmountDown,
  sortUp: faSortAmountUp,
  categories: faListAlt,
  gridView: faThLarge,
  listView: faBars,
  wallet: faWallet,
  location: faMapMarkerAlt,
  deliveryTime: faClock,
  shipping: faTruck,
  invoice: faFileInvoice,
  receipt: faReceipt,
  batteryHalf: faBatteryHalf,
  batteryQuarter: faBatteryQuarter,
  power: faPowerOff,
  facebook: faFacebook,
  instagram: faInstagram,
  twitter: faTwitter,
  pinterest: faPinterest,
  share: faShareAlt,
};

const GlobalIcon = ({ icon, ...props }) => {
  const IconComponent = icons[icon];
  return IconComponent ? (
    <FontAwesomeIcon icon={IconComponent} {...props} />
  ) : null;
};
GlobalIcon.propTypes = {
  icon: PropTypes.oneOf(["trash", "plus", "edit", "hotDeal", "defalutIcon"])
    .isRequired,
};

export default GlobalIcon;
