import ResCard from "./ResCard";
import axios from "axios"
import { useState, useEffect } from 'react'
import Shimmer from "./Shimmer";
import res from "../utils/mockData";


const Body = () => {
  const [restaurants, setRestaurants] = useState([])
  const [searchText, setSearchText] = useState('')
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  useEffect(() => {
    fecthData()
  }, [])

  const fecthData = async () => {
    // const res = await axios.get(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",{
    //     headers:{'Access-Control-Allow-Origin': 'http://localhost:1234'}
    //   }
    // )
    // const dataJson = JSON.parse(data)
    // setRestaurants(dataJson?.data?.cards.filter((card)=> card?.card?.card?.id === "top_brands_for_you")[0].card?.card?.gridElements?.infoWithStyle?.restaurants)
    //   setFilteredRestaurants(dataJson?.data?.cards.filter((card)=> card?.card?.card?.id === "top_brands_for_you")[0].card?.card?.gridElements?.infoWithStyle?.restaurants)
    setTimeout(() => { 
      setRestaurants(res?.data?.cards.filter((card)=> card?.card?.card?.id === "top_brands_for_you")[0].card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurants(res?.data?.cards.filter((card)=> card?.card?.card?.id === "top_brands_for_you")[0].card?.card?.gridElements?.infoWithStyle?.restaurants)
    }, 1000)

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
        {filteredRestaurants.map(value => <ResCard key={value.info.id} resData={value.info} />)}
      </div>
    </div>
  )
}

export default Body;