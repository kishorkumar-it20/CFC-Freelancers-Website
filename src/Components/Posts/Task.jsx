import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import {  FaDollarSign } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaClockRotateLeft } from "react-icons/fa6";

const Task = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [taskId, setTaskId] = useState(null); // State to store selected task ID
    const [bidAmount, setBidAmount] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bidsPlaced, setBidsPlaced] = useState([]); // State to store task IDs with bids placed
    const itemsPerPage = 9; 

    // Mock user for demonstration purposes
    const user = {
        email: "user@example.com",
        name: "John Doe",
        country: "USA"
    };

    // Mock tasks data
    const mockTasks = [
        {
            _id: "1",
            name: "Design a Logo",
            location: "Remote",
            createdAt: new Date().toISOString(),
            minBudget: 50,
            maxBudget: 150,
            category: "Design & Creative"
        },
        {
            _id: "2",
            name: "Full Stack Development",
            location: "New York, USA",
            createdAt: new Date().toISOString(),
            minBudget: 500,
            maxBudget: 1500,
            category: "Full Stack"
        },
        // Add more mock tasks as needed
    ];

    useEffect(() => {
        setTasks(mockTasks);
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = tasks.slice(startIndex, endIndex);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const openBidModal = (taskId) => {
        setIsModalOpen(true);
        setTaskId(taskId); // Set taskId when opening bid modal
    };

    const closeBidModal = () => {
        setIsModalOpen(false);
        setBidAmount(''); // Clear input fields
        setTaskId(null); // Reset taskId when closing bid modal
    };

    const handleBidSubmit = () => {
        // Simulate placing a bid
        toast.success('Bid placed successfully');
        setBidsPlaced([...bidsPlaced, taskId]); // Add the task ID to bidsPlaced
        closeBidModal();
    };

    const formatDate = (date) => {
        const now = new Date();
        const taskDate = new Date(date);
        const diffInSeconds = Math.floor((now - taskDate) / 1000);

        if (isNaN(taskDate)) {
            return "Invalid date";
        }

        if (diffInSeconds < 60) {
            return "Just now";
        } else if (diffInSeconds < 3600) {
            const minutes = Math.floor(diffInSeconds / 60);
            return `${minutes} minutes ago`;
        } else if (diffInSeconds < 86400) {
            const hours = Math.floor(diffInSeconds / 3600);
            return `${hours} hours ago`;
        } else {
            const days = Math.floor(diffInSeconds / 86400);
            return `${days} days ago`;
        }
    };

    return (
        <div className="m-10">
            <h1 className="font-poppins text-xl">Search Results</h1>
            <div className="relative mt-6 bg-gray-200 rounded">
                <div className="flex justify-between h-16">
                    <h1 className="font-poppins text-lg text-gray-900 self-center ml-4">Filter Task</h1>
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
            <div className="grid grid-cols-3 gap-8 mt-10">
                {currentItems.map((task) => (
                    <div key={task._id} className="pt-4 rounded shadow-md">
                        <div className="m-5">
                            <h1 className="font-poppins text-lg">{task.name}</h1>
                            <div className="flex">
                                <CiLocationOn className="fill-gray-500 size-5 mt-2" />
                                <p className="text-gray-500 text-md ml-1 mt-1">{task.location}</p>
                                <FaClockRotateLeft className="fill-gray-500 size-4 ml-5 mt-2" />
                                <p className="text-gray-500 text-md ml-2 mt-1">{formatDate(task.createdAt)}</p>
                                <p className="text-gray-500 text-md ml-2 mt-1">{task.category}</p>
                            </div>
                        </div>  
                        <div className="w-full pb-1 bg-gray-300">
                            <div className="flex m-5 justify-between items-center">
                                <div className="flex mt-4">
                                    <p className="font-poppins text-md text-gray-00 ml-1">Fixed Price:</p>
                                    <div className="flex items-center">
                                        <h1 className="font-poppins text-md flex items-center">
                                            <FaDollarSign className="mr-1 text-md" />{task.minBudget}
                                        </h1>
                                        <h1 className="font-poppins text-md mx-2">-</h1>
                                        <h1 className="font-poppins text-md flex items-center">
                                            <FaDollarSign className="mr-1" />{task.maxBudget}
                                        </h1>
                                    </div>
                                </div>
                                <button
                                    className={`mt-4 font-poppins text-white bg-blue-500 px-3 py-1 rounded ${bidsPlaced.includes(task._id) ? 'bg-green-500' : ''}`}
                                    disabled={bidsPlaced.includes(task._id)} // Disable button if bid is already placed
                                    onClick={() => openBidModal(task._id)}
                                >
                                    {bidsPlaced.includes(task._id) ? 'Bid Placed' : 'Bid Now'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-10">
                {currentPage > 0 && (
                    <button
                        className="font-poppins text-white bg-blue-500 px-4 py-2 rounded"
                        onClick={prevPage}
                    >
                        Previous
                    </button>
                )}
                {endIndex < tasks.length && (
                    <button
                        className="font-poppins text-white bg-blue-500 px-4 py-2 rounded"
                        onClick={nextPage}
                    >
                        Next
                    </button>
                )}
            </div>

            {/* Bid Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 shadow-lg">
                        <h2 className="font-poppins text-xl mb-4">Submit Your Bid</h2>
                        <input
                            type="number"
                            className="border border-gray-300 px-4 py-2 rounded-lg w-full"
                            placeholder="Enter bid amount"
                            value={bidAmount}
                            onChange={(e) => setBidAmount(e.target.value)}
                        />
                        <div className="mt-4 flex justify-end">
                            <button
                                className="font-poppins text-white bg-blue-500 px-4 py-2 rounded mr-2"
                                onClick={handleBidSubmit}
                            >
                                Submit Bid
                            </button>
                            <button
                                className="font-poppins text-gray-600 bg-gray-200 px-4 py-2 rounded"
                                onClick={closeBidModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Task;
