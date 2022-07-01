import React from "react";

interface DisplayProps {
    title: string;
    icon: string;
    amount: number;
    id: number;
}

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

export default DisplayTypes;
