import React, { useState, useRef, useEffect } from 'react';
import { assets } from '../assets/assets';
import NewsLetterBox from '../Components/NewsLetterBox';
import Title from '../Components/Title';

const Courses = () => {
  const [links, setLinks] = useState(['']);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const linksContainerRef = useRef(null);
  const lastLinkRef = useRef(null);

  const addLink = () => {
    if (links.length < 15) {
      setLinks([...links, '']);
    }
  };

  const deleteLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (lastLinkRef.current) {
      lastLinkRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [links]);

  const handleLinkChange = (index, event) => {
    const newLinks = [...links];
    newLinks[index] = event.target.value;
    setLinks(newLinks);
  };

  const toggleCourseSelection = (index) => {
    setSelectedCourses((prevSelectedCourses) => {
      if (prevSelectedCourses.includes(index)) {
        return prevSelectedCourses.filter((i) => i !== index);
      } else {
        return [...prevSelectedCourses, index];
      }
    });
  };

  const courses = [
    {
      name: "Tên khóa học",
      description: "Mô tả khóa học",
      price: "40.000 VND",
      image: "https://via.placeholder.com/50"
    },
    {
      name: "Tên khóa học",
      description: "Mô tả khóa học",
      price: "40.000 VND",
      image: "https://via.placeholder.com/50"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-2 px-10 bg-white rounded-md ">
      <h1 className="text-2xl font-bold text-center text-green-600 mb-4">Nhận khóa học tại đây</h1>
      <hr className='mb-6'/>
      <div className="mb-4">
        <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="email">
          Địa chỉ email nhận khóa học
        </label>
        <input
          className="text-sm shadow appearance-none rounded-md border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="example@gmail.com"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-md font-bold mb-2">Link khóa học cần mua:</label>
        <div ref={linksContainerRef} className="max-h-64 overflow-y-auto">
          {links.map((link, index) => (
            <div key={index} ref={index === links.length - 1 ? lastLinkRef : null} className="mb-2">
              <label className="block rounded-t-sm text-white bg-green-700 text-sm font-bold w-24 pl-6">Link {String(index + 1).padStart(2, '0')}</label>
              <div className="flex items-center">
                <input
                  className="text-sm shadow rounded-r-md rounded-bl-md appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={link}
                  onChange={(event) => handleLinkChange(index, event)}
                  placeholder="https://www.udemy.com/course/git-and-github-bootcamp/"
                />
                {links.length > 1 && (
                  <button
                    className="ml-2 text-red-500 hover:scale-110 transition-transform duration-300 font-bold text-lg"
                    onClick={() => deleteLink(index)}
                  >
                    ⛔
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        {links.length < 15 && (
          <button
            className="text-blue-500 font-bold hover:text-blue-700 text-sm mt-2"
            onClick={addLink}
          >
            Nhấn vào để thêm link ↓
          </button>
        )}
        {links.length === 15 && (
          <p className="text-red-500 text-sm mt-2 ml-1">Bạn chỉ có thể mua tối đa 15 khóa học</p>
        )}
      </div>
      <button
        className="w-full bg-green-700 opacity-85 text-white shadow-md shadow-green-500 font-bold py-3 px-4 rounded-md hover:shadow-none hover:opacity-100 transition-shadow-opacity duration-300" 
        type="button"
        onClick={() => setShowPayment(true)}
      >
        Check Khóa Học
      </button>

      <div className={`mt-10 p-4 border rounded-md transition-all duration-500 ease-in-out ${showPayment ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <h2 className="text-lg font-bold text-purple-700 mb-4">Danh sách khóa học</h2>
        {courses.map((course, index) => (
          <div key={index} className="flex items-center justify-between p-4 mb-4 border rounded-md">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-4"
                checked={selectedCourses.includes(index)}
                onChange={() => toggleCourseSelection(index)}
              />
              <img src={course.image} alt={course.name} className="w-12 h-12 mr-4" />
              <div>
                <p className="font-bold text-purple-700 text-md truncate w-96">{course.name}</p>
                <p className="text-gray-600 text-sm truncate w-96">{course.description}</p>
              </div>
            </div>
            <p className="font-bold text-purple-700">{course.price}</p>
          </div>
        ))}
        <button
          className="w-full bg-purple-700 text-white font-bold py-3 px-4 rounded-md hover:bg-purple-800"
          type="button"
        >
          Thanh Toán
        </button>
      </div>
    </div>
  );
};

export default Courses;