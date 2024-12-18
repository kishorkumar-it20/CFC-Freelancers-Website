import React,{useState} from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { SiImessage } from "react-icons/si";
import { BsBookmarkStarFill } from "react-icons/bs";
import { MdRateReview } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { GrTask } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";
const MainSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return(
        <div>
            <div className="relative w-72 h-screen bg-gray-100">
                <div className="absolute m-10">
                    <h1 className="font-poppins text-sm text-blue-800">Start</h1>
                    <div className="flex m-5 mt-10">
                        <MdSpaceDashboard className="size-7 text-gray-400"/>
                        <h1 className="font-poppins text-xl text-gray-400 ml-3 cursor-pointer">DashBoard</h1>
                    </div>
                    <div className="flex m-5 mt-10">
                        <SiImessage className="size-7 text-gray-400"/>
                        <h1 className="font-poppins text-xl text-gray-400 ml-3 cursor-pointer">Message</h1>
                    </div>
                    <div className="flex m-5 mt-10">
                        <BsBookmarkStarFill className="size-7 text-gray-400"/>
                        <h1 className="font-poppins text-xl text-gray-400 ml-3 cursor-pointer">BookMark</h1>
                    </div>
                    <div className="flex m-5 mt-10">
                        <MdRateReview className="size-7 text-gray-400"/>
                        <h1 className="font-poppins text-xl text-gray-400 ml-3 cursor-pointer">Reviews</h1>
                    </div>                        
                        <h1 className="font-poppins text-sm text-blue-800 mt-10">Account</h1>
                          <div className="flex m-5 mt-5">
                          <IoSettings className="size-7 text-gray-400"/>
                          <h1 className="font-poppins text-xl text-gray-400 ml-3">Settings</h1>
                    </div>
                    <div className="flex m-5 mt-10">
                          <SiImessage className="size-7 text-gray-400"/>
                          <h1 className="font-poppins text-xl text-gray-400 ml-3">Profile</h1>
                    </div>
                </div>                
            </div>
        </div>
    )
}
export default MainSidebar;