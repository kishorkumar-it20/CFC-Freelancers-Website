import React from "react";
import MainSidebar from "../Manage/MainSidebar";
import BookmarkTask from "./BookmarkTask";
import BookmarksFreelan from "./BookmarksFreelan";
import Navbar1 from "../Navbar1";
const Bookmark = () =>{
    return(
        <div>
            <Navbar1/>
            <div className="flex">
                <MainSidebar className="fixed"/>
               <div className="w-full m-10">
                <h1 className="font-poppins text-2xl tracking-wider">Bookmarks</h1>
               <BookmarksFreelan/>
               <BookmarkTask/>
               </div>
            </div>
        </div>
    )
}
export default Bookmark