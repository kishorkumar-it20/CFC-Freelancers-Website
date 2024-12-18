import React ,{useState}from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaClockRotateLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Recent = () => {
    const navigate = useNavigate();
    const tasks = [
        { name: "Food Delivery Mobile App", place: "San Francisco", time: "2 minutes ago", price: "$1,000 - $2,000", req: ["ios", "Android", "Mobile App", "Design", "Figma"] },
        { name: "Food Delivery Mobile App", place: "San Francisco", time: "2 minutes ago", price: "$1,000 - $2,000", req: ["ios", "Android", "Mobile App", "Design"] },
        { name: "Food Delivery Mobile App", place: "San Francisco", time: "2 minutes ago", price: "$1,000 - $2,000", req: ["ios", "Android", "Mobile App"] },
        { name: "Food Delivery Mobile App", place: "San Francisco", time: "2 minutes ago", price: "$1,000 - $2,000", req: ["ios", "Android", "Flutter"] },
        { name: "Food Delivery Mobile App", place: "San Francisco", time: "2 minutes ago", price: "$1,000 - $2,000", req: ["ios", "Android", "Mobile App", "Design"] },
    ];
    const handleBrowse = () =>{
        navigate('/PostedTask')
    }
    return (
        <div className="bg-gray-100 w-auto h-auto pb-10">
            <div className="flex flex-col md:flex-row m-10 ml-52 justify-between">
                <h1 className="font-poppins text-3xl mt-14">Recent Tasks</h1>
                <h1 className="font-poppins text-xl flex mr-0 md:mr-44 text-sky-700 mt-14 cursor-pointer">Browse All Tasks
                    <FaLongArrowAltRight className="ml-4 mt-1" onClick={handleBrowse}/>
                </h1>
            </div>
            {tasks.map((task, index) => (
                <div key={index} className="flex flex-col md:flex-row bg-white w-full md:w-3/4 h-auto md:h-56 ml-0 md:ml-52 rounded-md m-1 mb-10 relative p-4">
                    <div className="flex flex-col m-10">
                        <h1 className="font-poppins text-xl ml-1">{task.name}</h1>
                        <div className="flex mt-3">
                            <CiLocationOn className="fill-gray-500 size-5" />
                            <p className="text-gray-500 text-md ml-1">{task.place}</p>
                            <FaClockRotateLeft className="fill-gray-500 size-4 ml-5 mt-1" />
                            <p className="text-gray-500 text-md ml-2">{task.time}</p>
                        </div>
                        <div className="flex flex-wrap mt-5">
                            {task.req.map((requirement, reqIndex) => (
                                <div key={reqIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded font-poppins text-md mr-2 mb-2">
                                    {requirement}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="self-start absolute right-10 top-10">
                        <div>
                            <h1 className="font-poppins text-xl ">{task.price}</h1>
                            <h1 className="font-poppins text-md text-gray-500 mt-3 ml-1">Fixed Price</h1>
                        </div>
                        <button className="px-8 md:px-16 py-3 bg-blue-800 text-white rounded font-poppins text-xl mt-5 self-end">Bid Now</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Recent;
