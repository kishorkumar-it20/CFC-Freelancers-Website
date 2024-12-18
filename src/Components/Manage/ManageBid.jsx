import React, { useEffect, useState } from 'react';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { FaRegEye } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const ManageBid = () => {
  // Mocked data for demonstration
  const [tasks, setTasks] = useState([
    {
      name: 'Task 1',
      bids: [
        {
          bidderName: 'Freelancer 1',
          bidderEmail: 'freelancer1@example.com',
          profilePic: 'Images/image-removebg-preview.png',
          bidAmount: 150,
        },
        {
          bidderName: 'Freelancer 2',
          bidderEmail: 'freelancer2@example.com',
          profilePic: 'Images/image-removebg-preview.png',
          bidAmount: 200,
        },
      ],
    },
    {
      name: 'Task 2',
      bids: [
        {
          bidderName: 'Freelancer 3',
          bidderEmail: 'freelancer3@example.com',
          profilePic: 'Images/image-removebg-preview.png',
          bidAmount: 100,
        },
      ],
    },
  ]);

  const navigate = useNavigate();
  
  const viewFreelancersProfile = (bidderEmail) => {
    console.log('viewFreelancersProfile called with email:', bidderEmail);
    navigate(`/AcceptFreelancer?email=${bidderEmail}`);
  };

  return (
    <div className="m-10 font-poppins">
      <h1 className="text-2xl">Manage Bids</h1>
      {tasks.map((task, taskIndex) => (
        <div key={taskIndex} className="mt-10 w-auto h-20 rounded">
          <h2 className="text-xl">Task: {task.name}</h2>
          <div className="flex m-10 justify-between">
            <div className="flex mt-6">
              <MdOutlinePeopleAlt className="size-8 text-blue-800" />
              <h1 className="ml-4 text-lg mt-1">{task.bids.length} Bidders</h1>
            </div>
          </div>
          {task.bids.map((bidder, index) => (
            <div key={index} className="flex justify-between w-auto h-48 rounded border-t border-t-gray-200">
              <div className="flex flex-col">
                <div className="flex ml-10 mt-5 items-center">
                  <img src={bidder.profilePic || 'Images/image-removebg-preview.png'} alt="" className="rounded-full w-40 h-40" />
                  <div className="ml-7">
                    <div className="flex items-center mt-3">
                      <h1 className="font-poppins text-xl">{bidder.bidderName}</h1>
                      <img src='Images/India.jpg' alt="" className="w-6 h-4 rounded-sm mt-1 ml-3"/>
                    </div>
                    <div className="flex mt-7">
                      <button className="flex px-4 py-2 w-36 h-10 bg-blue-900 text-white rounded text-sm hover:bg-black mr-4" onClick={() => viewFreelancersProfile(bidder.bidderEmail)}>
                        <FaRegEye className="size-5 mr-2"/>View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-60 h-28 bg-gray-100 rounded-sm justify-between items-center p-10 mt-10">
                <h1 className="text-center text-base">${bidder.bidAmount}</h1>
                <p className="text-sm text-gray-400">Fixed Price</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ManageBid;
