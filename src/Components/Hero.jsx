import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 mt-5">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2 ">
            <p className="font-bold text-sm md:text-base">Nhận Khóa Học</p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl mt-3 mb-3 font-bold">
            <span className='text-red-700'>Udemy</span> <strong className='text-green-700'>Giá chỉ từ 30k</strong>
          </h1>
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
            <p className="font-bold text-sm md:text-base text-yellow-600">Công cụ hỗ trợ nhận khoá học Udemy về Google Drive</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
          <button className="mt-4 px-4 py-2 text-black font-bold rounded border-2 border-green-700 hover:bg-green-700 hover:text-white transition duration-300 ease-in-out">
            Hướng dẫn nhận khóa học
          </button>

          <div className="flex items-center gap-2 mt-10"></div>
            <p className="text-lg font-semibold mb-4">🎓 9000+ khoá học có sẵn <strong className="text-lg font-semibold pl-5">🎬 9000+ video có sẵn</strong></p>
            <p className="text-lg font-semibold">💻 Cập nhật khóa học hàng tuần</p>
        </div>
      </div>

      <img src={assets.hero_img} alt="" className="w-full sm:w-1/2" />
    </div>
  );
};

export default Hero;
