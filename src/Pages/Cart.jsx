import { useState } from "react";
import Title from "../Components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

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
            href="/courses"
            className="text-green-600 hover:text-green-700 text-md font-semibold"
          >
            Kiểm Tra Giỏ Hàng
          </a>
        </li>
      </ol>
    </nav>
  );
};

const Cart = () => {
  const [cartData, setCartData] = useState([
    {
      _id: "1",
      name: "Khóa học A",
      price: 550000,
      size: "L",
      quantity: 1,
      image:
        "https://st2.depositphotos.com/1350793/8441/i/450/depositphotos_84415820-stock-photo-hand-drawing-online-courses-concept.jpg",
    },
    {
      _id: "2",
      name: "Khóa học B",
      price: 550000,
      size: "M",
      quantity: 1,
      image:
        "https://st2.depositphotos.com/1350793/8441/i/450/depositphotos_84415820-stock-photo-hand-drawing-online-courses-concept.jpg",
    },
  ]);

  const [platformData, setPlatformData] = useState([
    {
      _id: "1",
      name: "Nền tảng A",
      price: 550000,
      size: "L",
      quantity: 1,
      image:
        "https://whop.com/blog/content/images/2024/05/What-is-Udemy-Pros--Cons--and-Features-2024-Review.webp",
    },
    {
      _id: "2",
      name: "Nền tảng B",
      price: 550000,
      size: "M",
      quantity: 1,
      image:
        "https://whop.com/blog/content/images/2024/05/What-is-Udemy-Pros--Cons--and-Features-2024-Review.webp",
    },
  ]);

  const updateQuantity = (id, size, quantity) => {
    setCartData((prevData) =>
      prevData.map((item) =>
        item._id === id && item.size === size
          ? { ...item, quantity: quantity }
          : item
      )
    );
  };

  const removeItem = (id, size) => {
    setCartData((prevData) =>
      prevData.filter((item) => !(item._id === id && item.size === size))
    );
  };

  const removePlatform = (id, size) => {
    setPlatformData((prevData) =>
      prevData.filter((item) => !(item._id === id && item.size === size))
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-2 px-4 sm:px-10 bg-white rounded-md mt-10">
      <Breadcrumb />
      <div className="mb-3 text-3xl text-center">
        <Title text1={"Giỏ Hàng"} text2={"Của Bạn"} />
      </div>
      <div className="flex justify-center items-center mb-5 py-5 bg-green-200 text-lg">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-green-600 text-white rounded-full">
            1
          </div>
          <span className="mx-2">Kiểm Tra Giỏ Hàng</span>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="ml-2 mr-4 text-gray-500"
          />
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-400 text-white rounded-full">
            2
          </div>
          <span className="mx-2">Thanh Toán Đơn Hàng</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Khóa học của bạn</h2>
          <div className="border-2 p-4 mb-6 rounded-md">
            <div className="grid grid-cols-12 text-center font-bold mb-2">
              <span className="col-span-1"></span>
              <span className="col-span-4">Khóa học</span>
              <span className="col-span-2">Giá</span>
              <span className="col-span-2">Số lượng</span>
              <span className="col-span-3">Tạm tính</span>
            </div>
            {cartData.map((item, index) => (
              <div
                key={index}
                className="py-3 border-b text-gray-700 grid grid-cols-12 items-center gap-4"
              >
                <div
                  className="flex justify-center col-span-1 cursor-pointer hover:scale-110 transition-transform duration-300"
                  onClick={() => removeItem(item._id, item.size)}
                >
                  ⛔
                </div>
                <div className="flex items-center col-span-4">
                  <img src={item.image} alt="" className="w-16 sm:w-20" />
                  <p className="text-md sm:text-md font-medium ml-4">
                    {item.name}
                  </p>
                </div>
                <div className="col-span-2 text-center">
                  <p className="text-md">{item.price.toLocaleString()} VND</p>
                </div>
                <div className="flex items-center justify-center col-span-2">
                  <input
                    onChange={(e) => {
                      e.target.value === "" || e.target.value < 0
                        ? null
                        : updateQuantity(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          );
                    }}
                    className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 text-center"
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                  />
                </div>
                <div className="col-span-3 text-center">
                  <p className="text-md">
                    {(item.price * item.quantity).toLocaleString()} VND
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold mb-4">Nền tảng của bạn</h2>
          <div className="border-2 p-4 rounded-md">
            <div className="grid grid-cols-12 text-center font-bold mb-2">
              <span className="col-span-1"></span>
              <span className="col-span-4">Nền tảng</span>
              <span className="col-span-2">Giá</span>
              <span className="col-span-2">Số lượng</span>
              <span className="col-span-3">Tạm tính</span>
            </div>
            {platformData.map((item, index) => (
              <div
                key={index}
                className="py-3 border-b text-gray-700 grid grid-cols-12 items-center gap-4"
              >
                <div
                  className="flex justify-center col-span-1 cursor-pointer hover:scale-110 transition-transform duration-300"
                  onClick={() => removePlatform(item._id, item.size)}
                >
                  ⛔️
                </div>
                <div className="flex items-center col-span-4">
                  <img src={item.image} alt="" className="w-16 sm:w-20" />
                  <p className="text-md sm:text-md font-medium ml-4">
                    {item.name}
                  </p>
                </div>
                <div className="col-span-2 text-center">
                  <p className="text-md">{item.price.toLocaleString()} VND</p>
                </div>
                <div className="flex items-center justify-center col-span-2">
                  <input
                    onChange={(e) => {
                      e.target.value === "" || e.target.value < 0
                        ? null
                        : updateQuantity(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          );
                    }}
                    className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 text-center"
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                  />
                </div>
                <div className="col-span-3 text-center">
                  <p className="text-md">
                    {(item.price * item.quantity).toLocaleString()} VND
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="border-2 pl-4 pt-4 pr-4 pb-0 mb-4 rounded-md">
            <h2 className="text-xl font-bold mb-4">Mã giảm giá</h2>
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Nhập mã ưu đãi"
                className="w-full p-1 border text-md rounded-md"
              />
              <button className="bg-yellow-500 text-white p-1 ml-2 font-semibold text-sm hover:bg-yellow-400 hover:text-white transition-colors duration-300 rounded-md">
                Áp dụng
              </button>
            </div>
          </div>
          <div className="border-2 pl-4 pt-4 pr-4 pb-0 mb-4 rounded-md">
            <h2 className="text-xl font-bold mb-4">Thông tin thanh toán</h2>
            <input
              type="email"
              placeholder="Nhập địa chỉ email của bạn"
              className="w-full p-2 border mb-4 text-md rounded-md"
            />
          </div>

          <div className="border-2 p-4 rounded-md">
            <h2 className="text-xl font-bold mb-4">Chi phí thanh toán</h2>
            <div className="flex justify-between mb-2 text-md">
              <span>Tổng phụ khóa học</span>
              <span>550.000 VND</span>
            </div>
            <div className="flex justify-between mb-2 text-md">
              <span>Tổng phụ nền tảng</span>
              <span>550.000 VND</span>
            </div>
            <div className="flex justify-between mb-2 text-md">
              <span>Giảm giá</span>
              <span>-50.000 VND</span>
            </div>
            <div className="flex justify-between font-bold text-lg mb-2 text-red-600">
              <span>Tổng</span>
              <span>1.050.000 VND</span>
            </div>
          </div>
          <button
            onClick={() => {
              window.location.href = "/checkout";
            }}
            className="w-full bg-green-700 text-white py-3 mt-4 font-semibold rounded-md hover:bg-green-600 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
            TIẾN HÀNH THANH TOÁN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
