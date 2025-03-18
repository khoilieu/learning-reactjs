import { useState, useEffect } from "react";
import Title from "../Components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";

const Breadcrumb = () => {
  return (
    <nav className="text-sm mb-4">
      <ol className="list-reset flex">
        <li>
          <a
            href="/"
            className="text-gray-500 hover:text-black text-md font-semibold"
          >
            🏠︎ Trang Chủ
          </a>
        </li>
        <li>
          <span className="mx-2">
            <FontAwesomeIcon icon={faChevronRight} />
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </li>
        <li>
          <a
            href="/cart"
            className="text-gray-500 hover:text-black text-md font-semibold"
          >
            Giỏ Hàng
          </a>
        </li>
        <li>
          <span className="mx-2">
            <FontAwesomeIcon icon={faChevronRight} />
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </li>
        <li>
          <a
            href="/checkout"
            className="text-green-600 hover:text-green-700 text-md font-semibold"
          >
            Thanh Toán Đơn Hàng
          </a>
        </li>
      </ol>
    </nav>
  );
};

const Checkout = () => {
  // Function to format the current date
  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  // Get the current date
  const currentDate = formatDate(new Date());

  // Hardcoded values from cart
  const accountInfo = {
    accountName: "MOMO_SavvySub",
    accountNumber: "0111 222 333 4444",
    bankName: "Ví Momo",
    amount: "1.485.000 VND",
    transferContent: "SVSUB123",
    orderId: "123456",
    discount: "-50.000 VND",
    totalAmount: "1.485.000 VND",
    paymentMethod: "Chuyển Khoản Ngân Hàng (Quét Mã QR)",
  };

  // Hardcoded order details
  const courseOrders = [
    {
      name: "Udemy Business (12 tháng)",
      quantity: 1,
      price: "399.000 VND",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Youtube Premium (12 tháng)",
      quantity: 1,
      price: "299.000 VND",
      image: "https://via.placeholder.com/150",
    },
  ];

  const platformOrders = [
    {
      name: "Udemy Business (12 tháng)",
      quantity: 1,
      price: "399.000 VND",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Youtube Premium (12 tháng)",
      quantity: 1,
      price: "299.000 VND",
      image: "https://via.placeholder.com/150",
    },
  ];

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  const CopyText = ({ text }) => {
    const [copied, setCopied] = useState(false);
  
    const handleCopy = () => {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // Reset icon sau 3 giây
    };
  
    return (
      <span className="flex items-center">
        {text}
        <button onClick={handleCopy} className="ml-2 text-gray-300 hover:text-gray-400">
          <FontAwesomeIcon icon={copied ? faCheck : faCopy} className={copied ? "text-green-500" : ""} />
        </button>
      </span>
    );
  };
  

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
  };
  

  return (
    <div className="max-w-7xl mx-auto p-2 px-4 sm:px-10 bg-white rounded-md mt-10">
      <Breadcrumb />
      <div className="mb-3 text-3xl text-center">
        <Title text1={"Hoàn Tất"} text2={"Thanh Toán Đơn Hàng"} />
      </div>
      <div className="flex justify-center items-center mb-5 py-5 bg-green-200 text-lg">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-green-600 text-white rounded-full">
            1
          </div>
          <span className="mx-2">Kiểm Tra Giỏ Hàng</span>
          <FontAwesomeIcon icon={faChevronRight} className="ml-2 mr-4 text-gray-500" />
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-green-600 text-white rounded-full">
            2
          </div>
          <span className="mx-2">Thanh Toán Đơn Hàng</span>
        </div>
      </div>
      <div className="mb-5 text-center">
        <p>
          Xin chào <span className="font-semibold">example@gmail.com</span>, đơn
          hàng của bạn đã được xác nhận. Các thông tin khóa học hoặc tài khoản
          sẽ được gửi về email của bạn trong khoảng 2 giờ làm việc sau khi bạn
          thanh toán! Bạn chuyển khoản hãy ghi{" "}
          <span className="font-semibold">DÙNG NỘI DUNG CHUYỂN KHOẢN</span>. Cảm
          ơn bạn đã mua khóa học tại{" "}
          <span className="text-md font-semibold">SAVVY SUB</span>.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        <div className="lg:col-span-1">
          <div className="border-2 p-4 rounded-md mb-6">
            <h2 className="text-xl font-bold mb-4 text-green-700">
              THÔNG TIN CHUYỂN KHOẢN
            </h2>
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="font-normal p-2">Chủ Tài Khoản:</td>
                  <td className="font-semibold p-2">
                    {accountInfo.accountName}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-normal p-2">Số Tài Khoản:</td>
                  <td className="font-semibold p-2">
                    <CopyText text={accountInfo.accountNumber} />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-normal p-2">Ngân Hàng:</td>
                  <td className="font-semibold p-2">{accountInfo.bankName}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-normal p-2">Số Tiền:</td>
                  <td className="font-semibold text-red-600 p-2">
                    {accountInfo.amount}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-normal p-2">Nội Dung Chuyển Khoản:</td>
                  <td className="font-semibold p-2">
                    <CopyText text={accountInfo.transferContent} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border-2 p-4 rounded-md">
            <h2 className="text-xl font-bold mb-4 text-green-700">
              THÔNG TIN ĐƠN HÀNG
            </h2>
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="font-normal p-2">Mã Đơn Hàng:</td>
                  <td className="font-semibold p-2">{accountInfo.orderId}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-normal p-2">Ngày Tạo Đơn:</td>
                  <td className="font-semibold p-2">{currentDate}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-normal p-2">Đã Giảm Giá:</td>
                  <td className="font-semibold text-green-600 p-2">
                    {accountInfo.discount}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-normal p-2">Tổng Cộng:</td>
                  <td className="font-semibold text-red-600 p-2">
                    {accountInfo.totalAmount}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-normal p-2">Phương Thức Thanh Toán:</td>
                  <td className="font-semibold p-2">
                    {accountInfo.paymentMethod}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:col-span-1">
          <h2 className="text-xl font-bold mb-4 text-green-700">
            QUÉT MÃ ĐỂ THANH TOÁN
          </h2>
          <div className="text-red-600 font-bold text-lg">
            {formatTime(timeLeft)}
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98JRBo3YPxLySOYN2Ad4g1XR1egozDzmKmA&s"
            alt="QR Code"
            className="w-96 h-96"
          />
          <p className="text-center">
            Sử dụng App ngân hàng quét mã QR để thanh toán, có thể chuyển nhanh
            24/7 với từ ngân hàng khác.
          </p>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-4 text-green-700">
        CHI TIẾT ĐƠN HÀNG
      </h2>
      <div className="p-4 rounded-md mb-10">
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">KHÓA HỌC</h3>
          <div className="p-4 rounded-md border-2 border-green-700">
            <div className="grid grid-cols-3 text-center font-bold mb-2">
              <span>Sản Phẩm</span>
              <span>Số Lượng</span>
              <span>Chi Phí</span>
            </div>
            {courseOrders.map((order, index) => (
              <div
                key={index}
                className="py-3 border-b text-green-700 grid grid-cols-3 items-center gap-4"
              >
                <div className="flex items-center justify-center">
                  <img src={order.image} alt="" className="w-16 sm:w-20" />
                  <p className="text-md sm:text-md font-medium ml-4">
                    {order.name}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-md">{order.quantity}</p>
                </div>
                <div className="text-center">
                  <p className="text-md">{order.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">NỀN TẢNG</h3>
          <div className="p-4 rounded-md border-2 border-green-700">
            <div className="grid grid-cols-3 text-center font-bold mb-2">
              <span>Sản Phẩm</span>
              <span>Số Lượng</span>
              <span>Chi Phí</span>
            </div>
            {platformOrders.map((order, index) => (
              <div
                key={index}
                className="py-3 border-b grid grid-cols-3 items-center gap-4 text-green-700"
              >
                <div className="flex items-center justify-center">
                  <img src={order.image} alt="" className="w-16 sm:w-20" />
                  <p className="text-md sm:text-md font-medium ml-4">
                    {order.name}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-md">{order.quantity}</p>
                </div>
                <div className="text-center">
                  <p className="text-md">{order.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
