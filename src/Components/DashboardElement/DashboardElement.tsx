import React from "react";
import { Menu, Controller, TableSheet,PageName, DisplayTypes } from "../";
import { widget } from "../../data/widget";

function DashboardElement() {

    return (
        <main className="dashboard-grid">
            <div className="dashboard-grid-container">
                <PageName name="Users"/>

                {widget.map((d) => (
                    <DisplayTypes
                        key={d.title}
                        title={d.title}
                        icon={d.icon}
                        amount={d.amount}
                        id={d.id}
                    />
                ))}
                
                <TableSheet/>
                <Pagination/>
            </div>                
        </main>
    );
}


const Pagination = () => {
    
    return (
        <div className="pagination">
            <div className="pagination-container">
                <div className="pagination-left">
                    <span>showing</span>

                    <form>
                        <select>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="1000">1000</option>
                        </select>
                    </form>

                    <span>out of 100</span>
                </div>
                <div className="pagination-right">
                    <ul>
                        <li>
                            <button> left </button>
                        </li>
                        <li>
                            <span>16</span>
                        </li>

                        <li>
                            <span>...</span>
                        </li>
                        <li>
                            <span>1</span>
                        </li>
                        <button> right</button>
                    </ul>
                </div>
            </div>
        </div>
        )

}

export default DashboardElement;
