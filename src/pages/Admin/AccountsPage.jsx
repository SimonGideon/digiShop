import { useState } from "react";

const AccountsPage = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newUser, setNewUser] = useState({
    username: "",
    phone: "",
    password: "",
  });

  const handleChangePassword = (e) => {
    e.preventDefault();

    // Check if the new password and confirmation match
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Create FormData for password change
    const formData = new FormData();
    formData.append("currentPassword", currentPassword);
    formData.append("newPassword", newPassword);

    console.log("Changing password...");
    /*
    fetch("/api/change-password", {
      method: "POST",
      body: formData,
    }).then(response => {
      // Handle response
    });
    */
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    // Create FormData for adding a new user
    const formData = new FormData();
    formData.append("username", newUser.username);
    formData.append("phone", newUser.phone);
    formData.append("password", newUser.password);

    console.log("Adding new user:", newUser);
    /*
    fetch("/api/add-user", {
      method: "POST",
      body: formData,
    }).then(response => {
      // Handle response
    });
    */
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Account Management</h1>
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <form
          onSubmit={handleChangePassword}
          className="mb-8 bg-white shadow-lg rounded-lg p-6 md:w-1/2 md:mr-4"
        >
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>
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
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Change Password
          </button>
        </form>

        <form
          onSubmit={handleAddUser}
          className="mb-8 bg-white shadow-lg rounded-lg p-6 md:w-1/2 md:mr-4"
        >
          <h2 className="text-xl font-semibold mb-4">Add New Admin User</h2>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={newUser.username}
              onChange={(e) =>
                setNewUser({ ...newUser, username: e.target.value })
              }
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
          <div className="mb-4">
            <label className="block mb-1" htmlFor="newUserPassword">
              Password
            </label>
            <input
              type="password"
              id="newUserPassword"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Add Admin User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountsPage;
