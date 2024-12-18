import React, { useState } from 'react';
import PostTask from "./PostTask";
import Navbar1 from '../Navbar1'
import Sidebar from '../Manage/MainSidebar'

const Topost = () =>{
    const [tasks, setTasks] = useState([]);

    const handleTaskPosted = (newTask) => {
      setTasks([...tasks, newTask]);
    };
    return(
        <div>
            <div>
            <Navbar1/>
            <div className="flex">
                <Sidebar/>
               <div className="w-full">
               <PostTask  onTaskPosted={handleTaskPosted}/>
               </div>
            </div>
        </div>
        </div>
    )
}
export default Topost;