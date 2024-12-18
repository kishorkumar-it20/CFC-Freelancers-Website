import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Blogs = () => {
  const blogPosts = [
    {
      image: "Images\\blog-03a.jpg",
      category: "Marketing",
      date: "22 July 2023",
      title: "11 Tips to Help You Get New Clients Through Cold Calling",
      content:
        "Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively front-end.",
    },
    {
        image: "Images\\blog-03a.jpg",
        category: "Marketing",
        date: "22 July 2023",
        title: "11 Tips to Help You Get New Clients Through Cold Calling",
        content:
          "Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively front-end.",
      },
      {
        image: "Images\\blog-03a.jpg",
        category: "Marketing",
        date: "22 July 2023",
        title: "11 Tips to Help You Get New Clients Through Cold Calling",
        content:
          "Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively front-end.",
      },
  ];

  return (
    <div className="pb-20">
      <div className="flex flex-col md:flex-row m-10 ml-52 justify-between">
        <h1 className="font-poppins text-3xl mt-14">Testinomials</h1>
      </div>
      <div className="flex flex-row m-10 ml-44 mt-16">
        {blogPosts.map((blog, index) => (
          <div key={index} className="flex relative ml-10 mt-3">
            <img
              src={blog.image}
              alt={`Blog${index}`}
              className="h-98 w-98 rounded-md drop-shadow-lg"
            />
            <div className="absolute m-10">
              <p className="px-4 py-2 bg-white text-black rounded font-poppins">
                {blog.category}
              </p>
            </div>
            <div className="absolute bottom-0">
              <h1 className="font-poppins text-gray-200 text-base ml-10">
                {blog.date}
              </h1>
              <h3 className="font-poppins text-white text-lg ml-10 mr-10 mt-4">
                {blog.title}
              </h3>
              <p className="font-poppins text-white text-md ml-8 mr-8 mt-4 mb-5">
                {blog.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
