import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const CommentSection = ({ comments }) => {
  const [replyingTo, setReplyingTo] = useState(null);

  const handleReplyClick = (commentId) => {
    setReplyingTo(commentId);
  };

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="border p-4 rounded-md">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>{" "}
            {/* Avatar */}
            <div className="flex-1">
              <p className="font-bold text-sm">{comment.user}</p>
              <p className="text-sm text-gray-700">{comment.text}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                <span>{comment.time}</span>
                <button className="hover:underline">Thích</button>
                <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                <span>{comment.likes}</span>
                <button
                  className="hover:underline"
                  onClick={() => handleReplyClick(comment.id)}
                >
                  Phản hồi
                </button>
              </div>

              {comment.replies && (
                <div className="ml-4 mt-4 space-y-3">
                  {comment.replies.map((reply) => (
                    <div
                      key={reply.id}
                      className="border-l-2 pl-3 border-gray-300 p-4 rounded-md"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gray-500 rounded-full"></div>{" "}
                        {/* Avatar */}
                        <div className="flex-1">
                          <p className="font-bold text-sm">{reply.user}</p>
                          <p className="text-sm text-gray-700">{reply.text}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                            <span>{reply.time}</span>
                            <button className="hover:underline">Thích</button>
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              className="mr-1"
                            />
                            <span>{reply.likes}</span>
                            <button
                              className="hover:underline"
                              onClick={() => handleReplyClick(reply.id)}
                            >
                              Phản hồi
                            </button>
                          </div>
                          {replyingTo === reply.id && (
                            <div className="mt-2">
                              <input
                                type="text"
                                placeholder="Viết phản hồi..."
                                className="text-sm p-2 border border-gray-300 rounded-md w-full"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {replyingTo === comment.id && (
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Viết phản hồi..."
                    className="text-sm p-2 border border-gray-300 rounded-md w-full"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
