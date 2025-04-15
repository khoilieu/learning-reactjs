import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
// import { assets } from "../assets/assets";

const BlogTutorialDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setIsLoading(true);
        const baseUrl = import.meta.env.DEV ? "/api" : import.meta.env.VITE_API;
        const response = await fetch(`${baseUrl}/items/blog/${id}`, {
          headers: {
            Authorization: "Bearer xBcjNfyHV5XxOhC3zf4Zfd4lwHwzgXJg",
          },
        });
        const data = await response.json();
        setBlog(data.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setIsLoading(false); // Kết thúc loading sau khi dữ liệu được tải
      }
    };

    fetchBlog();
  }, [id]);

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
              className="text-gray-500 hover:text-black text-md font-semibold"
            >
              Blog Hướng Dẫn
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
              {blog?.title}
            </a>
          </li>
        </ol>
      </nav>
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center text-red-500">Không tìm thấy sản phẩm.</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 px-10 bg-white rounded-md mt-10 shadow-lg">
      {/* Breadcrumb */}
      <div className="max-w-5xl">
        <Breadcrumb />
      </div>

      {/* Blog Header */}
      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold text-gray-900">{blog.title}</h1>
        <div className="flex items-center justify-end mt-4 text-gray-600">
          <span className="ml-3 text-xs text-gray-500">Last Updated: 25/03/2025</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto px-12 mt-6">
        <div
          className="prose max-w-none text-gray-600 marker:text-black leading-7"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
};

export default BlogTutorialDetail;
