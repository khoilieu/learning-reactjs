import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Breadcrumb = () => {
  return (
    <nav className="text-sm mb-4">
      <ol className="list-reset flex">
        <li>
          <a href="/" className="text-gray-500 hover:text-black text-md font-semibold">🏠︎ Trang Chủ</a>
        </li>
        <li>
          <span className="mx-2"><FontAwesomeIcon icon={faChevronRight} /><FontAwesomeIcon icon={faChevronRight} /></span>
        </li>
        <li>
          <a href="/platforms" className="text-blue-400 hover:text-blue-700 text-md font-semibold">Sản Phẩm</a>
        </li>
      </ol>
    </nav>
  );
};

const PlatformCard = ({ image, name, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">
          <a href="#" className="text-gray-600 hover:text-blue-700">{name}</a>
        </h3>
        <p className="text-blue-700 font-semibold">{price} VND</p>
      </div>
    </div>
  );
};

const Platforms = () => {
  const products = [
    {
      name: "YouTube Premium",
      price: "399.000",
      image: "https://sadesign.vn/pictures/picfullsizes/2024/09/30/rgf1727672607.jpg"
    },
    {
      name: "Tài khoản Udemy Business",
      price: "299.000",
      image: "https://sadesign.vn/pictures/picfullsizes/2024/12/13/udemy-noi-hoi-tu-nhung-khoa-hoc-chat-luong-cao-nhat-11.jpg"
    },
    {
      name: "Nâng cấp Gemini Advanced PRO 2.0 chính chủ",
      price: "199.000",
      image: "https://i0.wp.com/software.centrix.asia/wp-content/uploads/2024/03/gemini-advanced-pro.webp"
    },
    {
      name: "Mua dung lượng Google Drive (12 tháng)",
      price: "150.000",
      image: "https://v2.fullbootcamp.com/uploads/nang_cap_tai_khoan_google_e173165a5c.png"
    },
    {
      name: "Nâng cấp tài khoản Canva giá rẻ (12 tháng)",
      price: "99.000",
      image: "https://divineshop.vn/image/catalog/Canva-giahan-1nam-13476.png?hash=1730437636"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-2 px-10 bg-white rounded-md mt-10">
      <div className="max-w-5xl mx-auto p-2 px-10">
        <Breadcrumb />
      </div>
      <h1 className="text-2xl font-bold text-center text-black mb-4 mt-5">Cửa hàng - Sản phẩm tài khoản bản quyền</h1>
      <p className="text-center text-gray-600 mb-8">Giá rẻ, giá tốt nhất</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <PlatformCard key={index} {...product} />
        ))}
      </div>
      <div className="text-center mt-8">
      <button className="mt-6 bg-blue-100 text-blue-700 text-sm py-3 px-10 rounded-md border-none hover:bg-blue-700 hover:text-white transition-colors-transform duration-300 hover:transform hover:scale-105">Tải thêm sản phẩm</button>
      </div>
    </div>
  );
};

export default Platforms;