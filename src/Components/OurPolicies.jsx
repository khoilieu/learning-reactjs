import { assets } from '../assets/assets';

const OurPolicies = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center pt-20 pb-10 text-xs sm:text-sm md:text-base text-gray-700">
      <div className="">
        <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5 " />
        <p className="font-semibold">22000+ Khoá học</p>
        <p className="text-gray-400">Có sẵn kho đồ sộ từ udemy</p>
      </div>
      <div className="">
        <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5 " />
        <p className="font-semibold">Update miễn phí</p>
        <p className="text-gray-400"> Đầy đủ video mới nhất và cập nhật</p>
      </div>
      <div className="">
        <img src={assets.support_img} alt="" className="w-12 m-auto mb-5 " />
        <p className="font-semibold">Truy cập trọn đời</p>
        <p className="text-gray-400">Toàn quyền download</p>
      </div>
    </div>
  );
};

export default OurPolicies;
