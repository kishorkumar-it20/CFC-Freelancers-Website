import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Freelancer = () => {
    const [freelancers, setFreelancers] = useState([
        {
            name: "John Smith",
            image: "Images\\image 3.jpg",
            countryFlag: "Images\\USA.jpg",
            profession: "UI/UX Designer",
            stars: 5
        },
        {
            name: "John Smith",
            image: "Images\\image 3.jpg",
            countryFlag: "Images\\USA.jpg",
            profession: "UI/UX Designer",
            stars: 5
        },
        {
            name: "John Smith",
            image: "Images\\image 3.jpg",
            countryFlag: "Images\\USA.jpg",
            profession: "UI/UX Designer",
            stars: 5
        },
    ]);
    const navigate = useNavigate();

    const handlefreelanscer = () =>{
        navigate('/FreelancersPage')
    }

    return (
        <div className="bg-gray-100 pb-10">
            <div className="flex flex-col md:flex-row m-10 ml-52 justify-between">
                <h1 className="font-poppins text-3xl mt-14">High Rated Freelancers</h1>
                <h1 className="font-poppins text-xl flex mr-0 md:mr-44 text-sky-700 mt-14">
                    Browse All Freelancers
                    <FaLongArrowAltRight className="ml-4 mt-1" onClick={handlefreelanscer}/>
                </h1>
            </div>
            <div className="flex ml-32">
                {freelancers.map((freelancer, index) => (
                    <div key={index} className="w-98 h-98 bg-white rounded shadow-2xl mt-10 ml-20 justify-center">
                        <div className="flex ml-10"> 
                            <img src={freelancer.image} alt="" className="w-40 h-40 rounded-full mt-16 blur-sm ml-24" />
                            <MdStars className="size-12 text-gray-400 ml-7 mt-12"/>
                        </div>
                        <div className="mt-10 flex flex-col items-center"> 
                            <div className="flex justify-center">
                                <h1 className="font-poppins text-xl">{freelancer.name}</h1>
                                <img src={freelancer.countryFlag} alt="" className="w-6 h-4 rounded-sm ml-2 mt-2"/>
                            </div>
                            <h4 className="font-poppins text-gray-500 mt-3 text-2xl">{freelancer.profession}</h4>
                        </div>
                        <div className="flex justify-center mt-5">
                            {Array.from({ length: freelancer.stars }, (_, i) => (
                                <CiStar key={i} className="size-8 text-yellow-400"/>
                            ))}
                        </div>
                        <button className="px-8 md:px-16 py-3 bg-blue-800 text-white rounded font-poppins text-xl mt-5 self-end ml-28">View Profile</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Freelancer;
