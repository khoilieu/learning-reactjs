const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert('Subscribed successfully!');
  };

  return (
    <div className="text-center">
      <hr className="" />
      <p className="text-4xl font-bold text-gray-800 mt-10">
        <span className="text-green-700">Savvy Sub</span> là công cụ gì?
      </p>
      <p className="text-gray-500 mt-3">
        Là công cụ giúp bạn tải khóa học Udemy bạn cần về Drive!. Full Bootcamp sẽ tải khóa <br />
        học rồi chia sẻ lại qua Google Drive cho bạn với chi phí thấp hơn giá gốc. <br />
        Trong Drive bạn nhận bao gồm: file, Video, Phụ đề : eng,vi
      </p>
    </div>
  );
};

export default NewsLetterBox;
