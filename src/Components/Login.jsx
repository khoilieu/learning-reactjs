import { useState } from "react";
import PropTypes from "prop-types";
import ChangePassword from "../Components/ChangePassword";
import axios from "axios"; // Thêm axios để gọi API

const Login = ({ toggleFormMode }) => {
  const [activeTab, setActiveTab] = useState("otp");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState(""); // Thêm trạng thái lỗi mật khẩu
  const [otpError] = useState("");
  const [showChangePassword, setShowChangePassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (activeTab === "otp") {
      console.log("Login with OTP:", email, otp); // Giữ nguyên phần OTP
    } else {
      // Đăng nhập bằng email và mật khẩu
      if (!email) {
        setEmailError("Vui lòng nhập email!");
        return;
      }
      if (!isEmailValid(email)) {
        setEmailError("Email không hợp lệ!");
        return;
      }
      if (!password) {
        setPasswordError("Vui lòng nhập mật khẩu!");
        return;
      }

      try {
        const response = await axios.post("http://localhost:3000/auth/login", {
          email,
          password,
        });
        console.log(response.data);
        if (response.data.message === "Login successful") {
          setEmailError("");
          setPasswordError("");
          alert("Đăng nhập thành công!");
          window.location.href = "/";
        } else {
          alert(response.data.error);
          setPasswordError(
            response.data.error || "Đăng nhập thất bại!"
          );
        }
      } catch (error) {
        console.error("Login failed:", error.response?.data);
        setPasswordError(
          error.response?.data?.message || "Đăng nhập thất bại!"
        );
      }
    }
  };

  // Kiểm tra email hợp lệ
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleGetOtp = () => {
    if (!email) {
      setEmailError("Vui lòng nhập email!");
    } else if (!isEmailValid(email)) {
      setEmailError("Email không hợp lệ!");
    } else {
      setEmailError("");
      console.log("Sending OTP to", email);
      // Logic gửi mã OTP đi đây
    }
  };

  const handleForgotPassword = () => {
    setShowChangePassword(true);
  };

  const handleCloseChangePassword = () => {
    setShowChangePassword(false);
  };

  return (
    <div className="min-h-screen flex justify-center">
      <div className="bg-white rounded-lg w-full max-w-xl">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Đăng nhập
        </h2>

        {/* Tabs */}
        <div className="flex border-b mb-6">
          <button
            className={`pb-2 px-4 flex-1 text-center ${
              activeTab === "otp"
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("otp")}
          >
            Mã OTP
          </button>
          <button
            className={`pb-2 px-4 flex-1 text-center ${
              activeTab === "gmail"
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("gmail")}
          >
            Gmail
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="Nhập Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && (
              <p className="text-red-600 text-sm mt-1">{emailError}</p>
            )}
          </div>

          {/* OTP or Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              {activeTab === "otp" ? "Mã OTP" : "Mật khẩu"}
            </label>
            <div className="relative">
              <input
                type={
                  activeTab === "otp"
                    ? "text"
                    : showPassword
                    ? "text"
                    : "password"
                }
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder={
                  activeTab === "otp" ? "Nhập mã OTP" : "Nhập mật khẩu"
                }
                value={activeTab === "otp" ? otp : password}
                onChange={(e) =>
                  activeTab === "otp"
                    ? setOtp(e.target.value)
                    : setPassword(e.target.value)
                }
                required
              />
              {activeTab === "gmail" && (
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
              )}
            </div>
            {activeTab === "otp" && otpError && (
              <p className="text-red-600 text-sm mt-1">{otpError}</p>
            )}
            {activeTab === "gmail" && passwordError && (
              <p className="text-red-600 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          <div className="flex justify-between mb-6">
            {activeTab === "otp" && (
              <button
                type="button"
                className="text-green-600 hover:underline"
                onClick={handleGetOtp}
              >
                Lấy mã OTP
              </button>
            )}
            <button type="button" className="text-green-600 hover:underline">
              Quên mật khẩu
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#16a34a] text-white py-3 rounded font-medium hover:bg-green-700"
          >
            Đăng nhập
          </button>
        </form>

        <div className="flex flex-col items-center mt-6 mb-4">
          <div className="text-center mt-4">
            <p className="text-gray-700">
              Quý khách chưa có tài khoản? Quý khách muốn{" "}
              <a
                href="#"
                className="text-green-600 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  toggleFormMode("register");
                }}
              >
                Đăng ký?
              </a>
            </p>
          </div>

          <p className="text-center text-xs text-green-600 mt-6 hover:underline cursor-pointer">
            Điều khoản sử dụng và chính sách bảo mật của SavvySub
          </p>
          <button
            type="button"
            className="text-green-600 hover:underline "
            onClick={handleForgotPassword}
          >
            Đổi mật khẩu
          </button>
        </div>
      </div>
      {showChangePassword && (
        <ChangePassword onClose={handleCloseChangePassword} />
      )}
    </div>
  );
};

Login.propTypes = {
  toggleFormMode: PropTypes.func.isRequired,
};

export default Login;
