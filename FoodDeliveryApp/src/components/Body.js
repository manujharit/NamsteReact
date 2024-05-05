import { ResCard, withPromotedLabel } from "./ResCard";
import { useState, useEffect, useContext } from 'react'
import HomeShimmer from "./shimmers/HomeShimmer";
import fetchWithProxy from "../utils/fetchProxy";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";
import UserContext from "../utils/userContext";

const Body = () => {
  const [restaurants, setRestaurants] = useState([])
  const [searchText, setSearchText] = useState('')
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  useEffect(() => {
    fecthData()
  }, [])

  const fecthData = async () => {
    const data = await fetchWithProxy("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    // console.log(data?.data?.cards/*.filter((card) => card?.card?.card?.id === "top_brands_for_you")[0]/*.card?.card?.gridElements?.infoWithStyle?.restaurants*/)
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
  const ResCardPromoted = withPromotedLabel(ResCard)
  const onlineStatus = useOnlineStatus()

  if (onlineStatus === false) return <Offline />

  const data = useContext(UserContext)



  return !restaurants.length ? <HomeShimmer /> : (
    <div className="body">
      <br />
      <div className="flex justify-center font-bold text-2xl">
       Hi {data.loggedInUser} !!!
      </div>
      <div className="flex  m-4 p-4">
        <div className="search">
          <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => { handleSearchTextChange(e) }} />
          <button className="px-4 py-2 bg-green-100 m-4 border border-solid rounded-lg" onClick={() => {
            searchRestaurants()
          }}>Search</button>
        </div>
        <button className="px-4 py-2 bg-gray-100 m-4 w-56 h-10" onClick={() => { filterRestaurants() }} >Top Rated Restaurants</button>
        
      </div>
      <br />
      <div className="flex flex-wrap  justify-between">
        {filteredRestaurants.map(value => value.info.avgRating >= 4.3 ? <ResCardPromoted key={value.info.id} resData={value.info} /> : <ResCard key={value.info.id} resData={value.info} />
        )}
      </div>
    </div>
  )
}

export default Body;