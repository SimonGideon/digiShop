import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  useEffect(() => {
    if (!token) {
      navigate("/admin"); // Redirect if not authenticated
    }
  }, [token, navigate]);

  if (!token) {
    return null; // Prevent rendering until redirect happens
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
