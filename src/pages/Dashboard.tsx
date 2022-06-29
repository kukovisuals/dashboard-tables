import React from "react";
import {
    Menu,
    Controller,
    DashboardElement,
} from "../Components";

function Dashboard() {
    return (
        <div className="dashboard">
            <Menu />
            <Controller />
            <DashboardElement />
        </div>
    );
}

export default Dashboard;
