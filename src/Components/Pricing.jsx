import React from 'react';

const Pricing = () => {
  return (
    <div className="text-center pt-20">
      <hr className="" />
      <p className="text-4xl font-bold text-gray-800 mt-10">
        Bảng Giá
      </p>
      <p className="text-gray-500 mt-3">
        Bạn hãy mua khoá học theo Combo để được giảm giá.
      </p>
      <div className="flex flex-wrap justify-center items-center mt-10 space-x-0 md:space-x-10">
        <div className="bg-white rounded-lg shadow-lg w-full md:w-80 mb-10 md:mb-0">
          <div className="bg-blue-950 text-left p-8 rounded-t-lg">
            <h3 className="text-l text-white">Mua lẻ</h3>
            <p className="text-3xl font-bold text-white mt-4">40K / Khóa</p>
            <p className="text-sm text-white mt-2">Gói mua thử và trải nghiệm</p>
          </div>
          <div className="p-6">
            <ul className="text-left mt-5 mb-5 ml-8 space-y-2">
              <li className="flex items-center">
                <span className="text-blue-950 mr-2">✔</span> <p className='text-sm text-gray-600'>Đầy đủ video</p>
              </li>
              <li className="flex items-center">
                <span className="text-blue-950 mr-2">✔</span> <p className='text-sm text-gray-600'>Không chặn download</p>
              </li>
              <li className="flex items-center">
                <span className="text-blue-950 mr-2">✔</span> <p className='text-sm text-gray-600'>Update miễn phí</p>
              </li>
              <li className="flex items-center">
                <span className="text-blue-950 mr-2">✔</span> <p className='text-sm text-gray-600'>24/7 Full support</p>
              </li>
            </ul>
            <button className="mt-6 bg-purple-100 text-purple-700 text-sm py-3 px-10 rounded-md border-none hover:bg-purple-700 hover:text-white transition-colors-transform duration-300 hover:transform hover:scale-105">Tải khóa học ngay!</button>
          </div>
        </div>


        <div className="bg-blue-950 rounded-lg shadow-lg w-full md:w-80 mb-10 md:mb-0">
          <div className="bg-blue-950 text-left p-8 rounded-t-lg">
            <h3 className="text-l text-white">Combo 5 khóa</h3>
            <p className="text-3xl font-bold text-white mt-4">Giảm 10%</p>
            <p className="text-sm text-white mt-2">Combo 5 khoá tiết kiệm 10%</p>
          </div>
          <div className="p-6">
            <ul className="text-left mt-5 mb-5 ml-8 space-y-2">
              <li className="flex items-center">
                <span className="text-white mr-2">✔</span> <p className='text-sm text-white'>Đầy đủ video</p>
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">✔</span> <p className='text-sm text-white'>Không chặn download</p>
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">✔</span> <p className='text-sm text-white'>Update miễn phí</p>
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">✔</span> <p className='text-sm text-white'>24/7 Full support</p>
              </li>
            </ul>
            <button className="mt-6 bg-white text-blue-900 text-sm py-3 px-10 rounded-md border-none transition-transform duration-300 hover:transform hover:scale-105">Tải khóa học ngay!</button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg w-full md:w-80">
          <div className="bg-blue-950 text-left p-8 rounded-t-lg">
            <h3 className="text-l text-white">Combo 10 khoá</h3>
            <p className="text-3xl font-bold text-white mt-4">Giảm 15%</p>
            <p className="text-sm text-white mt-2">Combo mua nhiều siêu khuyến mãi</p>
          </div>
          <div className="p-6">
            <ul className="text-left mt-5 mb-5 ml-8 space-y-2">
              <li className="flex items-center">
                <span className="text-blue-950 mr-2">✔</span> <p className='text-sm text-gray-600'>Đầy đủ video</p>
              </li>
              <li className="flex items-center">
                <span className="text-blue-950 mr-2">✔</span> <p className='text-sm text-gray-600'>Không chặn download</p>
              </li>
              <li className="flex items-center">
                <span className="text-blue-950 mr-2">✔</span> <p className='text-sm text-gray-600'>Update miễn phí</p>
              </li>
              <li className="flex items-center">
                <span className="text-blue-950 mr-2">✔</span> <p className='text-sm text-gray-600'>24/7 Full support</p>
              </li>
            </ul>
            <button className="mt-6 bg-purple-100 text-purple-700 text-sm py-3 px-10 rounded-md border-none hover:bg-purple-700 hover:text-white transition-colors-transform duration-300 hover:transform hover:scale-105">Tải khóa học ngay!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;