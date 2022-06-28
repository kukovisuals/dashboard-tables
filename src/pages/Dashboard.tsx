import React from 'react';
// import './App.css';

function Dashboard() {
    return (
        <div className="dashboard">
            <header className="menu">
                <div className="menu-container">
                    <div className="menu-logo">
                        logo
                    </div>
                    <div className="menu-search">
                        <form>
                            <label>
                                <input
                                    type="text"
                                />
                                search for anything
                            </label>
                            <button className="menu-button">o</button>
                        </form>
                    </div>
                    <div className="menu-docs">
                        <span>
                            <a href="#">Docs</a>
                        </span>
                    </div>
                    <div className="menu-alerts">
                        <span>
                            O
                        </span>
                    </div>
                    <div className="menu-profile">
                        <img/>
                        <div>
                            <form>
                                <select>
                                    <option value="grapefruit">Grapefruit</option>
                                    <option value="lime">Lime</option>
                                    <option value="coconut">Coconut</option>
                                    <option value="mango">Mango</option>
                                </select>

                            </form>
                        </div>
                    </div>
                </div>
            </header>


            <nav className="controller">
                <div className="controller-container">
                    <div className="controller-organization">
                        <span>
                            *
                        </span>
                        <span>
                            switch orginization
                        </span>
                        <span>
                            ^
                        </span>
                    </div>
                    <div className="controller-organization-option">
                        <ul>
                            <span>title</span>
                            <li>
                                <span>*</span>
                                <span>users</span>
                            </li>
                        </ul>  
                    </div>
                </div>
            </nav>


            <main className="dashboard-grid">
                <div className="dashboard-grid-container">
                    <div className="dashboard-grid-items">
                        <div className="dashboard-grid-title">
                            <span>
                                title
                            </span>
                        </div>
                        <div className="dashboard-grid-types">
                            <div className="dashboard-grid-types-container">
                                <div className="dashboard-grid-types-image">
                                    <img/>
                                </div>
                                <div className="dashboard-grid-types-name">
                                    <span>
                                        name active savings
                                    </span>
                                </div>
                                <div className="dashboard-grid-types-numbers">
                                    <span>
                                        numbers
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
