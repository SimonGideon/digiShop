import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/authSlice";
import {
  faUserTie,
  faUser,
  faLock,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify"; // Importing toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Start loading when the login is triggered

    try {
      const action = await dispatch(loginUser(formData));
      if (loginUser.fulfilled.match(action)) {
        // Successful login
        toast.success("Login successful! Redirecting..."); // Show success toast
        setTimeout(() => {
          window.location.href = "/admin/dashboard"; // Or use a routing method
        }, 2000); // Redirect after 2 seconds
      } else {
        toast.error("Login failed. Please check your credentials."); // Show error toast
      }
    } catch (error) {
      toast.error(`An error occurred during login: ${error.message}`); // Show error toast
    } finally {
      setIsLoading(false); // Stop loading after the attempt
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-80 rounded-lg shadow h-auto p-6 bg-white relative overflow-hidden">
        <div className="flex flex-col justify-center items-center space-y-2">
          <div className="text-center bg-navbg text-white rounded-full w-14 h-14 flex justify-center items-center">
            <FontAwesomeIcon icon={faUserTie} className="w-7 h-7" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-2">
          <h2 className="text-2xl font-medium text-slate-700">Login</h2>
        </div>

        <form className="w-full mt-4 space-y-3" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="text-slate-500">
              Username
            </label>
            <div className="flex items-center border-2 rounded-md px-2 py-1 focus-within:border-blue-300">
              <FontAwesomeIcon icon={faUser} className="text-slate-400 mr-2" />
              <input
                className="outline-none text-slate-500 w-full"
                placeholder="Username"
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-slate-500">
              Password
            </label>
            <div className="flex items-center border-2 rounded-md px-2 py-1 focus-within:border-blue-300">
              <FontAwesomeIcon icon={faLock} className="text-slate-400 mr-2" />
              <input
                className="outline-none text-slate-500 w-full"
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-1 bg-green-500 border-none hover:bg-green-400 rounded-md text-white font-semibold mt-5"
            disabled={isLoading} // Disable the button when loading
          >
            {isLoading ? (
              <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
            ) : (
              "Login"
            )}
            {isLoading && " Logging in..."}
          </button>
        </form>
      </div>

      {/* Add Toast container where toasts will appear */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </div>
  );
};

export default Login;
