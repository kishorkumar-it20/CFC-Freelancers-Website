import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlinePeople } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const BookmarkTask = () =>{
    const Jobs = [
        {
          name: "Frontend React Developer",
          From: "29 May, 2005",
          To: "31 May, 2005",
          Approval: "Pending",
          Noofcan: "3",
        },
        {
          name: "Frontend React Developer",
          From: "29 May, 2005",
          To: "31 May, 2005",
          Approval: "Pending",
          Noofcan: "3",
        },
        {
          name: "Frontend React Developer",
          From: "29 May, 2005",
          To: "31 May, 2005",
          Approval: "Pending",
          Noofcan: "3",
        },
      ];
    
    
    return(
        <div>
        <div className=" font-poppins">
          <div className="mt-5 w-auto h-auto border rounded shadow-lg">
            <div className="flex mt-5 ml-10 mb-5 justify-between">
              <div className="flex mt-6">
                <MdOutlineWorkOutline className="size-8 text-blue-800" />
                <h1 className="ml-4 text-lg mt-1">Bookmarked Jobs</h1>
              </div>
            </div>
            {Jobs.map((Jobs, index) => (
              <div
                key={index}
                className="flex justify-between w-auto h-32 rounded border-t border-t-gray-200"
              >
                <div className="flex flex-col">
                  <div className="flex mt-10 ml-10">
                    <div>
                      <div className="flex">
                        <h1 className="font-poppins text-xl">{Jobs.name}</h1>
                      </div>
                      <div className="flex mt-3">
                        <FaRegCalendarAlt className="size-4 mt-1 text-gray-400" />
                        <h1 className="font-poppins ml-2 text-base text-gray-400">
                          {Jobs.From}
                        </h1>
                        <FaRegCalendarAlt className="ml-3 size-4 mt-1 text-gray-400" />
                        <h1 className="font-poppins ml-2 text-base text-gray-400">
                          {Jobs.To}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}
export default BookmarkTask;