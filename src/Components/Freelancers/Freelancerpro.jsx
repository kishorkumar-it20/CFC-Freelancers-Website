import React, { useState } from "react";
import { MdStars } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import StarRating from "../StarRating";
import { useNavigate } from "react-router-dom";

const Freelancerpro = () => {
    // Mock freelancer data
    const mockFreelancers = [
        { name: "John Doe", services: "Web Development", country: "India", rate: "$30/hr", jobSuccess: "95%", Email: "john@example.com" },
        { name: "Jane Smith", services: "Graphic Design", country: "USA", rate: "$50/hr", jobSuccess: "98%", Email: "jane@example.com" },
        { name: "Sam Wilson", services: "Data Analytics", country: "UK", rate: "$40/hr", jobSuccess: "90%", Email: "sam@example.com" },
        { name: "Anna Lee", services: "App Development", country: "Germany", rate: "$45/hr", jobSuccess: "92%", Email: "anna@example.com" },
        { name: "Tom Brown", services: "Content Writing", country: "Canada", rate: "$25/hr", jobSuccess: "85%", Email: "tom@example.com" },
        { name: "Alice Green", services: "Digital Marketing", country: "Australia", rate: "$35/hr", jobSuccess: "89%", Email: "alice@example.com" },
        { name: "Bob White", services: "SEO", country: "Spain", rate: "$28/hr", jobSuccess: "93%", Email: "bob@example.com" }
    ];

    const [ratings, setRatings] = useState(mockFreelancers.map(() => 0)); // Initialize ratings array
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [bookmarked, setBookmarked] = useState([]);

    const handleRatingChange = (index, rating) => {
        const newRatings = [...ratings];
        newRatings[index] = rating;
        setRatings(newRatings);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleBookmark = (freelancer) => {
        setBookmarked((prev) =>
            prev.includes(freelancer)
                ? prev.filter((item) => item !== freelancer)
                : [...prev, freelancer]
        );
    };

    const itemsPerPage = 6;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = mockFreelancers.slice(startIndex, endIndex);

    const nextPage = () => {
        if (endIndex < mockFreelancers.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (startIndex > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const navigate = useNavigate();
    const viewfreelancersProfile = (Email) => {
        console.log('viewfreelancersProfile called with email:', Email); 
        navigate(`/FreelancersProfile?email=${Email}`);
    };

    return (
        <div className="m-10">
            <h1 className="font-poppins text-xl">Search Results</h1>
            <div className="relative mt-6 bg-gray-200 rounded">
                <div className="flex justify-between h-16">
                    <h1 className="font-poppins text-lg text-gray-900 self-center ml-4">Filter Freelancers</h1>
                    <div className="flex mr-4">
                        <h1 className="font-poppins text-lg self-center">Sort by:</h1>
                        <div className="relative inline-block text-left z-10">
                            <div className="ml-5">
                                <button
                                    type="button"
                                    className="w-40 h-8 mt-4 text-sm text-gray-400 inline-flex justify-between items-center rounded-md border font-poppins border-gray-300 shadow-sm px-4 py-1 bg-white font-medium hover:bg-gray-50 focus:outline-none"
                                    id="options-menu"
                                    aria-haspopup="true"
                                    aria-expanded="true"
                                    onClick={toggleDropdown}
                                >
                                    All Category
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
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                        >
                                            IT & Networking
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                        >
                                            Writing
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-3 grid-rows-2 gap-7">
                    {currentItems.map((freelancer, index) => (
                        <div key={index} className="rounded shadow-lg hover:border hover:border-green-700">
                            <div className="flex justify-between">
                                <img src="Images/image-removebg-preview.png" alt="" className="rounded-full w-40 h-40 mt-10 ml-36" />
                                <MdStars
                                    className={`size-12 ${bookmarked.includes(freelancer) ? 'text-yellow-400' : 'text-gray-400'} mr-10 mt-12 cursor-pointer`}
                                    onClick={() => toggleBookmark(freelancer)}
                                />
                            </div>
                            <div className="flex mt-7 justify-center">
                                <h1 className="font-poppins text-xl">{freelancer.name}</h1>
                                <img src="Images/India.jpg" alt="country" className="w-6 h-4 rounded-sm ml-2 mt-2" />
                            </div>
                            <div className="flex justify-center mt-2">
                                <p className="font-poppins text-base text-gray-600">{freelancer.services}</p>
                            </div>
                            <div className="flex justify-center mt-3">
                                <StarRating
                                    rating={ratings[startIndex + index]}
                                    onRatingChange={(rating) => handleRatingChange(startIndex + index, rating)}
                                />
                            </div>
                            <div className="mt-10 bg-gray-100">
                                <div className="flex ml-8 mt-8 mr-8 justify-between">
                                    <div className="flex flex-col">
                                        <h1 className="font-poppins text-gray-400 text-base">Location</h1>
                                        <div className="flex mt-1">
                                            <CiLocationOn className="size-5 text-black" />
                                            <p className="font-poppins text-black text-sm">{freelancer.country}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <h1 className="font-poppins text-gray-400 text-base">Rate</h1>
                                        <h1 className="font-poppins text-sm text-black">{freelancer.rate}</h1>
                                    </div>
                                    <div className="flex flex-col">
                                        <h1 className="font-poppins text-gray-400 text-base">Job Success</h1>
                                        <h1 className="font-poppins text-sm text-black">{freelancer.jobSuccess}</h1>
                                    </div>
                                </div>
                                <div className="flex justify-center mb-10 mt-10">
                                    <button
                                        className="w-56 h-12 text-white rounded-md text-base font-poppins bg-green-700"
                                        onClick={() => viewfreelancersProfile(freelancer.Email)}
                                    >
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <button
                    className="mr-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={prevPage}
                    disabled={startIndex === 0}
                >
                    Previous
                </button>
                <button
                    className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={nextPage}
                    disabled={endIndex >= mockFreelancers.length}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Freelancerpro;
