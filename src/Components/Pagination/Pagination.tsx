const Pagination = () => {
    
    return (
        <div className="pagination">
            <div className="pagination-container">
                <div className="pagination-left">
                    <span>showing</span>

                    <form>
                        <select>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="1000">1000</option>
                        </select>
                    </form>

                    <span>out of 100</span>
                </div>
                <div className="pagination-right">
                    <ul>
                        <li>
                            <button> left </button>
                        </li>
                        <li>
                            <span>16</span>
                        </li>

                        <li>
                            <span>...</span>
                        </li>
                        <li>
                            <span>1</span>
                        </li>
                        <button> right</button>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Pagination;