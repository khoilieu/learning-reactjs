import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Notification from "./Notification";

const Register = ({ toggleFormMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    setSuccess("");
    setLoading(true);

    let errors = {};

    if (!name) {
      errors.name = "Họ và tên không được để trống!";
    }

    if (!email) {
      errors.email = "Email không được để trống!";
    }

    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      errors.password =
        "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa và số!";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Mật khẩu không khớp!";
    }

    if (!termsAgreed) {
      errors.termsAgreed = "Yêu cầu chấp nhận Điều khoản sử dụng!";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/auth/register", {
        email,
        password,
        name,
      });
      setSuccess(response.data.message);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setName("");
      setTermsAgreed(false);
      setShowNotification(true);
    } catch (err) {
      console.error("Request failed:", err.response?.data);
      setError({
        form:
          err.response?.data?.message +
          ": " +
          (err.response?.data?.error || "Đăng ký thất bại!"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="loader w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full"></div>
        </div>
      )}
      <Notification
        isOpen={showNotification}
        onClose={() => setShowNotification(false)}
        message={"Đăng ký thành công!"}
      />
      <div className="w-full max-w-md mx-auto bg-white rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Đăng ký
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-md font-medium text-gray-700">
              Họ và tên
            </label>
            {error.name && (
              <p className="text-red-600 text-sm mb-2">{error.name}</p>
            )}
            <input
              type="text"
              className={`w-full px-3 py-2 border ${
                error.name ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500`}
              placeholder="Nhập họ và tên của bạn"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-md font-medium text-gray-700">
              Email
            </label>
            {error.email && (
              <p className="text-red-600 text-sm mb-2">{error.email}</p>
            )}
            <input
              type="email"
              className={`w-full px-3 py-2 border ${
                error.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500`}
              placeholder="Nhập Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-md font-medium text-gray-700">
              Mật khẩu
            </label>
            {error.password && (
              <p className="text-red-600 text-sm mb-2">{error.password}</p>
            )}
            <input
              type="password"
              className={`w-full px-3 py-2 border ${
                error.password ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500`}
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-md font-medium text-gray-700">
              Xác nhận mật khẩu
            </label>
            {error.confirmPassword && (
              <p className="text-red-600 text-sm mb-2">
                {error.confirmPassword}
              </p>
            )}
            <input
              type="password"
              className={`w-full px-3 py-2 border ${
                error.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500`}
              placeholder="Xác nhận lại mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="mb-6 relative">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded text-green-600 focus:ring-green-500"
                checked={termsAgreed}
                onChange={(e) => setTermsAgreed(e.target.checked)}
              />
              <span className="ml-2 text-sm text-gray-700">
                Tôi đồng ý với
                <a href="#" className="ml-1 text-green-600 hover:underline">
                  Điều khoản sử dụng và chính sách bảo mật
                </a>
              </span>
            </label>
            {error.termsAgreed && (
              <div className="top-full w-[220px] left-0 mt-1 bg-red-600 text-white text-xs rounded p-1 shadow-lg">
                {error.termsAgreed}
              </div>
            )}
          </div>

          <button
            type="submit"
            style={{ backgroundColor: "#16a34a" }}
            className="w-full py-2 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Đăng ký
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          <p className="inline">Quý khách đã có tài khoản? </p>
          <button
            onClick={toggleFormMode}
            className="text-green-600 hover:underline"
          >
            Đăng nhập?
          </button>
        </div>

        <div className="mt-2 text-center text-xs">
          <a href="#" className="text-green-600 hover:underline">
            Điều khoản sử dụng và chính sách bảo mật của SavvySub
          </a>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  toggleFormMode: PropTypes.func.isRequired,
};

export default Register;
