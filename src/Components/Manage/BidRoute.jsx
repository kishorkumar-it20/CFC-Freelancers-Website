import React from "react";
import Navbar1 from "../Navbar1";
import MainSidebar from "./MainSidebar";
import ManageBid from "./ManageBid";
const BidRoute = () =>{
    return(
        <div>
            <Navbar1/>
            <div className="flex">
                <MainSidebar className="fixed"/>
               <div className="w-full">
               <ManageBid/>
               </div>
            </div>
        </div>
    )
}
export default BidRoute;