import React from "react";
import {
    TableSheet,
    PageName,
    DisplayTypes,
    Pagination,
} from "../";
import { widget } from "../../data/widget";
import "./DashboardElement.scss";

function DashboardElement() {
    return (
        <main className="dashboard-grid">
            <div className="dashboard-grid-container">
                <PageName name="Users" />

                {widget.map((d) => (
                    <DisplayTypes
                        key={d.title}
                        title={d.title}
                        icon={d.icon}
                        amount={d.amount}
                        id={d.id}
                    />
                ))}

                <TableSheet />
                <Pagination />
            </div>
        </main>
    );
}
export default DashboardElement;
