// src/GlobalIcons.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import {
  faTrashAlt,
  faPlus,
  faEdit,
  faFire,
  faIcons,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  trash: faTrashAlt,
  plus: faPlus,
  edit: faEdit,
  hotDeal: faFire,
  defalutIcon: faIcons,
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
