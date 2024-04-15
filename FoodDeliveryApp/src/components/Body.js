import ResCard from "./ResCard";
import { useState, useEffect } from 'react'
import Shimmer from "./Shimmer";
import fetchWithProxy from "../utils/fetchProxy";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";

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

  const onlineStatus = useOnlineStatus()
  if (onlineStatus === false) return <Offline />
  return !restaurants.length ? <Shimmer /> : (
    <div className="body">
      <br />
      <div className="flex">
        <div className="search m-4 p-4">
          <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => { handleSearchTextChange(e) }} />
          <button className="px-4 py-2 bg-green-100 m-4 border border-solid rounded-lg" onClick={() => {
            searchRestaurants()
          }}>Search</button>
        </div>
        <button className="px-4 py-2 bg-gray-100 m-4 " onClick={() => { filterRestaurants() }} >Top Rated Restaurants</button>
      </div>
      <br />
      <div className="flex flex-wrap">
        {filteredRestaurants.map(value => <ResCard key={value.info.id} resData={value.info} />)}
      </div>
    </div>
  )
}

export default Body;