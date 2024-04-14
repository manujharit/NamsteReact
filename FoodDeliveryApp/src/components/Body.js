import ResCard from "./ResCard";
import { useState, useEffect } from 'react'
import Shimmer from "./Shimmer";
import fetchWithProxy from "../utils/fetchProxy";
import { Link } from "react-router-dom";


const Body = () => {
  const [restaurants, setRestaurants] = useState([])
  const [searchText, setSearchText] = useState('')
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  useEffect(() => {
    fecthData()
  }, [])

  const fecthData = async () => {
    const data = await fetchWithProxy("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9195875&lng=75.78796080000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
    setRestaurants(data?.data?.cards.filter((card) => card?.card?.card?.id === "top_brands_for_you")[0].card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(data?.data?.cards.filter((card) => card?.card?.card?.id === "top_brands_for_you")[0].card?.card?.gridElements?.infoWithStyle?.restaurants)

  }

  const filterRestaurants = () => {
    setFilteredRestaurants(
      restaurants.filter((res) => res.info.avgRating > 4.3)
    )
  }

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value)
  }

  const searchRestaurants = () => {
    setFilteredRestaurants(
      restaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
    )
  }


  return !restaurants.length ? <Shimmer /> : (
    <div className="body">
      <br />
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => { handleSearchTextChange(e) }} />
          <button onClick={() => {
            searchRestaurants()
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => { filterRestaurants() }} >Top Rated Restaurants</button>
      </div>
      <br />
      <div className="res-container">
        {filteredRestaurants.map(value =><ResCard key={value.info.id} resData={value.info} />)}
      </div>
    </div>
  )
}

export default Body;