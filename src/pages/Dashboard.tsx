import React from "react";
import { Menu, Controller } from "../Components";
import { widget } from "../data/widget";

function Dashboard() {
    console.log(widget);
    return (
        <div className="dashboard">
            <Menu />
            <Controller />

            <main className="dashboard-grid">
                <div className="dashboard-grid-container">
                    <div className="dashboard-grid-title">
                        <span>Users</span>
                    </div>

                    {widget.map((d) => (
                        <DisplayTypes
                            key={d.title}
                            title={d.title}
                            icon={d.icon}
                            amount={d.amount}
                            id={d.id}
                        />
                    ))}

                    <div className="dashboard-grid-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>ORGANIZATION</th>
                                    <th>USERNAME</th>
                                    <th>EMAIL</th>
                                    <th>PHONE NUMBER</th>
                                    <th>DATE JOINED</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>lendsqr</td>
                                    <td>MariaAnders</td>
                                    <td>maria@gmail.com</td>
                                    <td>8886365544</td>
                                    <td>May 15, 2020 10:00 AM</td>
                                    <td>Inactive</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
                </div>
            </main>
        </div>
    );
}

interface DisplayProps {
    title: string;
    icon: string;
    amount: number;
    id: number;
}

function DisplayTypes(props: DisplayProps) {
    const arrColors = ["aqua", "bisque", "coral", "violet"];

    const colorId = arrColors[props.id - 1]

    return (
        <div className="dashboard-grid-types">
            <div className="dashboard-grid-types-container">
                <div className="dashboard-grid-types-image" style={{'backgroundColor': colorId}}>
                    <img alt="user profile" src={props.icon} />
                </div>
                <div className="dashboard-grid-types-name">
                    <span>{props.title.toUpperCase()}</span>
                </div>
                <div className="dashboard-grid-types-numbers">
                    <span>{props.amount}</span>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
