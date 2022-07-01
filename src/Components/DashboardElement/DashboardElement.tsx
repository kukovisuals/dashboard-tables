import React from "react";
import {
} from "../";
// import { widget } from "../../data/widget";
import "./DashboardElement.scss";

function DashboardElement() {
    const yellow = '#F2B807'
    const blue = '#17a4f0'

    return (
        <main className="dashboard-grid">
            <div className="dashboard-grid-container">
                
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                >
                  <g className="plot-area" >
                      <circle fill={yellow} cx="15" cy="5" r="10"/>
                      <circle  fill={blue} cx="50" cy="5" r="10"/>
                      <text x="9" y="5" className="javaScript-text">JavaScript</text>
                      <text x="45" y="5" className="python-text">Python</text>
                  </g>
                </svg>
            </div>
        </main>
    );
}
export default DashboardElement;
