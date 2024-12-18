import React from "react";
import Navbar1 from "../Navbar1";
import MainSidebar from "./MainSidebar";
import ActiveBids from "./ActiveBids";
const ActiveBidRoute = () =>{
    return(
        <div>
            <div>
            <Navbar1/>
            <div className="flex">
                <MainSidebar className="fixed"/>
               <div className="w-full">
               <ActiveBids/>
               </div>
            </div>
        </div>
        </div>
    )
}
export default ActiveBidRoute;