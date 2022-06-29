import React from "react";
import {LoginForm} from '../Components';

function Login() {
    return (
        <div className="login">
            <div className="login-container">
                <div className="login-grid">
                    <div className="login-item1">
                        <img
                            className="login-item1-img"
                            src="https://i.ibb.co/6mZbfrt/Rimowa-logo-logotype-emblem.webp"
                            alt="logo"
                        />
                    </div>
                    <div className="login-item2">
                        <img
                            className="login-item2-img"
                            src="https://i.ibb.co/2cLYLBY/Screenshot-2022-06-28-164139.png"
                            alt="logo"
                        />
                    </div>
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
}

export default Login;
