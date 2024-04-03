
const Shimmer = () => {
    return (
        <>
            <br />
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box"/>
                    <button>Search</button>
                </div>
                <button className="filter-btn" onClick={() => { filterRestaurants() }} >Top Rated Restaurants</button>
            </div>
            <br />
            <div className="shimmer-container">
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
            </div>
        </>)
}

export default Shimmer;