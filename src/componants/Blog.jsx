import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";



const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        setBlogs(data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>
      {loading ? (
        Array.from({ length: 12 }).map((_, index) => (
            <Shimmer key={index} />
          ))
      ) : (
        blogs.map((blog) => {
          return (
            <div key={blog.id} className="mb-4">
              <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-red-100">
                <Link to={`/blog/${blog.id}`}>
                  <h2 className="text-2xl font-bold text-blue-500 text-center hover:text-blue-700">
                    {blog.title}
                  </h2>
                </Link>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Blog;
