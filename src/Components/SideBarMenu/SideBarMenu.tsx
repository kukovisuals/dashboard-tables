import React from "react";
import "./SideBarMenu.scss";
// import { sideBar } from "../../data/sideBar";
import ArrowDown from "../../assets/ArrowDown.svg";
import { ListProps } from "../utilities/_namesAndStuff";

function SideBarMenu() {

    return (
        <nav className="controller-dark-theme">
            <div className="controller-container">
                <SingleHeader
                    icon="https://visualpharm.com/assets/405/Tenses-595b40b65ba036ed117d4c61.svg"
                    title="Explore"
                    iconRight={ArrowDown}
                />
                <SingleHeader
                    icon="https://visualpharm.com/assets/250/User%20Groups-595b40b65ba036ed117d1d46.svg"
                    title="Connect"
                />
                
            </div>
        </nav>
    );
}

const SingleHeader = (props: ListProps) => {
    return (
        <div className="controller-organization">
            <div className="controller-organization-container">
                <img
                    src={props.icon}
                    alt={props.title}
                    className="controller-organization-1"
                />
            </div>
            <div className="controller-organization-title">
                <li>
                    <span>{props.title}</span>
                </li>
            </div>
            <div className="controller-organization-img">
                {props.iconRight && (
                    <img alt="arrow down" src={props.iconRight} />
                )}
            </div>
        </div>
    );
};



export default SideBarMenu;
