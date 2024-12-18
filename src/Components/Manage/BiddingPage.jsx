import React, { useState, useEffect } from "react";
import { useAuth } from '../Auth';
import { toast } from 'react-toastify';
import Navbar1 from "../Navbar1";
import MainSidebar from './MainSidebar';

const BiddingPage = () => {
    const [bids, setBids] = useState([]);
    const { user } = useAuth();

    // Simulated bid data
    const mockBidsData = [
        {
            taskId: 1,
            taskName: "Design a website",
            bidderEmail: "user@example.com",
            bidAmount: 200,
            bidoffered: true,
        },
        
    ];

    useEffect(() => {
        // Filter bids that match the logged-in user's email
        const userBids = mockBidsData.filter(bid => bid.bidderEmail === user.email);
        setBids(userBids);

        // Check if there are no bids
        if (userBids.length === 0) {
            toast.info('No bids found for you');
        }
    }, [user.email]);

    return (
        <div>
            <Navbar1 />
            <div className="flex">
                <MainSidebar />
                <div className="m-10 font-poppins">
                    <h1 className="font-poppins text-xl">Your Bids</h1>
                    <div className="grid grid-cols-5 gap-8 mt-10">
                        {bids.length > 0 ? (
                            bids.map((bid, index) => (
                                <div key={index} className="pt-4 rounded shadow-md">
                                    <div className="m-5">
                                        <h1 className="font-poppins text-lg">{bid.taskName}</h1>
                                        <p className="text-gray-500 text-md ml-1 mt-1">Bid Amount: ${bid.bidAmount}</p>
                                    </div>
                                    <div className={`flex w-40 h-8 mb-5 justify-center rounded-lg ml-3 ${bid.bidoffered ? 'bg-green-200' : 'bg-red-400'}`}>
                                        <h1 className="text-sm mt-1">{bid.bidoffered ? 'Approved' : 'Approval Pending'}</h1>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-5 text-center text-gray-500">
                                No bids available.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BiddingPage;
