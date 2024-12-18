import React from "react";
import ClientsSidebar from "./Clientsside";
import Clientspro from "./Clientspro";
import Navbar1 from "../Navbar1";
const ClientsPage = () =>{
    return(
        <div className="h-screen flex flex-col">
        <Navbar1/>
        <div className="flex flex-grow overflow-hidden">
            <ClientsSidebar/>
            <div className="w-full overflow-auto">
                <Clientspro/>
            </div>
        </div>
    </div>
    )
}
export default ClientsPage;