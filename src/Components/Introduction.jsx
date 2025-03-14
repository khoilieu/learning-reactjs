import { assets } from "../assets/assets";

const Introduction = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-16 my-10">
        <img
          src={assets.udemy_img}
          alt=""
          className="w-full md:max-w-[600px] md:h-[750px]"
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="relative pl-16">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-green-700 bg-opacity-50 flex items-center justify-center">
              <img
                src={assets.high_quality}
                alt="Description"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <h4 className="font-bold text-lg text-green-700">Chất lượng đảm bảo</h4>
            Chất lượng Video HD, Phụ đề, Files, Bài tập đi kèm đầy đủ.
          </p>
          <p className="relative pl-16">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-green-700 bg-opacity-50 flex items-center justify-center">
              <img
                src={assets.refresh}
                alt="Description"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <h4 className="font-bold text-lg text-green-700">Cập nhật liên tục</h4>
            Luôn được cập nhật update video mới nhất, với kiến thức mới nhất. Hỗ
            trợ tải thêm, tải mới lại content của khóa học.
          </p>
          <p className="relative pl-16">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-green-700 bg-opacity-50 flex items-center justify-center">
              <img
                src={assets.save_money}
                alt="Description"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <h4 className="font-bold text-lg text-green-700">Tiết kiệm chi phí</h4>
            Tool hỗ trợ bạn chi phí cũng như tiết kiệm thời gian cho bạn .
          </p>
          <button className="mt-4 px-4 py-2 text-white font-bold rounded border-2 bg-red-700  hover:bg-white hover:border-red-700 hover:text-black transition duration-300 ease-in-out">
            Tải khóa học ngay!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
