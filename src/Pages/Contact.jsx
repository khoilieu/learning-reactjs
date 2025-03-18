import { assets } from "../assets/assets";
import NewsLetterBox from "../Components/NewsLetterBox";
import Title from "../Components/Title";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="to-current text-3xl pt-5 mx-5">
        <Title text1={"SavvySub"} text2={"Kiến thức & Giải trí, Giá rẻ bất ngờ!"} />
      </div>

      <div className="flex flex-col justify-center gap-5 my-5 mx-5 mb-28 leading-8">
        <div className="flex flex-col justify-center items-start gap-4">
          <p className="text-gray-800">
            <strong>SavvySub</strong> là nền tảng hàng đầu chuyên cung cấp <strong>khóa học trực tuyến</strong> và <strong>tài khoản bản quyền</strong> với giá cả hợp lý nhất. Chúng tôi giúp bạn dễ dàng tiếp cận các <strong>dịch vụ cao cấp</strong> như <strong>YouTube Premium, Udemy Business, ChatGPT Plus, Adobe, Office 365, Canva Pro, Google One, Spotify Premium, Netflix, Elsa Pro, Duolingo</strong> và nhiều sản phẩm khác, đảm bảo trải nghiệm học tập và giải trí chất lượng.</p>
          <p className="text-gray-800 text-justify">
            Tại SavvySub, chúng tôi cam kết mang đến các dịch vụ <strong>chính hãng, giá rẻ</strong>, giúp bạn tiếp cận tri thức và giải trí một cách dễ dàng, tiện lợi và tiết kiệm. Bạn sẽ không còn lo lắng về chi phí đắt đỏ, các vấn đề gia hạn, hay rủi ro mất tài khoản.</p>
        </div>
        <div className="flex justify-center w-full">
          <img
            src="https://img.freepik.com/free-photo/people-working-as-team-company_23-2149136893.jpg?semt=ais_hybrid"
            alt="SavvySub Team"
            className="w-full sm:max-w-[480px]"
          />
        </div>
        
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="text-2xl font-bold text-green-700">Dịch Vụ Của Chúng Tôi</h1>
          <p className="text-gray-800">
            Tại <strong>SavvySub</strong>, chúng tôi cung cấp các tài khoản và khóa học trực tuyến từ những nền tảng hàng đầu thế giới như <strong>YouTube Premium, Udemy Business, ChatGPT Plus, Midjourney, Adobe, Office 365, Canva Pro, Google One, Spotify Premium, Zoom Pro, Netflix, Elsa Pro, Duolingo</strong> và nhiều dịch vụ khác. Chúng tôi mang đến cho bạn sự tiện lợi, chất lượng và mức giá hợp lý, giúp bạn khai thác tối đa giá trị của các nền tảng này.</p>
          <div className="flex justify-center w-full">
            <img
              src="https://bochickenstore.com/storage/large/tai-khoan-premium-ba_1627468274.jpg"
              alt="Buy Account"
              className="w-full sm:max-w-[480px]"
            />
          </div>
          <p className="text-gray-800">
            Chúng tôi không chỉ bán tài khoản mà còn cung cấp hướng dẫn chi tiết, hỗ trợ bạn kích hoạt và sử dụng dễ dàng. Đội ngũ tư vấn viên của chúng tôi luôn sẵn sàng giúp bạn giải quyết mọi thắc mắc, đảm bảo bạn có trải nghiệm mượt mà nhất khi sử dụng dịch vụ của chúng tôi.</p>
        </div>
        
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="text-2xl font-bold text-green-700">Hệ Thống Thanh Toán Tự Động và An Toàn</h1>
          <p className="text-gray-800">
            Chúng tôi mang đến trải nghiệm thanh toán nhanh chóng và bảo mật với hệ thống tự động, giúp bạn nhận tài khoản ngay sau khi đặt hàng. Các phương thức thanh toán đa dạng như <strong>Momo, Banking, VNPay</strong> giúp bạn dễ dàng mua sắm một cách tiện lợi nhất.</p>
          <div className="flex justify-center w-full">
            <img
              src="https://cdn.dnse.com.vn/dnse-news/2023/03/thanh-toan-hoa-don-tu-dong.png"
              alt="Buy Account"
              className="w-full sm:max-w-[480px]"
            />
          </div>
          <p className="text-gray-800">
            Không chỉ vậy, hệ thống của chúng tôi được thiết kế để đảm bảo an toàn tối đa cho giao dịch của khách hàng. Mọi thông tin cá nhân và giao dịch đều được bảo vệ bằng các công nghệ bảo mật hiện đại, giúp bạn an tâm khi mua sắm.</p>
        </div>
        
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="text-2xl font-bold text-green-700">7 Lý Do Bạn Nên Chọn SavvySub</h1>
          <ul className="list-disc pl-5 text-gray-800">
            <li><strong>Uy tín và chất lượng:</strong> Cam kết cung cấp tài khoản và khóa học chính hãng, đảm bảo quyền lợi khách hàng.</li>
            <li><strong>Sản phẩm đa dạng:</strong> Hơn 20+ loại tài khoản và khóa học phổ biến nhất hiện nay.</li>
            <li><strong>Giá rẻ và ưu đãi hấp dẫn:</strong> Mua chung giúp tiết kiệm chi phí, hưởng nhiều ưu đãi đặc biệt.</li>
            <li><strong>Chính sách bảo hành linh hoạt:</strong> Hỗ trợ nhanh chóng nếu có bất kỳ vấn đề nào xảy ra.</li>
            <li><strong>Đội ngũ hỗ trợ tận tình:</strong> Luôn sẵn sàng giúp đỡ 24/7.</li>
            <li><strong>Phản hồi tích cực từ khách hàng:</strong> Hàng nghìn khách hàng đã tin tưởng và sử dụng dịch vụ.</li>
            <li><strong>Khám phá cộng đồng học tập:</strong> Không chỉ là nơi mua sắm, mà còn là cộng đồng chia sẻ kinh nghiệm học tập và công nghệ.</li>
          </ul>
          <p className="text-gray-800">Hãy chọn SavvySub để trải nghiệm dịch vụ chuyên nghiệp, tiện lợi và đáng tin cậy!</p>
        </div>
        
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="text-2xl font-bold text-green-700">Liên Hệ và Theo Dõi Chúng Tôi</h1>
          <p className="text-gray-800">Đừng ngần ngại liên hệ nếu bạn cần hỗ trợ hoặc muốn tìm hiểu thêm về dịch vụ của chúng tôi.</p>
          <ul className="list-none text-gray-800">
            <li><strong>Hotline:</strong> 088 859 1891</li>
            <li><strong>Website:</strong> <a href="https://savvysub.com" className="text-blue-600">https://savvysub.com</a></li>
            <li><strong>Facebook:</strong> <a href="https://www.facebook.com/savvysub" className="text-blue-600">https://www.facebook.com/savvysub</a></li>
            <li><strong>YouTube:</strong> <a href="https://www.youtube.com/@SavvySub" className="text-blue-600">https://www.youtube.com/@SavvySub</a></li>
            <li><strong>TikTok:</strong> <a href="https://www.tiktok.com/@savvysub" className="text-blue-600">https://www.tiktok.com/@savvysub</a></li>
            <li><strong>Địa chỉ:</strong> 71/1 Nguyễn Văn Thương, Phường 25, Bình Thạnh, TP. Hồ Chí Minh</li>
          </ul>
          <p className="text-gray-800">Chúng tôi luôn sẵn sàng hỗ trợ và đồng hành cùng bạn!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;