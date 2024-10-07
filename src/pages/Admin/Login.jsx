import { useState } from "react";
import { faUserTie, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add logic for form submission
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-80 rounded-lg shadow h-auto p-6 bg-white relative overflow-hidden">
        {/* Icon above the form */}
        <div className="flex flex-col justify-center items-center space-y-2">
          <div className="text-center bg-navbg text-white rounded-full w-14 h-14 flex justify-center items-center">
            <FontAwesomeIcon icon={faUserTie} className="w-7 h-7" />
          </div>
        </div>

        {/* Form Title */}
        <div className="flex flex-col justify-center items-center space-y-2">
          <h2 className="text-2xl font-medium text-slate-700">Login</h2>
        </div>

        {/* Form */}
        <form className="w-full mt-4 space-y-3" onSubmit={handleSubmit}>
          {/* Username Field with Icon */}
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

          <Link to="/admin/dashboard" className="text-blue-500 text-sm">
            <button
              className="w-full justify-center py-1 bg-green-500 border-none hover:bg-green-400 rounded-md text-white font-semibold mt-5"
              id="login"
              name="login"
              type="submit"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
