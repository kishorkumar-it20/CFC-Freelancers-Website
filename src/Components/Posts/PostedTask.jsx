import React from "react";
import Sidebar from "./Sidebar";
import Task from "./Task"
import Navbar1 from "../Navbar1";

const PostedTask = () =>{
    return(
        <div>
            <Navbar1/>
            <div className="flex">
                <Sidebar/>
               <div className="w-full">
               <Task/>
               </div>
            </div>
        </div>
    )
}
export default PostedTask;