import React from "react";
import Bannerinfo from "./Bannerinfo";
import Popular from "./Popular";
import Recent from "./Recent";
import Blogs from "./Blogs";
import Freelancer from "./Freelancers";
import MemberShip from "./MemberShip";
import Footer from './Footer';
import Clients from './Clients';
import { useAuth } from './Auth'; // Adjust the import path according to your file structure

const Banner = () => {
    const { user } = useAuth();

    return (
        <div>
            <Bannerinfo className="absolute z-1" />
            <div className="relative">
                <div className="overflow-hidden banner z-0">
                    <img src="Images/home-video-background-poster.jpg" alt="" className="w-full h-100 z-10" />
                    <div className="absolute inset-0 bg-black opacity-75"></div>
                </div>
            </div>
            <Popular />
            <div>
                {user && user.role === 'freelancer' ? (
                    <Freelancer />
                ) : (
                    <Clients />
                )}
            </div>
            <div>
                <Blogs />
            </div>
            <div>
            {user && user.role === 'freelancer' ? (
                    <Recent />
                ) : (
                    ""
                )}
            </div>
            <div>
                <MemberShip />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Banner;
