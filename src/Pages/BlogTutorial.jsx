import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Card from "../Components/Card";

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
            href="/blogtutorial"
            className="text-green-600 hover:text-green-700 text-md font-semibold"
          >
            Blog Hướng Dẫn
          </a>
        </li>
      </ol>
    </nav>
  );
};

const PlatformCard = ({ id, image, title, created }) => {
  const formattedDate = new Date(created).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <Card id={id} image={image} title={title} linkPrefix="blogtutorial">
      <p className="text-green-700 font-semibold">{formattedDate}</p>
    </Card>
  );
};

const BlogTutorial = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const baseUrl = import.meta.env.DEV ? "/api" : import.meta.env.VITE_API;
        const response = await fetch(`${baseUrl}/items/blog`, {
          headers: {
            Authorization: "Bearer xBcjNfyHV5XxOhC3zf4Zfd4lwHwzgXJg",
          },
        });
        const data = await response.json();
        const formattedProducts = data.data.map((item) => ({
          id: item.id,
          title: item.title,
          created: item.date_created,
          image: `${import.meta.env.VITE_API}/assets/${item.img}`,
        }));
        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
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
      <h1 className="text-2xl font-bold text-center text-black mb-4 mt-5">
        Tất cả blog hướng dẫn
      </h1>
      <p className="text-center text-green-600 mb-8">
        Mọi thắc mắc điều được giải đáp
      </p>
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

export default BlogTutorial;
