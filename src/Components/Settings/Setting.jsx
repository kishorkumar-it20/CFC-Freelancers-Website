import React from "react";
import Navbar1 from "../Navbar1";
import MainSidebar from "../Manage/MainSidebar";
import SettingsView from "./SettingsView";
const Setting = ()=>{
    return(
        <div>
            <Navbar1/>
            <div className="flex">
                <MainSidebar/>
                <div className="w-full">
                    <SettingsView/>
                </div>
            </div>
        </div>
    )
}
export default Setting;