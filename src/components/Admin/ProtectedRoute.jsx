import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = Cookies.get("token"); // Check if the user is logged in by checking the token cookie

  if (!token) {
    navigate("/admin"); // Or use Redirect in older versions of React Router
    return null;
  }

  return children; // If logged in, render the children (i.e., protected route)
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
