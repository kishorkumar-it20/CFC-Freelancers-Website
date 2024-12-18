import React, { useState } from "react";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdMessage, MdDeleteForever } from "react-icons/md";
import { PiNoteThin } from "react-icons/pi";
import StarRating from "../StarRating";
const candidates = [
  {
    name: "Ananya",
    email: "ananya@gmail.com",
    phone: "+91 9876543210",
    country: "Images\\USA.jpg",
    image: "Images\\image 8.jpg",
    stars: 5,
  },
 
];

const ManageCandidate = () => {
  const [ratings, setRatings] = useState(
    candidates.map(candidates => candidates.rating)
);
const handleRatingChange = (index, rating) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
};
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="m-10 font-poppins">
        <h1 className="text-2xl">Manage Candidates</h1>
        <div className="mt-10 w-auto h-20 rounded">
          <div className="flex m-10 justify-between">
            <div className="flex mt-6">
              <MdOutlinePeopleAlt className="size-8 text-blue-800" />
              <h1 className="ml-4 text-lg mt-1">{candidates.length} Bidders</h1>
            </div>
            <div>
              <div className="relative inline-block text-left mt-5 z-10">
                <div>
                  <button
                    type="button"
                    className="w-28 h-8 text-sm text-gray-400 inline-flex justify-between items-center rounded-md border font-poppins border-gray-300 shadow-sm px-4 py-2 bg-white font-medium hover:bg-gray-50 focus:outline-none"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                    onClick={toggleDropdown}
                  >
                    Filter
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {isOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Data Analytics
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Design & Creative
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Full Stack
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {candidates.map((candidate, index) => (
            <div
              key={index}
              className="flex justify-between w-auto h-60 rounded border-t border-t-gray-200 hover:border hover:border-green-700"
            >
              <div className="flex flex-col">
                <div className="flex m-10">
                  <img
                    src={candidate.image}
                    alt="Profile"
                    className="rounded-full w-40 h-40"
                  />
                  <div className="ml-7">
                    <div className="flex mt-3">
                      <h1 className="font-poppins text-xl">{candidate.name}</h1>
                      <img
                        src={candidate.country}
                        alt="country"
                        className="w-6 h-4 rounded-sm ml-2 mt-2"
                      />
                    </div>
                    <div className="flex mt-3">
                      <IoMdMail className="size-4 mt-1 text-gray-400" />
                      <h1 className="font-poppins ml-2 text-base text-gray-400">
                        {candidate.email}
                      </h1>
                      <FaPhone className="ml-3 size-4 mt-1 text-gray-400" />
                      <h1 className="font-poppins ml-2 text-base text-gray-400">
                        {candidate.phone}
                      </h1>
                    </div>
                    <div className="flex mt-2">
                    <StarRating
                      rating={ratings[index]}
                      onRatingChange={(rating) => handleRatingChange(index, rating)}
                    />
                    </div>
                    <div className="flex mt-4">
                      <button className="flex px-4 py-2 w-36 h-10 bg-blue-900 text-white rounded text-sm hover:bg-black">
                        <PiNoteThin className="size-5" />
                        Accept Offer
                      </button>
                      <button className="flex ml-2 px-2 py-2 w-32 h-10 bg-black text-white rounded text-sm hover:bg-green-700">
                        <MdMessage className="size-5 mr-2" />
                        Message
                      </button>
                      <button className="ml-2 w-8 h-8 bg-gray-500 text-white rounded mt-1 hover:bg-red-600">
                        <MdDeleteForever className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageCandidate;
