import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const BlogInfo = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const postData = async () => {
      const response = await fetch(`https://dummyjson.com/posts/${id}`);
      const data = await response.json();
      setPost(data);
    };
    postData();
  }, [id]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">{post?.title}</h1>
      <p className="text-lg text-gray-800 mb-6">{post?.body}</p>

      <div className="w-full max-w-md p-6 bg-white border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Post Stats</h2>
        <div className="flex justify-between mt-4 text-lg">
          <h3 className="text-gray-600">💌 Likes: {post?.reactions?.likes}</h3>
          <h3 className="text-gray-600">👎 Dislikes: {post?.reactions?.dislikes}</h3>
        </div>
        <div className="mt-4 text-lg">
          <h3 className="text-gray-600">👁️ Views: {post.views}</h3>
        </div>
      </div>

      <div className="mt-6">
        <Link to="/">
          <button
            className="bg-teal-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md 
                  hover:bg-teal-600 hover:shadow-lg hover:scale-105 transition-all 
                  duration-200 ease-in-out"
          >
            Back To All Posts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogInfo;
