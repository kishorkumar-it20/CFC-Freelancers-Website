import React from "react";
import { MdOutlineFaceUnlock } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { CiStar } from "react-icons/ci";

const BookmarksFreelan = ({ bookmarked = [] }) => {
    return (
        <div>
            <div className="mt-5 w-auto h-auto border rounded shadow-lg">
                <div className="flex mt-5 ml-10 mb-5 justify-between">
                    <div className="flex">
                        <MdOutlineFaceUnlock className="size-7 text-blue-800 mt-1" />
                        <h1 className="ml-2 text-lg mt-1 font-poppins tracking-wider">Bookmarked Freelancers</h1>
                    </div>
                </div>

                {bookmarked.map((bidder, index) => (
                    <div key={index} className="flex justify-between w-auto h-40 rounded border-t border-t-gray-200 hover:<MdDeleteOutline">
                        <div className="flex flex-col">
                            <div className="flex mt-5 ml-10">
                                <img src={bidder.profileImg} alt="" className="rounded-full w-28 h-28" />
                                <div className="ml-7">
                                    <div className="flex mt-3">
                                        <h1 className="font-poppins text-xl">{bidder.name}</h1>
                                        <img src={bidder.countryImg} alt="country" className="w-6 h-4 rounded-sm ml-2 mt-2" />
                                    </div>
                                    <div className="flex mt-3">
                                        <IoMdMail className="size-4 mt-1 text-gray-400" />
                                        <h1 className="font-poppins ml-2 text-base text-gray-400">{bidder.email}</h1>
                                    </div>
                                    <div className="flex mt-3">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <CiStar key={i} className="size-5 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookmarksFreelan;
