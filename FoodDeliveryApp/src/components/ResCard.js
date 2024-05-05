import { CDN_URL } from "../utils/constants"
import { Link } from "react-router-dom";

const ResCard = (props) => {
  const { resData } = props
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo, id } = resData
  return (
    <div>
      <div className="m-4 py-6 px-4 w-[250px] h-[400px]  bg-red-200 rounded-xl">
        <div className="h-[330px]">
          <img className="res-img rounded-lg w-60 h-32" src={CDN_URL + cloudinaryImageId} />
          <h3 className="font-bold py-2 text-md">{name}</h3>
          <span><h5 className="text-md py-2">{avgRating}&nbsp;&nbsp;&nbsp;{costForTwo}&nbsp;&nbsp;&nbsp;{sla.slaString}</h5></span>
          <h5 className="text-sm py-2">{cuisines.join(", ")}</h5>
        </div>
        <div className="flex justify-center items-start h-[50px]">
          <button className="border border-solid border-black rounded-lg p-1 bg-gray-500"><Link to={`/restaurants/${id}`}>View</Link></button>
        </div>
      </div>

    </div>
  )
}

//higher order component
// input- resCard
// Output - resCardPromoted

const withPromotedLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-red-700 text-white m-4 px-1 rounded-e-3xl rounded-t-3xl text-sm">Top Rated</label>
        <ResCard {...props} />
      </div>
    )
  }
}

export { ResCard, withPromotedLabel }