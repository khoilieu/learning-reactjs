import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCreditCard, faShoppingCart, faClose } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";


const PlatformDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [email, setEmail] = useState('');
  const [coupon, setCoupon] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/http/items/account/${id}`, {
          headers: {
            'Authorization': 'Bearer xBcjNfyHV5XxOhC3zf4Zfd4lwHwzgXJg'
          }
        });
        const data = await response.json();
        setProduct(data.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
    console.log('Coupon applied:', coupon);
  };

  const handleBuyNowClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

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
            <a href="/platforms" className="text-gray-500 hover:text-black text-md font-semibold">Sản Phẩm</a>
          </li>
          <li>
            <span className="mx-2"><FontAwesomeIcon icon={faChevronRight} /><FontAwesomeIcon icon={faChevronRight} /></span>
          </li>
          <li>
            <a href="/platforms" className="text-green-600 hover:text-green-700 text-md font-semibold">{product?.title}</a>
          </li>
        </ol>
      </nav>
    );
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-2 px-10 bg-white rounded-md mt-10">
      <div className="max-w-5xl">
        <Breadcrumb />
      </div>
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto px-12 mt-5">
        <div className="flex-1">
          <img src={`${import.meta.env.VITE_API}/assets/${product.img}`} alt={product.title} className="w-full h-80 object-cover" />
          <div className="flex mt-4 gap-2">
            <img src={`${import.meta.env.VITE_API}/assets/${product.img}`} alt={product.title} className="w-24 h-24 object-cover" />
            <img src={`${import.meta.env.VITE_API}/assets/${product.img}`} alt={product.title} className="w-24 h-24 object-cover" />
            <img src={`${import.meta.env.VITE_API}/assets/${product.img}`} alt={product.title} className="w-24 h-24 object-cover" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-black mb-4">{product.title}</h1>
          <p className="text-red-500 text-xl font-bold line-through mb-2 opacity-70">{product.original_price}</p>
          <p className="text-green-700 text-2xl font-bold mb-4">{product.price}</p>
          <div className="prose max-w-none text-gray-600 mb-4 marker:text-black" dangerouslySetInnerHTML={{ __html: product.infor }} />
          <div className="flex gap-4">
            <button type="button" onClick={handleBuyNowClick} className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transform-colors transition-colors duration-300">
              <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
              MUA NGAY
            </button>
            <button type="button" className="bg-blue-700 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transform-colors transition-colors duration-300">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              THÊM VÀO GIỎ HÀNG
            </button>
          </div>
        </div>
      </div>
      <hr className='mt-10' />
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto px-12">
        <div className="prose max-w-none text-gray-600 marker:text-black" dangerouslySetInnerHTML={{ __html: product.content }} />
      </div>

      {showPopup && (
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
              <button onClick={handleClosePopup} className="text-gray-500 hover:text-gray-700">
                <FontAwesomeIcon icon={faClose} size='lg' />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex justify-between">
                <input
                  type="text"
                  value={coupon}
                  onChange={handleCouponChange}
                  placeholder="Nhập mã giảm giá"
                  className="text-sm p-2 border border-gray-300 rounded-md w-8/12"
                />
                <button type="button" className="text-sm bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors duration-300">
                  ÁP DỤNG
                </button>
              </div>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email mua hàng"
                className="text-sm p-2 border border-gray-300 rounded-md"
                required
              />
              <p className="text-xs text-gray-500 text-justify border-b border-gray-300 pb-2">
                <span className='text-red-700'>Lưu ý:</span> Hãy nhập chính xác địa chỉ email của bạn vì email này sẽ được dùng để nhận thông tin đơn hàng khi bạn thanh toán thành công.
              </p>
              <div className="flex justify-end gap-4">
                <button type="button" onClick={handleClosePopup} className="text-sm bg-gray-300 text-gray-700 font-bold py-2 px-5 rounded-md hover:bg-gray-400 transition-colors duration-300">
                  Hủy
                </button>
                <button type="submit" className="text-sm bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Xác nhận
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PlatformDetail;