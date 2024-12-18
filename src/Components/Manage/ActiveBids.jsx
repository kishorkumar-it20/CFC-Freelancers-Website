import React from "react";
import { ImHammer2 } from "react-icons/im";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const ActiveBids = () =>{
    const Tasks = [
        {
          name: "Design a Landing Page",
          From: "6 Days Left",
        },
        {
            name: "Design a Landing Page",
            From: "6 Days Left",
           
          },
          {
            name: "Design a Landing Page",
            From: "6 Days Left",
    
          },
          {
            name: "Design a Landing Page",
            From: "6 Days Left",
          },        
      ];
    
      return (
        <div>
          <div className="m-10 font-poppins">
            <h1 className="text-2xl">My Active Bids</h1>
            <div className="mt-10 w-auto h-20 rounded">
              <div className="flex mt-10 ml-10 mb-5 justify-between">
                <div className="flex mt-6">
                  <ImHammer2 className="size-5 text-blue-800 mt-2" />
                  <h1 className="ml-3 text-lg mt-1">Bids List</h1>
                </div>
              </div>
              {Tasks.map((Tasks, index) => (
                <div
                  key={index}
                  className="flex justify-between w-auto h-40 rounded border-t border-t-gray-200 hover:bg-gray-50 hover:border-b hover:border-b-blue-800"
                >
                  <div className="flex flex-col">
                    <div className="flex m-10">
                      <div>
                        <div className="flex">
                          <h1 className="font-poppins text-xl">{Tasks.name}</h1>
                          
                        </div>
                        
                        <div className="flex mt-4">
                          <button className="ml-2 w-8 h-8 bg-black rounded mt-1 hover:bg-gray-300 border border-black">
                            <FaRegEdit className="ml-2 text-white" />
                          </button>
                          <button className="ml-2 w-8 h-8 bg-red-500 rounded mt-1 hover:bg-gray-300 border hover:border-black">
                            <MdDeleteForever className="ml-2 text-white"/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-80 h-20 bg-gray-100 rounded-sm justify-between items-center p-5 mt-10">
                                <div className="flex flex-col items-center justify-center">
                                    <h1 className="text-center text-base">$2,500</h1>
                                    <p className="text-center text-sm text-gray-400">Fixed Price</p>
                                </div>
                                <div className="border-r border-r-gray-300 h-full"></div>
                                <div className="flex flex-col items-center justify-center">
                                    <h1 className="text-center text-base">2 Days</h1>
                                    <p className="text-center text-sm text-gray-400">Delivery Time</p>
                                </div>
                            </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}
export default ActiveBids;