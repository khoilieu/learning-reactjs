import { useState } from "react";
import PropTypes from "prop-types";

const Register = ({ toggleFormMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
    } else {
      console.log("Registering with", name, email, password);
    }
  };

  return (
    <div className="min-h-scree items-center justify-center py-8">
    <div className="w-full max-w-md p-6 mx-auto bg-white rounded-lg">
      <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">Đăng ký</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Họ và tên</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            placeholder="Nhập họ và tên của bạn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            placeholder="Nhập Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Mật khẩu</label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">Xác nhận mật khẩu</label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            placeholder="Xác nhận lại mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 border-gray-300 rounded text-green-600 focus:ring-green-500"
              checked={termsAgreed}
              onChange={(e) => setTermsAgreed(e.target.checked)}
              required
            />
            <span className="ml-2 text-sm text-gray-700">
              Tôi đồng ý với
              <a href="#" className="ml-1 text-green-600 hover:underline">Điều khoản sử dụng và chính sách bảo mật</a>
            </span>
          </label>
        </div>

        <button
          type="submit"
          style={{ backgroundColor: '#16a34a' }}
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
