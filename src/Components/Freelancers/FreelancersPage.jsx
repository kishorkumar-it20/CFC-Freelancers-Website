import React from "react";
import FreelancerSidebar from "./FreelancerSidebar";
import Freelancerpro from "./Freelancerpro";
import Navbar1 from "../Navbar1";

const FreelancersPage = () =>{
    return(
        <div className="h-screen flex flex-col">
        <Navbar1 />
        <div className="flex flex-grow overflow-hidden">
            <FreelancerSidebar />
            <div className="w-full overflow-auto">
                <Freelancerpro />
            </div>
        </div>
    </div>
    )
}
export default FreelancersPage;