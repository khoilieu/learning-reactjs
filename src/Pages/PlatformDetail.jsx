import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCreditCard,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PaymentPopup from "../Components/PaymentPopup";
// import CommentSection from "../components/CommentSection";

const PlatformDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [email, setEmail] = useState("");
  const [coupon, setCoupon] = useState("");
  const [showPopupPay, setShowPopupPay] = useState(false);
  const [activeTab, setActiveTab] = useState("content");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleMouseEnter = (index) => {
    setHoveredRating(index);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = (index) => {
    setRating(index);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    console.log("Coupon applied:", coupon);
  };

  const handleBuyNowClick = () => {
    setShowPopupPay(true);
  };

  const handleClosePopup = () => {
    setShowPopupPay(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const baseUrl = import.meta.env.DEV ? "/api" : import.meta.env.VITE_API;

        // Fetch account
        const accountRes = await fetch(
          `${baseUrl}/items/account/${id}?fields=*,preview_images.*`,
          {
            headers: {
              Authorization: "Bearer xBcjNfyHV5XxOhC3zf4Zfd4lwHwzgXJg",
            },
          }
        );
        const accountData = await accountRes.json();
        setProduct(accountData.data);

        // Fetch feedback (lọc theo account)
        const feedbackRes = await fetch(
          `${baseUrl}/items/feedback?filter[account]=${id}`,
          {
            headers: {
              Authorization: "Bearer xBcjNfyHV5XxOhC3zf4Zfd4lwHwzgXJg",
            },
          }
        );
        const feedbackData = await feedbackRes.json();
        setComments(feedbackData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Kết thúc loading sau khi dữ liệu được tải
      }
    };

    fetchData();
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
              href="/platform"
              className="text-gray-500 hover:text-black text-md font-semibold"
            >
              Sản Phẩm
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
              href="/platform"
              className="text-green-600 hover:text-green-700 text-md font-semibold"
            >
              {product?.title}
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

  if (!product) {
    return (
      <div className="text-center text-red-500">Không tìm thấy sản phẩm.</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-2 px-10 bg-white rounded-md mt-10">
      <div className="max-w-5xl">
        <Breadcrumb />
      </div>
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto px-12 mt-5">
        <div className="flex-1">
          <img
            src={`${import.meta.env.VITE_API}/assets/${
              selectedImage || product.img
            }`}
            alt={product.title}
            className="w-full h-80 object-cover rounded"
          />
          <div className="flex mt-4 gap-2 overflow-x-auto">
            {product?.preview_images?.map((image) => (
              <img
                key={image.id}
                src={`${import.meta.env.VITE_API}/assets/${
                  image.directus_files_id
                }`}
                alt={`Preview ${image.id}`}
                className="w-24 h-24 object-cover rounded cursor-pointer"
                onClick={() => handleImageClick(image.directus_files_id)}
              />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-black mb-4">
            {product.title}
          </h1>
          <p className="text-red-500 text-xl font-bold line-through mb-2 opacity-70">
            {product.original_price}
          </p>
          <p className="text-green-700 text-2xl font-bold mb-4">
            {product.price}
          </p>
          <div
            className="prose max-w-none text-gray-600 mb-4 marker:text-black"
            dangerouslySetInnerHTML={{ __html: product.infor }}
          />
          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleBuyNowClick}
              className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transform-colors transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
              MUA NGAY
            </button>
            <button
              type="button"
              className="bg-blue-700 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transform-colors transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              THÊM VÀO GIỎ HÀNG
            </button>
          </div>
        </div>
      </div>
      <hr className="mt-10" />
      <div className="flex justify-center mt-5">
        <button
          onClick={() => handleTabClick("content")}
          className={`px-4 py-2 font-bold ${
            activeTab === "content"
              ? "text-green-700 border-b-2 border-green-700"
              : "text-gray-500"
          }`}
        >
          MÔ TẢ
        </button>
        <button
          onClick={() => handleTabClick("comment")}
          className={`px-4 py-2 font-bold ${
            activeTab === "comment"
              ? "text-green-700 border-b-2 border-green-700"
              : "text-gray-500"
          }`}
        >
          XEM ĐÁNH GIÁ & BÌNH LUẬN
        </button>
      </div>
      <AnimatePresence exitBeforeEnter>
        {activeTab === "content" && (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto px-12"
          >
            <div
              className="prose max-w-none text-gray-600 marker:text-black"
              dangerouslySetInnerHTML={{ __html: product.content }}
            />
          </motion.div>
        )}
        {activeTab === "comment" && (
          <motion.div
            key="comment"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto px-12 mt-5 flex justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6 text-green-700">
                {product.title} có {comments.length} đánh giá
              </h2>

              <div>
                {comments.map((comment) => (
                  <div key={comment.id} className="mb-4">
                    <div className="flex items-start mb-2">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/8801/8801434.png"
                        alt="User avatar"
                        className="w-10 h-10 rounded-full mr-2"
                      />
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <span className="font-semibold text-md">
                            {comment.name}
                          </span>
                          <hr className="w-3 mx-2 border border-black" />
                          <span className="text-black text-md">
                            {new Date(
                              comment.date_created
                            ).toLocaleDateString()}
                          </span>
                        </div>

                        <span className="text-yellow-500 text-2xl">
                          {"★".repeat(comment.rating)}
                          {"☆".repeat(5 - comment.rating)}
                        </span>

                        <p className="text-gray-700 font-sans">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <form className="mb-6 border-2 p-6 rounded-md border-green-700 w-96 mx-auto">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-green-700 text-center">
                    Đánh giá sản phẩm
                  </h2>
                </div>
                <div className="mb-2">
                  <label className="text-md font-semibold">
                    Đánh giá <span className="text-red-500">*</span>
                  </label>
                  <div className="flex p-1 justify-center">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <span
                        key={index}
                        className={`text-4xl cursor-pointer ${
                          index <= (hoveredRating || rating)
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(index)}
                      >
                        {index <= (hoveredRating || rating) ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="text-md font-semibold">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập họ và tên của bạn"
                    className="w-full border border-gray-300 rounded-md p-3 mt-2 text-sm"
                  />
                </div>
                <div className="mb-4 flex flex-col">
                  <label htmlFor="" className="text-md font-semibold">
                    Nội dung bình luận <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="Nội dung bình luận"
                    className="w-full border border-gray-300 rounded-md p-3 mt-2 text-sm"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300"
                  >
                    Gửi bình luận
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
          {/* Payment Popup */}
          <PaymentPopup
          show={showPopupPay}
          onClose={handleClosePopup}
          onSubmit={handleSubmit} 
          coupon={coupon}
          setCoupon={setCoupon}
          email={email}
          setEmail={setEmail}
          handleCouponChange={handleCouponChange}   // Passing the coupon change handler
          handleEmailChange={handleEmailChange}     // Passing the email change handler
      />
    </div>
  );
};

export default PlatformDetail;
