import React from 'react';
// import './App.css';

function Login() {
    return (
        <div className="login">
            <div className="login-container">
                <div className="login-grid">

                    <div className="login-item1">
                        logo
                    </div>
                    <div className="login-item2">
                        Image
                    </div>
                    <div className="login-item3">
                        <div className="login-item3-welcome">
                            <span className="login-item3-welcome-title">Welcome</span>
                        </div>
                        <div className="login-item3-welcome">
                            <span className="login-item3-welcome-title">
                                <a href="#">details to login</a>
                            </span>
                        </div>
                        <div className="login-item3-welcome">
                            <div className="login-item3-welcome-form">
                                <form>
                                    <label>
                                        <input
                                            type="email"
                                        />
                                        Email
                                    </label>
                                    <br/>
                                    <label>
                                        <input
                                            type="password"
                                        />
                                        Password
                                    </label>
                                    <br/>
                                    <span className="login-item3-welcome-form-forgotpassword">
                                        <a href="#">forgot Password</a>
                                    </span>
                                    <div className="login-item3-welcome-form-button">
                                        <button>LOG IN</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default Login;
