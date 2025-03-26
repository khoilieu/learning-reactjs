import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const PaymentPopup = ({ show, onClose, onSubmit, coupon, setCoupon, email, setEmail }) => {
  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(); // Gọi hàm onSubmit từ ngoài (thực hiện submit dữ liệu)
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-start pt-14 z-50 justify-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white p-8 rounded-md shadow-lg max-w-lg w-full"
      >
        <div className="flex justify-between items-center mb-5 border-b border-gray-300 pb-2">
          <h2 className="text-xl font-bold">Thông tin thanh toán</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FontAwesomeIcon icon={faClose} size="lg" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex justify-between">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)} // Cập nhật coupon
              placeholder="Nhập mã giảm giá"
              className="text-sm p-2 border border-gray-300 rounded-md w-8/12"
            />
            <button
              type="button"
              className="text-sm bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors duration-300"
            >
              ÁP DỤNG
            </button>
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Cập nhật email
            placeholder="Email mua hàng"
            className="text-sm p-2 border border-gray-300 rounded-md"
            required
          />
          <p className="text-xs text-gray-500 text-justify border-b border-gray-300 pb-2">
            <span className="text-red-700">Lưu ý:</span> Hãy nhập chính xác
            địa chỉ email của bạn vì email này sẽ được dùng để nhận thông
            tin đơn hàng khi bạn thanh toán thành công.
          </p>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="text-sm bg-gray-300 text-gray-700 font-bold py-2 px-5 rounded-md hover:bg-gray-400 transition-colors duration-300"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="text-sm bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
              
            >
              
              Xác nhận
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default PaymentPopup;
