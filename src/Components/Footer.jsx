import React from "react";
import { ImGooglePlus2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { MdLocalPostOffice } from "react-icons/md";
 const Footer = () => {
    return(
        <div className="w-auto h-97 bg-gray-700 mt-20">
            <div className="flex h-28 border-b border-b-gray-500">
            <img src="Images/logo.png" alt="" className="w-40 h-14 mt-7 ml-80"/>
                <div className="flex h-auto w-72 border-l border-r border-gray-500 border-l-gray-500 border-r-gray-500 ml-100 ">
                    <div className="flex mt-8 ml-10">
                        <ImGooglePlus2 className="text-gray-500 size-14 pr-7"/>
                        <FaSquareXTwitter className="text-gray-500 size-14 pr-7"/>
                        <FaLinkedin className="text-gray-500 size-14 pr-7"/>
                        <FaFacebookSquare className="text-gray-500 size-14 pr-7"/>
                    </div>
                </div>
            </div>
            <div className="border-b border-b-gray-500">
                <div className="ml-80 mt-16 flex space-x-20 mb-9">
                    <div>
                        <h1 className="font-poppins text-white text-xl mb-4">For Candidates</h1>
                        <p className="font-poppins text-gray-400 text-lg mb-1">Browse Jobs</p>
                        <p className="font-poppins text-gray-400 text-lg mb-1">Add Resume</p>
                        <p className="font-poppins text-gray-400 text-lg mb-1">Job Alerts</p>
                        <p className="font-poppins text-gray-400 text-lg mb-1">Bookmarks</p>
                    </div>
                    <div>
                        <h1 className="font-poppins text-white text-xl mb-4">For Employers</h1>
                        <p className="font-poppins text-gray-400 text-lg mb-1">Browse Candidates</p>
                        <p className="font-poppins text-gray-400 text-lg mb-1">Post a Job</p>
                        <p className="font-poppins text-gray-400 text-lg mb-1">Post a Task</p>
                        <p className="font-poppins text-gray-400 text-lg mb-1">Plans & Pricing</p>
                    </div>
                    <div>
                        <h1 className="font-poppins text-white text-xl mb-4">Helpful Links</h1>
                        <p className="font-poppins text-gray-400 text-lg mb-1">Contact</p>
                        <p className="font-poppins text-gray-400 text-lg mb-1">Privacy Policy</p>
                        <p className="font-poppins text-gray-400 text-lg mb-1">Terms of Use</p>
                    </div>
                    <div>
                        <h1 className="font-poppins text-white text-xl mb-4">Account</h1>
                        <p className="font-poppins text-gray-400 text-lg mb-1">Log In</p>
                        <p className="font-poppins text-gray-400 text-lg mb-1">My Account</p>
                    </div>
                    <div>
                        <div className="flex">
                            <MdLocalPostOffice className="size-8 text-gray-400"/>
                            <h1 className="font-poppins text-white text-xl mb-4 ml-4">A Sign Up For a Newsletter</h1>
                        </div>
                        <p className="font-poppins text-gray-400 text-lg mb-1">Weekly breaking news, analysis and cutting edge<br/> advices on job searching.</p>
                        
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-7">
                <FaRegCopyright className="size-7 text-gray-500 mr-3"/>
                <p className="font-poppins mt-1 text-gray-500 text-sm">2024 CFC. All Rights Reserved.</p>
            </div>
        </div>
    )
 }
 export default Footer;