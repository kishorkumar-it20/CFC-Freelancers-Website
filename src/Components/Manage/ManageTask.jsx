import React, { useEffect, useState } from "react";
import { BiTask } from "react-icons/bi";
import { MdOutlinePeople } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ManageTask = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  // Mocked task data
  const mockTasks = [
    {
      _id: "1",
      name: "Design a new website",
      approval: "Pending",
      bids: [{ bidAmount: 200 }, { bidAmount: 150 }],
      minBudget: 100,
      maxBudget: 300,
    },
    {
      _id: "2",
      name: "Develop a mobile app",
      approval: "Approved",
      bids: [{ bidAmount: 300 }, { bidAmount: 250 }, { bidAmount: 350 }],
      minBudget: 200,
      maxBudget: 400,
    },
    {
      _id: "3",
      name: "SEO Optimization",
      approval: "Pending",
      bids: [],
      minBudget: 50,
      maxBudget: 150,
    },
  ];

  useEffect(() => {
    // Set mocked tasks
    setTasks(mockTasks);
  }, []);

  const handleManage = (id) => {
    navigate(`/BidRoute/${id}`);
  };

  return (
    <div className="m-10 font-poppins">
      <h1 className="text-2xl">Manage Tasks</h1>
      <div className="mt-10 w-auto h-20 rounded">
        <div className="flex m-10 justify-between">
          <div className="flex mt-6">
            <BiTask className="size-8 text-blue-800" />
            <h1 className="ml-4 text-lg mt-1">My Tasks</h1>
          </div>
        </div>
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex justify-between w-auto h-60 rounded border-t border-t-gray-200"
          >
            <div className="flex flex-col">
              <div className="flex m-10">
                <div>
                  <div className="flex">
                    <h1 className="font-poppins text-xl">{task.name}</h1>
                    <div className={`flex w-40 h-8 justify-center rounded-lg ml-3 ${task.approval === 'Pending' ? 'bg-yellow-200' : 'bg-green-200'}`}>
                      <h1 className="text-sm mt-1">{task.approval}</h1>
                    </div>
                  </div>
                  <div className="flex mt-3">
                    <MdOutlinePeople className="size-4 mt-1 text-gray-400" />
                    <h1 className="font-poppins ml-1 text-base text-gray-400">No of Freelancers Bidded</h1>
                    <div className="flex justify-center items-center h-5 w-6 rounded-full bg-blue-600 ml-2">
                      <h1 className="font-poppins text-white text-sm">{task.bids.length}</h1>
                    </div>
                  </div>
                  <div className="flex mt-4">
                    <button
                      className="flex px-4 py-2 w-56 h-10 bg-blue-900 text-white rounded text-sm mt-5 hover:bg-black"
                      onClick={() => handleManage(task._id)}
                    >
                      <MdOutlinePeople className="size-5 mr-3" />
                      Manage Candidate
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-96 h-20 bg-gray-100 rounded-sm justify-between items-center p-5 mt-10">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-center text-base">{task.bids.length}</h1>
                <p className="text-center text-sm text-gray-400">Bids</p>
              </div>
              <div className="border-r border-r-gray-300 h-full"></div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-center text-base">{calculateAverageBid(task.bids)}</h1>
                <p className="text-center text-sm text-gray-400">Avg. Bid</p>
              </div>
              <div className="border-r border-r-gray-300 h-full"></div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-center text-base">${task.minBudget} - ${task.maxBudget}</h1>
                <p className="text-center text-sm text-gray-400">Fixed Price</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const calculateAverageBid = (bids) => {
  if (bids.length === 0) return 0;
  const total = bids.reduce((acc, bid) => acc + bid.bidAmount, 0);
  return (total / bids.length).toFixed(2);
};

export default ManageTask;
