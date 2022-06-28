import './Menu.scss';

function Menu() {
    return (
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
    );
}

export default Menu;
