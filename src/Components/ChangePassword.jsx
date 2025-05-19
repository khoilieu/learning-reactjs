import { useState } from "react";

const ChangePassword = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [oldPasswordError, setOldPasswordError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmailValid(email)) {
      setEmailError("Email không hợp lệ!");
    } else if (!oldPassword) {
      setOldPasswordError("Vui lòng nhập mật khẩu cũ!");
    } else if (newPassword !== confirmPassword) {
      setPasswordError("Mật khẩu xác nhận không khớp!");
    } else {
      console.log("Password change request for:", email, oldPassword, newPassword);
      onClose(); // Close the popup after submit
    }
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
    setOldPasswordError("");
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordError("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Đổi mật khẩu
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="Nhập email của bạn"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && (
              <p className="text-red-600 text-sm mt-1">{emailError}</p>
            )}
          </div>

          {/* Old Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Mật khẩu cũ</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="Nhập mật khẩu cũ"
              value={oldPassword}
              onChange={handleOldPasswordChange}
              required
            />
            {oldPasswordError && (
              <p className="text-red-600 text-sm mt-1">{oldPasswordError}</p>
            )}
          </div>

          {/* New Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Mật khẩu mới</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="Nhập mật khẩu mới"
              value={newPassword}
              onChange={handleNewPasswordChange}
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Xác nhận mật khẩu</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="Xác nhận mật khẩu"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            {passwordError && (
              <p className="text-red-600 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#16a34a] text-white py-3 rounded font-medium hover:bg-green-700"
          >
            Đổi mật khẩu
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            className="text-gray-600 hover:underline"
            onClick={onClose}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
