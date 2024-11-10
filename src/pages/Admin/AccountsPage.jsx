import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../redux/adminSlice"; // Import your Redux action for password change
import Cookies from "js-cookie";
const AccountsPage = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // get username from cookie
  const username = Cookies.get("user");

  const dispatch = useDispatch();
  const {
    loading,
    passwordChanged,
    error: changePasswordError,
  } = useSelector((state) => state.admin || {});

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    // Reset errors
    setError(null);

    // Validate if current password is entered
    if (!currentPassword) {
      setError("Current password is required.");
      return;
    }

    // Check if new password and confirmation match
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Validate password strength
    if (!validatePassword(newPassword)) {
      setError(
        "Password must be at least 8 characters long, contain at least one uppercase letter and one number."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      await dispatch(
        changePassword({ currentPassword, newPassword, username })
      );
    } catch (err) {
      setError(err.message || "An error occurred while changing the password.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const errorMessage = error || changePasswordError;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Account Management</h1>
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <form
          onSubmit={handleChangePassword}
          className="mb-8 bg-white shadow-lg rounded-lg p-6 md:w-1/2 md:mr-4"
        >
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>
          {errorMessage && (
            <div className="text-red-500 mb-4">{errorMessage}</div>
          )}

          <div className="mb-4">
            <label className="block mb-1" htmlFor="currentPassword">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="newPassword">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="confirmPassword">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Changing..." : "Change Password"}
          </button>

          {passwordChanged && (
            <div className="mt-4 text-green-500">
              Password changed successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AccountsPage;
