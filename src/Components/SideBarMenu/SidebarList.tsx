import { ListProps, OptionsProps } from "../utilities/_namesAndStuff";
/*
    * List to print ul li list of elements
    *
*/

const SideBarList = (props: OptionsProps) => {
    const keyGraber = Object.keys(props.listOptions);

    if (keyGraber.length === 0) {
        return <pre>loading</pre>;
    }

    const iterator = props.listOptions[keyGraber[2]];

    return (
        <div className="controller-organization-option">
            <ul className="controller-currentPage-ul">
                {iterator.map((sideBar: any) => (
                    <List
                        key={sideBar.title}
                        icon={sideBar.icon}
                        title={sideBar.title}
                    />
                ))}
            </ul>
        </div>
    );
};

const List = (props: ListProps) => {
    return (
        <>
            <li className="controller-currentPage-li-1">
                <div className="controller-currentPage-container-li">
                    {props.icon && (
                        <img
                            src={props.icon}
                            alt={props.title}
                            className="controller-currentPage-li"
                        />
                    )}

                </div>
                <div className="controller-currentPage-li-2">
                    <span>{props.title}</span>
                </div>
            </li>
            
        </>
    );
};