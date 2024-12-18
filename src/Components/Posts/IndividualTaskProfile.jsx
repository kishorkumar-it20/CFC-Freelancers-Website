import React,{useState} from "react"
import Navbar1 from '../Navbar1'
import { CiStar } from 'react-icons/ci';
import Slider from '@mui/material/Slider';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { FaFolder } from "react-icons/fa6";
import Footer from '../Footer'

const IndividualTaskProfile = () =>{
    const [amount, setAmount] = useState(1500);

    const handleSliderChange = (event, newValue) => {
        setAmount(newValue);
    };
    const [counter, setCounter] = useState(0);
 
    const handleClick1 = () => {
        setCounter(counter + 1);
    };
 
    const handleClick2 = () => {
        setCounter(counter - 1);
    };

    return(
        <div>
            <div>
                <Navbar1/>
            </div>
            <div className="flex relative justify-between">
                <img src="Images\single-task.jpg" alt="" className="h-80 w-full"/>
                <div className="flex absolute justify-between m-20">
                    <div className="flex relative justify-center items-center w-36 h-36 rounded-sm bg-white shadow-lg ml-60">
                        <img src="Images\cpm_logo.png" alt="" className="absolute w-24 h-20"/>
                    </div>
                    <div>
                        <div className="ml-10 mt-2 font-poppins">
                            <h1 className="text-2xl">Food Delivery Mobile Application</h1>
                            <h2 className="text-base mt-3">About the client</h2>
                            <div className='flex mt-3'>
                                <div className="flex">
                                    <CiStar className="size-6 text-yellow-600"/>
                                    <CiStar className="size-6 text-yellow-600"/>
                                    <CiStar className="size-6 text-yellow-600"/>
                                    <CiStar className="size-6 text-yellow-600"/>
                                    <CiStar className="size-6 text-yellow-600"/>
                                </div>
                                <img src="Images/USA.jpg" alt="country" className="w-6 h-4 rounded-sm mt-1 ml-3"/>
                                <h1 className="text-base text-gray-700 ml-2">United States</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col relative justify-center items-center w-96 h-36 rounded-sm bg-white shadow-lg ml-60 font-poppins">
                            <h1 className="text-xl text-gray-500">Project Budget</h1>
                            <h1 className="text-3xl text-black mt-4">$ 1,500 - $ 3,500</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between m-20 ml-80 mr-80 font-poppins">
                <div className="mr-10">
                    <h1 className="text-xl">Project Description</h1>
                    <p className="mt-4 text-justify text-base text-gray-600">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                        Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                    </p>
                    <div className="mt-8">
                        <h1 className="text-xl">Skills Required</h1>
                        <div className="flex flex-wrap mt-5">
                           
                            <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded font-poppins text-md mr-2 mb-2">
                                ios
                            </div>
                            <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded font-poppins text-md mr-2 mb-2">
                                Android
                            </div>
                            <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded font-poppins text-md mr-2 mb-2">
                               Mobile
                            </div>
                            <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded font-poppins text-md mr-2 mb-2">
                                Rest Api
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-xl">Attachments</h1>
                        <FaFolder className="mt-4 size-20 text-gray-400" />
                    </div>
                </div>
                <div className="">
                    <div className="flex relative justify-center items-center w-96 h-16 rounded-lg bg-green-200 mr-10 font-poppins">
                        <h1 className="text-lg">6 hrs 8 mins left</h1>
                    </div>
                    <div className="mt-8 flex flex-col relative w-96 h-97 rounded-lg bg-gray-50 mr-10 font-poppins">
                        <div className="mt-8 flex justify-center w-full h-10 border-b border-b-gray-300">
                            <h1 className="text-xl text-gray-500">Bid on this Job!</h1>
                        </div>
                        <div className="ml-10 mr-10 mt-7">
                            <div>
                                <h1 className="text-lg">Set Your minimal rate</h1>
                                <h1 className="text-xl text-black mt-2 font-serif">${amount}</h1>
                                <Slider
                                    value={amount}
                                    onChange={handleSliderChange}
                                    aria-label="Default"
                                    valueLabelDisplay="auto"
                                    min={1500}
                                    max={3500}
                                    sx={{
                                        color: 'green',
                                        '& .MuiSlider-thumb': {
                                            color: 'green',
                                        },
                                        '& .MuiSlider-track': {
                                            color: 'green',
                                        },
                                        '& .MuiSlider-rail': {
                                            color: 'lightgreen',
                                        },
                                    }}
                                    className="mt-5 mb-3"
                                />
                                <h1 className="text-lg text-gray-500">Set Your <span className="text-black"> Delivery time</span></h1>
                                <div className="flex justify-between mt-5">
                                    <div className="mt-6 flex relative justify-center items-center w-36 h-16 bg-white shadow-lg rounded-lg border border-gray-200">
                                    <button
                                        onClick={handleClick2}
                                        className="h-7 absolute inset-y-0 top-4 left-2 bottom-4 px-2 text-white bg-gray-300 rounded font-poppins text-lg"
                                        >
                                        <FaMinus className="text-white" />
                                    </button>
                                    <h1 className="text-lg text-gray-500">{counter}</h1>
                                    <button
                                        onClick={handleClick1}
                                        className="h-7 absolute inset-y-0 top-4 right-2 bottom-4 px-2 text-white bg-gray-300 rounded font-poppins text-lg"
                                        >
                                        <FaPlus className="text-white"/>
                                    </button>
                                    </div>
                                    <div className="mt-6 flex relative justify-between w-36 h-16 bg-white shadow-lg rounded-lg border border-gray-200">
                                    <select className="w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="option1">Hours</option>
                                        <option value="option2">Day</option>
                                    </select>
                                    </div>
                                </div>
                                <button className="flex ml-2 px-10 md:px-24 py-2 bg-blue-800 text-white rounded font-poppins text-base mt-7 self-end hover:bg-black">Place a Bid</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default IndividualTaskProfile