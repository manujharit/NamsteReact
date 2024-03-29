import ResCard from "./ResCard";
import resList from "../utils/mockData";
import {useState} from 'react'
const Body = () => {
  const [restaurants,setRestaurants] = useState(resList)

  const filterRestaurants = ()=> {
    setRestaurants(
      restaurants.filter((res)=>res.info.avgRating > 4.3)
    )
  }
    return (
      <div className="body">
        <br />
        <div className="filter">
          <button className="filter-btn" onClick={()=>{filterRestaurants()}} >Top Rated Restaurants</button>
        </div>
        <br />
        <div className="res-container">
          {restaurants.map(value => <ResCard key = {value.info.id} resData={value.info} />)}
        </div>
      </div>
    )
  }

export default Body;