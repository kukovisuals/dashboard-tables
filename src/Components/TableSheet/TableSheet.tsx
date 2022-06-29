import useFetch from "../Hook/useFetch";
import {HeaderProps, TableProps} from '../utilities/_namesAndStuff';


const url = "https://random-data-api.com/api/users/random_user?size=100";

function TableSheet() {
    const { data, load, error } = useFetch(url);

    return (
        <div className="dashboard-grid-table">
            <table>
                <TableHead />
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
    );
}

const headTitles = [
    "USERNAME",
    "EMAIL",
    "PHONE",
    "NUMBER",
    "DATE JOINED",
    "STATUS",
];

const TableHead = () => (
    <thead>
        <tr>
            {headTitles.map((headNames: string) => (
                <HeaderList header={headNames} key={headNames}
                    altMessage="sort" imageSource="https://visualpharm.com/assets/35/Sorting%20Options-595b40b85ba036ed117de393.svg"
                 />
            ))}
            
        </tr>
    </thead>
);

const HeaderList = (props: HeaderProps) => (
    <th>
        <div className="thead-img">
            <span>{props.header}</span>
            <img alt={props.altMessage} src={props.imageSource} />
        </div>
    </th>
);


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

export default TableSheet;
