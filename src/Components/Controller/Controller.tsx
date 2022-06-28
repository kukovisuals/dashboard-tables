import './Controller.scss';

function Controller() {
    return (
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
    );
}

export default Controller;
