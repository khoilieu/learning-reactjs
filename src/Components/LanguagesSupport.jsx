// import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets } from "../assets/assets";

const LanguagesSupport = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="text-center">
      <hr className="" />
      <p className="text-4xl font-bold text-gray-800 mt-10">
        Đa Dạng <span className="text-red-700">Chủ Đề</span>, Nhiều <span className="text-red-700">Lĩnh Vực</span>
      </p>
      <p className="text-gray-500 mt-3">
        Chúng tôi tự hào cung cấp một bộ sưu tập đa dạng các khoá học trên nhiều lĩnh vực khác nhau, bao gồm lập trình, thiết kế đồ họa, kỹ năng mềm, tiếng Anh, marketing, quản lý dự án và nhiều lĩnh vực khác. Bất kể bạn quan tâm đến lĩnh vực nào, chúng tôi đều có khoá học phù hợp cho bạn, và tất cả đều có sẵn trên các trang web mà Savvy Sub hỗ trợ, như Udemy, Canva, ChatGPT,...
      </p>
      <Slider {...settings} className="mt-10">
        <div className='w-30 h-30 mx-auto mb-5'>
          <div className='flex justify-center items-center flex-col'>
            <img src={assets.nodejs} alt="Node Js" style={{ width: '100px', height: '100px' }} />
            <p className="mt-2 font-bold">Node Js</p>
          </div>
        </div>
        <div className='w-30 h-30 mx-auto mb-5'>
          <div className='flex justify-center items-center flex-col'>
            <img src={assets.html5} alt="HTML 5" style={{ width: '100px', height: '100px' }} />
            <p className="mt-2 font-bold">HTML 5</p>
          </div>
        </div>
        <div className='w-30 h-30 mx-auto mb-5'>
          <div className='flex justify-center items-center flex-col'>
            <img src={assets.jquery} alt="JQuery" style={{ width: '100px', height: '100px' }} />
            <p className="mt-2 font-bold">JQuery</p>
          </div>
        </div>
        <div className='w-30 h-30 mx-auto mb-5'>
          <div className='flex justify-center items-center flex-col'>
            <img src={assets.css} alt="CSS" style={{ width: '100px', height: '100px' }} />
            <p className="mt-2 font-bold">CSS</p>
          </div>
        </div>
        <div className='w-30 h-30 mx-auto mb-5'>
          <div className='flex justify-center items-center flex-col'>
            <img src={assets.react_native} alt="React Native" style={{ width: '100px', height: '100px' }} />
            <p className="mt-2 font-bold">React Native</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default LanguagesSupport;