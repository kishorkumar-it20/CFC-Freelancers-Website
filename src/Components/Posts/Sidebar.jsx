import React,{useState} from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Slider from '@mui/material/Slider';
import { RxCross2 } from "react-icons/rx";
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [amount, setAmount] = useState(1500);

    const handleSliderChange = (event, newValue) => {
        setAmount(newValue);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [skill, setSkill] = useState('');
    const [skills, setSkills] = useState([]);

    const handleInputChange1 = (e) => {
        setSkill(e.target.value);
    };

    const handleAddSkill = () => {
        if (skill.trim() !== '') {
            setSkills([...skills, skill]);
            setSkill('');
        }
    };

    const handleDeleteSkill = (indexToDelete) => {
        setSkills(skills.filter((_, index) => index !== indexToDelete));
    };

        return (
            <div className="h-full flex">
                <div className="relative w-96 h-full bg-gray-100">
                    <div className="absolute ml-5 font-poppins">
                        <h1 className="mt-10 text-xl">Location</h1>
                        <div className="flex relative">
                            <input
                                className="flex relative w-80 h-16 mt-6 rounded placeholder-italic placeholder-slate-400 font-poppins pl-5 pr-4 text-sm border border-gray-300 focus:outline-none focus:border-blue-500"
                                placeholder="Location"
                            />
                            <FaLocationDot className="absolute right-3 top-11 text-gray-400 size-6" />
                        </div>
                        <div>
                            <h1 className="text-xl mt-5">Category</h1>
                            <div className="relative inline-block text-left mt-5 z-10">
                                <div>
                                    <button
                                        type="button"
                                        className="w-80 h-16 text-sm text-gray-400 inline-flex justify-between items-center rounded-md border font-poppins border-gray-300 shadow-sm px-4 py-2 bg-white font-medium hover:bg-gray-50 focus:outline-none"
                                        id="options-menu"
                                        aria-haspopup="true"
                                        aria-expanded="true"
                                        onClick={toggleDropdown}
                                    >
                                        All Category
                                        <svg
                                            className="-mr-1 ml-2 h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                {isOpen && (
                                    <div
                                        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="options-menu"
                                    >
                                        <div className="py-1" role="none">
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                Data Analytics
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                Design & Creative
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                Full Stack
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                IT & Networking
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                Writing
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-5">
                            <label className="text-xl font-poppins mb-3">Keywords</label>
                            <div className="relative w-76">
                                <input
                                    value={skill}
                                    onChange={handleInputChange1}
                                    className="w-full h-16 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-12 mt-3 focus:outline-none focus:border-blue-500"
                                    placeholder="Keywords"
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h1 className="text-xl">Fix Rate</h1>
                            <h1 className="text-lg w-20 mt-2 font-poppins mb-1 flex items-center justify-between px-3 py-1 bg-white text-black rounded">${amount}</h1>
                            <Slider
                                value={amount}
                                onChange={handleSliderChange}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                                min={0}
                                max={10000}
                                sx={{
                                    color: 'green',
                                    '& .MuiSlider-thumb': {
                                        color: 'blue',
                                    },
                                    '& .MuiSlider-track': {
                                        color: 'blue',
                                    },
                                    '& .MuiSlider-rail': {
                                        color: 'lightgreen',
                                    },
                                }}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-2">
                            <label className="text-xl font-poppins mb-3">Skills</label>
                            <div className="relative w-76">
                                <input
                                    value={skill}
                                    onChange={handleInputChange1}
                                    className="w-full h-16 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-12 mt-3 focus:outline-none focus:border-blue-500"
                                    placeholder="Skills"
                                />
                                <button
                                    onClick={handleAddSkill}
                                    className="h-9 absolute inset-y-0 right-4 top-6 bottom-4 px-2 text-white bg-blue-700 rounded font-poppins text-lg"
                                >
                                    <FaPlus />
                                </button>
                            </div>
                            <ul className="flex mt-4 list-disc pl-5 overflow-y-auto max-h-24">
                                {skills.map((skill, index) => (
                                    <li key={index} className="text-sm font-poppins mb-1 flex items-center justify-between px-3 py-1 bg-blue-500 text-white rounded">
                                        {skill}
                                        <RxCross2
                                            onClick={() => handleDeleteSkill(index)}
                                            className="text-red-500 cursor-pointer ml-2 size-5"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className="flex w-76 h-16 px-14 md:px-32 py-5 bg-blue-800 text-white rounded font-poppins text-base mt-7 self-end hover:bg-black">Search</button>
                    </div>
                </div>
            </div>
        );
    };
export default Sidebar