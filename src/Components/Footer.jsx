import { assets } from '../assets/assets';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="mt-20 bg-white py-5">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm text-gray-600">
          © 2025 Savvy Sub. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Về chúng tôi</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Chính sách bảo mật</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Liên Hệ</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Hỗ Trợ</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Fanpage</a>
        </div>
        <button
          onClick={scrollToTop}
          className="bg-gray-100 text-gray-600 text-sm py-2 px-4 rounded-full hover:bg-gray-200"
        >
          Tiếng Việt
        </button>
      </div>
    </div>
  );
};

export default Footer;