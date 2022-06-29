import React from "react";
import { Menu, Controller } from "../Components";
import { widget } from "../data/widget";
import axios from "axios";

const url = "https://random-data-api.com/api/users/random_user?size=100";

function Dashboard() {
    const [data, setData] = React.useState([]);
    const [load, setLoad] = React.useState(true);
    const [, setError] = React.useState("");

    React.useEffect(() => {
        axios(url)
            .then((res) => setData(res.data))
            .then((res) => setLoad(false))
            .catch(setError);
    }, []);

    // data.map((d:any) => console.log(d.username) )
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
                                    <th>
                                        <div className="thead-img">
                                        <span>
                                            
                                            ORGANIZATION
                                        </span>
                                        <img
                                            alt="sort"
                                            src="https://visualpharm.com/assets/35/Sorting%20Options-595b40b85ba036ed117de393.svg"
                                        />
                                        </div>
                                    </th>

                                    <th>
                                        <div className="thead-img">
                                        <span>
                                            
                                            USERNAME
                                        </span>
                                        <img
                                            alt="sort"
                                            src="https://visualpharm.com/assets/35/Sorting%20Options-595b40b85ba036ed117de393.svg"
                                        />
                                        </div>
                                    </th>
                                    <th>
                                        <div className="thead-img">
                                        <span>
                                            
                                            EMAIL
                                        </span>
                                        <img
                                            alt="sort"
                                            src="https://visualpharm.com/assets/35/Sorting%20Options-595b40b85ba036ed117de393.svg"
                                        />
                                        </div>
                                    </th>
                                    <th>
                                        <div className="thead-img">
                                        <span>
                                            
                                            PHONE NUMBER
                                        </span>
                                        <img
                                            alt="sort"
                                            src="https://visualpharm.com/assets/35/Sorting%20Options-595b40b85ba036ed117de393.svg"
                                        />
                                        </div>
                                    </th>
                                    <th>
                                        <div className="thead-img">
                                        <span>
                                            
                                            DATE JOINED
                                        </span>
                                        <img
                                            alt="sort"
                                            src="https://visualpharm.com/assets/35/Sorting%20Options-595b40b85ba036ed117de393.svg"
                                        />
                                        </div>
                                    </th>
                                    <th>
                                        <div className="thead-img">
                                        <span>
                                            
                                            STATUS
                                        </span>
                                        <img
                                            alt="sort"
                                            src="https://visualpharm.com/assets/35/Sorting%20Options-595b40b85ba036ed117de393.svg"
                                        />
                                        </div>
                                    </th>
                                </tr>
                            </thead>

                            {!load &&
                                data
                                    .map((d: any, i) => (
                                        <TableData
                                            key={d.email}
                                            organization="Lendsqr"
                                            username={d.username}
                                            email={d.email}
                                            phoneNumber={d.phone_number}
                                            dateJoined={d.date_of_birth}
                                            status={d.subscription.status}
                                        />
                                    ))
                                    .filter((d, i) => i < 10)}
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

interface TableProps {
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: string;
}

interface DisplayProps {
    title: string;
    icon: string;
    amount: number;
    id: number;
}

const TableData = (props: TableProps) => {
    if (props.username === "") {
        return <pre>loading</pre>;
    }
    return (
        <tbody>
            <tr>
                <td>lendsqr</td>
                <td>{props.username}</td>
                <td>{props.email}</td>
                <td>{props.phoneNumber}</td>
                <td>{props.dateJoined}</td>
                <td>{props.status}</td>
            </tr>
        </tbody>
    );
};

function DisplayTypes(props: DisplayProps) {
    const arrColors = ["aqua", "bisque", "coral", "violet"];

    const colorId = arrColors[props.id - 1];

    return (
        <div className="dashboard-grid-types">
            <div className="dashboard-grid-types-container">
                <div
                    className="dashboard-grid-types-image"
                    style={{ backgroundColor: colorId }}
                >
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
