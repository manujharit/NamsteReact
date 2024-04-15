import { CDN_URL } from "../utils/constants"
import { Link } from "react-router-dom";

const ResCard = (props) => {
    const { resData } = props
    const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo, id } = resData
    return (
      <div className="m-4 p-4 w-[250px]  bg-red-200 rounded-xl">
        <img className="res-img rounded-lg w-60 h-32" src={CDN_URL + cloudinaryImageId} />
        <h3 className="font-bold py-2 text-md">{name}</h3>
        <span><h5 className="text-md py-2">{avgRating}&nbsp;&nbsp;&nbsp;{costForTwo}&nbsp;&nbsp;&nbsp;{sla.slaString}</h5></span>
        <h5 className="text-sm py-2">{cuisines.join(", ")}</h5>
        <button><Link to={`/restaurants/${id}`}>View</Link></button>
      </div>
    )
  }

  export default ResCard