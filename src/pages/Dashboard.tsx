import React from "react";
import {
    Menu,
    SideBarMenu,
    DashboardElement,
} from "../Components";

function Dashboard() {
    return (
        <div className="dashboard">
            <Menu />
            <SideBarMenu />
            <DashboardElement />
        </div>
    );
}

export default Dashboard;
