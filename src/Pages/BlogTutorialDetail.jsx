import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const BlogTutorialDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
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
      }
    };

    fetchBlog();
  }, [id]);

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
            <a href="/blogtutorial" className="text-gray-500 hover:text-black text-md font-semibold">Blog Hướng Dẫn</a>
          </li>
          <li>
            <span className="mx-2"><FontAwesomeIcon icon={faChevronRight} /><FontAwesomeIcon icon={faChevronRight} /></span>
          </li>
          <li>
            <a href="/blogtutorial" className="text-green-600 hover:text-green-700 text-md font-semibold">{blog?.title}</a>
          </li>
        </ol>
      </nav>
    );
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-2 px-10 bg-white rounded-md mt-10">
      <div className="max-w-5xl">
        <Breadcrumb />
      </div>
      
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto px-12">
        <div className="prose max-w-none text-gray-600 marker:text-black" dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>

    </div>
  );
};

export default BlogTutorialDetail;