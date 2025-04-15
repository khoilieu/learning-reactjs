// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="text-white text-sm py-10 px-5 md:px-10 lg:px-20 xl:px-48 w-full" style={{ backgroundColor: '#008052' }}>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-lg font-bold mb-4 text-center md:text-left">SAVVY SUB</h2>
          <p className="text-sm text-justify">
            SavvySub là nền tảng hàng đầu chuyên cung cấp khóa học trực tuyến và tài khoản bản quyền với giá cả hợp lý nhất. Chúng tôi giúp bạn dễ dàng tiếp cận các dịch vụ cao cấp như YouTube Premium, Udemy Business, ChatGPT Plus, Adobe, Office 365, Canva Pro, Google One, Spotify Premium, Netflix, Elsa Pro, Duolingo và nhiều sản phẩm khác, đảm bảo trải nghiệm học tập và giải trí chất lượng.
          </p>
          <div className="mt-4 text-center md:text-left flex flex-col items-center md:items-center">
            <strong className='text-sm mb-2'>Chứng Nhận & Bản Quyền</strong>
            <img src="https://kinsta.com/wp-content/uploads/2019/04/DMCA-protected.png" alt="DMCA" className="w-24" />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">THÔNG TIN VÀ CHÍNH SÁCH</h2>
          <ul className="text-sm space-y-2">
            <li><a href="/about" className="hover:underline"><FontAwesomeIcon icon={faChevronRight} size="xs" className='mr-2' /> Giới thiệu về chúng tôi</a></li>
            <hr />
            <li><a href="#" className="hover:underline"><FontAwesomeIcon icon={faChevronRight} size="xs" className='mr-2' /> Chính sách thanh toán</a></li>
            <hr />
            <li><a href="#" className="hover:underline"><FontAwesomeIcon icon={faChevronRight} size="xs" className='mr-2' /> Chính sách bảo mật</a></li>
            <hr />
            <li><a href="#" className="hover:underline"><FontAwesomeIcon icon={faChevronRight} size="xs" className='mr-2' /> Điều khoản sử dụng</a></li>
            <hr />
            <li><a href="#" className="hover:underline"><FontAwesomeIcon icon={faChevronRight} size="xs" className='mr-2' /> Chính sách giao hàng</a></li>
            <hr />
            <li><a href="#" className="hover:underline"><FontAwesomeIcon icon={faChevronRight} size="xs" className='mr-2'/> Chính sách bảo hành</a></li>
          </ul>
          <div className="mt-10 text-center">
            <p className="text-sm">Phương thức thanh toán</p>
            <div className="flex justify-center space-x-4 my-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="Visa" className="w-12 h-7" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mastercard-logo.png/1200px-Mastercard-logo.png" alt="MasterCard" className="w-12 h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/ATM_logo.svg/1200px-ATM_logo.svg.png?20230709124333" alt="ATM" className="w-12 h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/1200px-PayPal_logo.svg.png" alt="PayPal" className="w-12 h-7" />
            </div>
            <p className="text-sm mt-3">Copyright 2025 © SavvySub</p>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">LIÊN HỆ</h2>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
            <button className="bg-orange-600 shadow-lg shadow-gray-600 text-white py-3 px-7 font-bold rounded-lg hover:bg-orange-700 transform-bg duration-500">TƯ VẤN</button>
            <button className="bg-red-600 shadow-lg shadow-gray-600 text-white py-3 px-7 font-bold rounded-lg hover:bg-red-700 transform-bg duration-500">BẢO HÀNH</button>
          </div>
          <p className="text-sm mb-2"><strong>Hotline:</strong>  088 859 1891</p>
          <p className="text-sm mb-2"><strong>Website:</strong>  https://savvysub.com</p>
          <p className="text-sm mb-2"><strong>Facebook:</strong>  https://www.facebook.com/savvysub</p>
          <p className="text-sm mb-2"><strong>Telegram:</strong>  @quocthong_nqt</p>
          <p className="text-sm mb-2"><strong>Email:</strong> cskh.quantraai@gmail.com</p>
          <p className="text-sm mb-4"><strong>Địa chỉ:</strong> 71/1 Nguyễn Văn Thương, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;