import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Card from '../Components/Card';
// import PropTypes from 'prop-types';



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
          <a href="/platform" className="text-green-600 hover:text-green-700 text-md font-semibold">Sản Phẩm</a>
        </li>
      </ol>
    </nav>
  );
};


const PlatformCard = ({ id, image, title, price }) => {
  return (
    <Card id={id} image={image} title={title} linkPrefix="platform">
      <p className="text-green-700 font-semibold">{price}</p>
    </Card>
  );
};

const Platforms = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const baseUrl = import.meta.env.DEV ? '/api' : import.meta.env.VITE_API;
        const response = await fetch(`${baseUrl}/items/account`, {
          headers: {
            'Authorization': 'Bearer xBcjNfyHV5XxOhC3zf4Zfd4lwHwzgXJg'
          }
        });
        console.log('response data:', response);
        const data = await response.json();
        console.log('data:', data);
        const formattedProducts = data.data.map(item => ({
          id: item.id,
          title: item.title,
          price: item.price,
          image: `${import.meta.env.VITE_API}/assets/${item.img}`
        }));
        console.log('formattedProducts:', formattedProducts);
        setProducts(formattedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-2 px-10 bg-white rounded-md mt-10">
      <div className="max-w-5xl">
        <Breadcrumb />
      </div>
      <h1 className="text-2xl font-bold text-center text-black mb-4 mt-5">Cửa hàng - Sản phẩm tài khoản bản quyền</h1>
      <p className="text-center text-green-600 mb-8">Giá rẻ, giá tốt nhất</p>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <PlatformCard key={index} {...product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="mt-6 bg-green-100 text-green-700 text-sm py-3 px-10 rounded-md border-none hover:bg-green-700 hover:text-white transition-colors-transform duration-300 hover:transform hover:scale-105">
              Tải thêm sản phẩm
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Platforms;