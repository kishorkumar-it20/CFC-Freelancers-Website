import React from "react";
import Navbar1 from "../Navbar1";
import MainSidebar from "./MainSidebar";
import ManageCandidate from "./ManageCandidate";
const CandidateRoute = () =>{
    return(
        <div>
            <div>
            <Navbar1/>
            <div className="flex">
                <MainSidebar className="fixed"/>
               <div className="w-full">
               <ManageCandidate/>
               </div>
            </div>
        </div>
        </div>
    )
}
export default CandidateRoute;