import React from 'react';
import './Menu.scss';
import search from './search.svg';

function Menu() {
    return (
        <header className="menu">
            <div className="menu-container">
                <div className="menu-logo">
                    <img
                        className="menu-logo-img"
                        src="https://i.ibb.co/6mZbfrt/Rimowa-logo-logotype-emblem.webp"
                        alt="logo"
                    />
                </div>
                <div className="menu-search">
                    <form>
                        <input
                            id="menuSearch"
                            name="menuSearch"
                            type="text"
                            placeholder=" "
                        />
                        <label htmlFor="menuSearch">
                            search for anything
                        </label>
                        <button className="menu-button">
                            <img alt="search" src={search}/>
                        </button>
                    </form>
                </div>
                <div className="menu-docs">
                    <span>
                        <a href="http://fretzcastano.com">Docs</a>
                    </span>
                </div>
                <div className="menu-alerts">
                    <span>
                        &#128276;
                    </span>
                </div>
                <div className="menu-profile">
                    <img
                        className="menu-profile-img"
                        src="https://i.ibb.co/CvRMCkM/itm-2013-02-03-13-40-38-1.webp"
                        alt="profile"
                    />
                    <div>
                        <form>
                            <select>
                                <option value="grapefruit">Adedji</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>

                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Menu;
