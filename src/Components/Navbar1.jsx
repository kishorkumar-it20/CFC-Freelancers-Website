import React, { useEffect, useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoNotificationsCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {useAuth} from './Auth'
const Navbar1 = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const handleLogin = () => {
        navigate('/Login');
    };
    
    const handleSignup = () => {
        navigate('/Register');
    };
    const handleTask = () => navigate(user?.role === 'freelancer' ? '/PostedTask' : '/FreelancersPage'); 
    const handlefreelanscer = () => navigate(user.role === 'freelancer'? '/ClientsPage':'/PostTask');
    const handlemange = () => navigate(user.role==='freelancer'? '/bids':'/ManageTask');
    const home = () => navigate('/')
    return (
        <div className="navbar w-full flex justify-between items-center p-5 border-b border-gray-400 shadow-2xl">
            <div className="flex items-center">
                <img src="Images/logo1.png" alt="Logo" className="w-40 h-18 mr-8 border-r border-gray-400 pr-8" />
                <ul className="flex space-x-12 list-none text-black font-poppins text-xl ">
                    <li className="cursor-pointer hover:text-orange-400" onClick={home}>Home</li>
                    <li className="cursor-pointer hover:text-orange-400" onClick={handleTask}>
                        {user && user.role === 'freelancer' ? 'Find Tasks' : 'Find Freelancers'}
                    </li>
                    <li className="cursor-pointer hover:text-orange-400" onClick={handlemange}>
                        {user && user.role === 'freelancer' ? 'MyBids' : 'Manage'}
                    </li>
                    <li className="cursor-pointer hover:text-orange-400" onClick={handlefreelanscer}>
                        {user && user.role === 'freelancer' ? 'Clients' : 'Post Task'}
                    </li>

                </ul>
            </div>
            <div className="flex space-x-4">
            {user ? (
                    <>
                        <IoNotificationsCircle className="text-black cursor-pointer size-12" />
                        <div
                            className="relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <IoPersonCircleSharp className="text-black cursor-pointer size-12" />
                            {isHovered && (
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-700 text-white rounded">
                                    {user.name}
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 font-poppins text-white rounded hover:bg-black">Login</button>
                        <button onClick={handleSignup} className="px-4 py-2 bg-green-500 font-poppins text-white rounded hover:bg-black">Sign Up</button>
                    </>
                )}
            
            </div>
        </div>
    );
}

export default Navbar1;
