import React, { useState } from 'react';

const FrequentlyQuestion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "Giá khoá học là bao nhiêu?",
      answer: "1 khoá Udemy = 50k, Unica = 99k nhé bạn"
    },
    {
      question: "Mình có được tải về không?",
      answer: "Bạn có thể tải về tất cả các khoá học sau khi mua."
    },
    {
      question: "Có được Update khi khóa học cập nhật thêm không?",
      answer: "Bạn sẽ được cập nhật miễn phí khi khoá học có nội dung mới."
    },
    {
      question: "Thanh toán xong bao lâu nhận được khoá học?",
      answer: "Bạn sẽ nhận được khoá học ngay sau khi thanh toán thành công."
    },
    {
      question: "Cách dùng phụ đề rời như thế nào? Cách dịch phụ đề sang tiếng việt?",
      answer: "Bạn có thể dùng các phần mềm như VLC để mở phụ đề rời và dịch phụ đề bằng Google Translate."
    }
  ];

  return (
    <div className="text-center pt-20">
      <hr className="" />
      <p className="text-4xl font-bold text-gray-800 mt-10">
        Câu hỏi thường gặp
      </p>
      <p className="text-gray-500 mt-3">
        Các câu hỏi thường gặp khi mua khoá học tại Savvy Sub
      </p>
      <div className="mt-10">
        {questions.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              className={`w-full text-left bg-white p-4 shadow-md flex justify-between items-center ${openIndex === index ? 'rounded-t-lg' : 'rounded-lg'}`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="flex justify-between items-center w-full">
                <span className="text-lg font-medium text-gray-800">{item.question}</span>
                <span className="text-2xl font-bold text-black">
                  {openIndex === index ? '-' : '+'}
                </span>
              </div>
            </button>
            <div
              className={`overflow-hidden transition-max-height  ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
            >
              <div className="p-4 bg-green-100 mt-0">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyQuestion;