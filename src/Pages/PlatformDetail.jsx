import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

const PlatformDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/items/account/${id}`, {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-4">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Nhập email của bạn"
              className="p-2 border border-gray-300 rounded-md"
              required
            />
            <button type="submit" className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transform-colors transition-colors duration-300">
                <FontAwesomeIcon icon={faCreditCard} className="mr-2" />        
                MUA NGAY 
            </button>
          </form>
        </div>
      </div>
      <hr className='mt-10' />
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto px-12">
        <div className="prose max-w-none text-gray-600 marker:text-black" dangerouslySetInnerHTML={{ __html: product.content }} />
      </div>
    </div>
  );
};

export default PlatformDetail;