import React, { useState } from "react";

import StarRating from "../StarRating";
import Flag from 'react-world-flags';
import Navbar1 from "../Navbar1";
import { BiDollarCircle } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { GiWireframeGlobe } from "react-icons/gi";
import { FaXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
import Footer from "../Footer";


const FreelancersProfile = () => {
    const [isExpanded, setIsExpanded] = useState(false);


    const user = {
        profilePic: "Images/image-removebg-preview.png", // Replace with the actual image URL
        name: "John Doe",
        services: "Full Stack Developer",
        rating: 4,
        country: "US",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a lorem et nibh scelerisque scelerisque. Quisque tincidunt risus in lectus feugiat tempor.",
        skillset: ["JavaScript", "React", "Node.js", "MongoDB", "CSS"],
        Email: "johndoe@example.com",
        mobileNumber: "123-456-7890",
        
    };

    // Function to toggle the expanded state
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    

    return (
        <div>
            <Navbar1 />
            <div className="flex items-center w-full h-60 bg-gray-100">
                <div className="flex justify-center items-center w-32 h-32 rounded-full bg-white shadow-lg ml-96">
                    <img src={user.profilePic} alt="Profile" className="w-28 h-28" />
                </div>
                <div className="ml-4 font-poppins">
                    <h1 className="text-3xl mb-2">{user.name}</h1>
                    <h1 className="text-xl">{user.services}</h1>
                    <div className="flex">
                        <StarRating rating={user.rating} />
                        {user.country && <Flag code={user.country} alt={user.country} className="w-6 h-4 rounded-sm mt-4 ml-3" />}
                        <h1 className="mt-3 ml-2 text-md">{user.country}</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-between m-20 ml-80 mr-80 font-poppins">
                <div className="mr-10">
                    <h1 className="text-xl">About Me</h1>
                    <p className={`mt-4 text-justify text-base text-gray-600 ${isExpanded ? "" : "line-clamp-2"}`}>
                        {user.des}
                    </p>
                    {user.des.length > 100 && (
                        <button onClick={toggleExpand} className="text-blue-500 mt-2">
                            {isExpanded ? "View Less" : "View More..."}
                        </button>
                    )}

                    
                </div>
                <div className="">
                    <div className="flex flex-col relative w-96 h-97 rounded-lg bg-gray-100 font-poppins">
                        <div className="m-5">
                            <div className="flex justify-between font-poppins ml-5 mr-5">
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-xl">Hourly Rate</h1>
                                    <div className="flex mt-1 justify-center">
                                        <BiDollarCircle className="size-7"/>
                                        <p className="text-xl ml-2">40</p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-xl">Job Done</h1>
                                    <div className="flex justify-center mt-1">
                                        <MdWork className="size-7"/>
                                        <p className="text-xl ml-2">0</p>
                                    </div>
                                </div>
                            </div>
                            <h1 className="text-xl mt-7">Skillset</h1>
                            <div className="flex flex-wrap mt-5">
                                {user.skillset.length > 0 ? user.skillset.map((skill, index) => (
                                    <div key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded font-poppins text-md mr-2 mb-2">
                                        {skill}
                                    </div>
                                )) : <p>No skills added</p>}
                            </div>
                            <div className="mt-7">
                                <h1 className="text-xl">Social Profiles</h1>
                                <div className="flex mt-4">
                                    <FaLinkedin className="text-gray-500 size-10 mr-5"/>
                                    <GiWireframeGlobe className="text-gray-500 size-10 mr-5"/>
                                    <FaXTwitter className="text-gray-500 size-10 mr-5"/>
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="flex">
                                    <CgMail className="text-xl text-gray-500 mr-2"/>
                                    <p className="text-sm">{user.Email}</p>
                                </div>
                                <div className="flex mt-2">
                                    <FaPhone className="text-xl text-gray-500 mr-2"/>
                                    <p className="text-sm">{user.mobileNumber}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default FreelancersProfile;
