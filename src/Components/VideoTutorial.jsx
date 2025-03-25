// import React from 'react';
import { assets } from "../assets/assets";

const VideoTutorial = () => {
  return (
    <div className="text-center pt-20">
      <hr className="" />
      <p className="text-4xl font-bold text-gray-800 mt-10">
        Cách nhận khoá học <span className="text-green-700">Udemy</span> và mua sản phẩm trên <span className="text-green-700">Savvy Sub</span>?
      </p>
      <p className="text-gray-500 mt-3">
        Bạn chỉ cần nhập link khoá học và email, thanh toán sau đó nhận files qua GoogleDrive
      </p>
      <div className="flex justify-center items-center mt-10 space-x-10">
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md">
            <span className="text-2xl font-bold text-white bg-red-700 rounded-full w-10 h-10 flex items-center justify-center">01</span>
          </div>
          <img src={assets.step1} alt="Step 1" className="w-16 h-16 mt-4" />
          <p className="mt-2 text-gray-700">Nhập link khoá học bạn cần.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md">
            <span className="text-2xl font-bold text-white bg-red-700 rounded-full w-10 h-10 flex items-center justify-center">02</span>
          </div>
          <img src={assets.step2} alt="Step 2" className="w-16 h-16 mt-4" />
          <p className="mt-2 text-gray-700">Thanh toán đơn hàng.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md">
            <span className="text-2xl font-bold text-white bg-red-700 rounded-full w-10 h-10 flex items-center justify-center">03</span>
          </div>
          <img src={assets.step3} alt="Step 3" className="w-16 h-16 mt-4" />
          <p className="mt-2 text-gray-700">Nhận khoá học qua GoogleDrive.</p>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/eWopxCWzYU0?si=3heYVm4OLJvd8Q0J"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTutorial;