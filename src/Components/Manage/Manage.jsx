import React from "react";
import MainSidebar from "./MainSidebar";
import ManageTask from "./ManageTask";
import Navbar1 from "../Navbar1";

const Manage = () => {
    return(
        <div>
            <Navbar1/>
            <div className="flex">
                <MainSidebar className="fixed"/>
               <div className="w-full">
               <ManageTask/>
               </div>
            </div>
        </div>
    )
}
export default Manage;